import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    const apiKey = process.env.API_KEY;
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
  
  // Primary: Gemini 3 (Reasoning/Complex)
  // Note: If your key doesn't have access to Preview 3, this will fail and switch to fallback.
  const primaryModel = "gemini-3-pro-preview";
  
  // Fallback: Gemini 2.0 Flash (High speed, very reliable)
  // User reported "2.5" works, which likely refers to the 2.0 Flash series or 1.5 Pro. 
  // 2.0 Flash is the best fallback for latency and availability.
  const fallbackModel = "gemini-2.0-flash"; 

  const conversationHistory = history.map(h => ({
    role: h.role,
    parts: h.parts
  }));

  try {
    console.log(`Attempting with primary model: ${primaryModel}`);
    const chat = client.chats.create({
      model: primaryModel,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        // thinkingConfig is specific to Gen 3 models
        thinkingConfig: {
            thinkingBudget: 1024, 
        },
        temperature: 0.7,
      },
      history: conversationHistory
    });

    const result = await chat.sendMessage({ message });
    return result.text;

  } catch (error: any) {
    console.warn(`Primary model (${primaryModel}) failed. Switching to fallback (${fallbackModel}).`);
    console.warn("Primary Error Details:", error);
    
    try {
      const fallbackChat = client.chats.create({
        model: fallbackModel,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          // Removed thinkingConfig for Flash model as it can cause errors if unsupported
          temperature: 0.7,
        },
        history: conversationHistory
      });

      const fallbackResult = await fallbackChat.sendMessage({ message });
      return fallbackResult.text;

    } catch (fallbackError: any) {
      console.error("FATAL: Fallback model also failed.");
      console.error("Fallback Error Details:", fallbackError);
      throw new Error(`AI Service Unavailable: ${fallbackError.message || 'Unknown error'}`);
    }
  }
};