import es from './es';
import fr from './fr';
import de from './de';
import pt from './pt';
import ja from './ja';
import zh from './zh';
import ar from './ar';
import ru from './ru';
import it from './it';
import ko from './ko';

export type PageTranslation = {
  title: string;
  description: string;
  h1: string;
  lede: string;
  bodyHtml?: string;
};

export type Translation = {
  nav: { encoders: string; decoders: string; convert: string; tools: string; learn: string };
  common: { useTool: string; toolNote: string; privacyNote: string };
  pages: Record<string, PageTranslation>;
  homeExtra: {
    eyebrowSub: string;
    meta1: string; meta2: string; meta3: string;
    toolsH2: string; toolsP: string;
    howH2: string; howP: string;
    step1H: string; step1P: string;
    step2H: string; step2P: string;
    step3H: string; step3P: string;
    faqH2: string;
    faqs: Array<{ q: string; a: string }>;
  };
};

const translations: Record<string, Translation> = { es, fr, de, pt, ja, zh, ar, ru, it, ko };
export default translations;
