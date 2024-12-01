import { Language, LanguageDto } from '../dto/language.dto';

// sets the default language to english
export const DEFAULT_LANGUAGE: Language = 'en';
// comment
export const AVAILABLE_LANGUAGES: Language[] = Object.values(LanguageDto);
// comment
export const LOCALES: { [key in LanguageDto]: string } = {
  cs: 'cs_CZ',
  en: 'en_US',
};
