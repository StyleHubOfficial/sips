import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let aiClient: GoogleGenAI | null = null;

// Robust API Key Loader based on user provided pattern
const getApiKey = () => {
  let apiKey = '';
  
  // 1. Check Vite (Standard for AI Studio / React apps)
  if (typeof import.meta !== 'undefined' && (import.meta as any).env) {
    apiKey = (import.meta as any).env.VITE_GEMINI_API_KEY || (import.meta as any).env.VITE_API_KEY || (import.meta as any).env.API_KEY;
  }
  
  // 2. Check Next.js (Standard for Next.js apps)
  if (!apiKey && typeof process !== 'undefined' && process.env) {
    apiKey = process.env.NEXT_PUBLIC_API_KEY;
  }
  
  // 3. Check General Node/System (Fallback)
  if (!apiKey && typeof process !== 'undefined' && process.env) {
    apiKey = process.env.API_KEY || process.env.REACT_APP_API_KEY;
  }
  
  return apiKey;
};

const getClient = () => {
  if (!aiClient) {
    const apiKey = getApiKey();
    if (!apiKey) {
        console.error("CRITICAL: API Key is missing. Please check VITE_GEMINI_API_KEY in Vercel settings.");
        throw new Error("API Key missing");
    }
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
};

export const sendMessageToAI = async (
  message: string, 
  history: { role: string; parts: { text: string }[] }[]
) => {
  const client = getClient();
  
  // Using 'gemini-flash-latest' as it refers to the latest stable Flash model (e.g., 2.0 Flash)
  // This is highly stable, fast, and cost-effective, preventing "System connection errors" 
  // often caused by overloaded Preview models.
  const modelName = "gemini-flash-latest"; 

  const conversationHistory = history.map(h => ({
    role: h.role,
    parts: h.parts
  }));

  try {
    const chat = client.chats.create({
      model: modelName,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: conversationHistory
    });

    const result = await chat.sendMessage({ message });
    return result.text;

  } catch (error: any) {
    console.error("AI Service Error:", error);
    
    // Fallback attempt if the generic alias fails, try specific 2.0 Flash
    try {
        console.warn("Retrying with fallback model gemini-2.0-flash...");
        const fallbackChat = client.chats.create({
            model: "gemini-2.0-flash",
            config: { systemInstruction: SYSTEM_INSTRUCTION },
            history: conversationHistory
        });
        const fallbackResult = await fallbackChat.sendMessage({ message });
        return fallbackResult.text;
    } catch (fallbackError) {
        throw new Error("System connection error. Please check your API key and try again.");
    }
  }
};