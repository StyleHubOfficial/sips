export interface ModuleItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  modalContent: {
    purpose: string;
    howItWorks: string;
    benefit: string;
  };
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export enum SectionId {
  HERO = 'hero',
  WHY = 'why',
  MODULES = 'modules',
  EVOLUTION = 'evolution',
  BENEFITS = 'benefits',
  AI = 'ai',
  PILOT = 'pilot',
  ROADMAP = 'roadmap',
}