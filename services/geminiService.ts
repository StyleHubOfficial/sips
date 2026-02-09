import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    if (!process.env.API_KEY) {
        console.warn("API Key not found");
    }
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }
  return aiClient;
};

export const sendMessageToAI = async (
  message: string, 
  history: { role: string; parts: { text: string }[] }[]
) => {
  const client = getClient();
  
  // Primary model: Gemini 3 Pro Preview (Reasoning)
  const primaryModel = "gemini-3-pro-preview";
  // Fallback model: Gemini 2.5 Flash (Speed/Reliability)
  const fallbackModel = "gemini-2.5-flash-preview";

  // Filter history to ensure it matches the API expectations if needed
  const conversationHistory = history.map(h => ({
    role: h.role,
    parts: h.parts
  }));

  try {
    // Attempt with Primary Model (Gemini 3)
    const chat = client.chats.create({
      model: primaryModel,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        thinkingConfig: {
            thinkingBudget: 1024, // Budget for reasoning
        },
        temperature: 0.7,
      },
      history: conversationHistory
    });

    const result = await chat.sendMessage({
      message: message
    });

    return result.text;

  } catch (error: any) {
    console.warn(`Primary model (${primaryModel}) failed. Switching to fallback (${fallbackModel}). Error:`, error.message);
    
    // Fallback attempt (Gemini 2.5 Flash)
    try {
      const fallbackChat = client.chats.create({
        model: fallbackModel,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          // Gemini 2.5 Flash typically doesn't use thinkingConfig in the same way or it might be ignored/unsupported in this context,
          // so we use standard config.
          temperature: 0.7,
        },
        history: conversationHistory
      });

      const fallbackResult = await fallbackChat.sendMessage({
        message: message
      });

      return fallbackResult.text;
    } catch (fallbackError) {
      console.error("Fallback model failed as well:", fallbackError);
      throw fallbackError;
    }
  }
};