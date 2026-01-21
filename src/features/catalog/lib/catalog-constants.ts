export const CATEGORIES = [
    { id: 'covid', label: 'COVID-19' },
    { id: 'general-clinical', label: 'Общеклинические исследования' },
    { id: 'immunohematology', label: 'Иммуногематология' },
    { id: 'hemostasiology', label: 'Гемостазиологические исследования' },
    { id: 'prenatal', label: 'Пренатальная диагностика' },
    { id: 'carbohydrate-metabolism', label: 'Диагностика углеводного обмена (сахарный диабет, метаболический синдром)' },
    { id: 'cardiovascular', label: 'Диагностика сердечно-сосудистых заболеваний' },
    { id: 'genetic', label: 'Генетические исследования в консультацией врача генетика' },
] as const;

export const GENDERS = [
    { value: 'any', label: 'Пол' },
    { value: 'male', label: 'Мужской' },
    { value: 'female', label: 'Женский' },
] as const;

export const AGES = [
    { value: 'any', label: 'Возраст' },
    { value: 'child', label: 'Дети' },
    { value: 'adult', label: 'Взрослые' },
    { value: 'elderly', label: 'Пожилые' },
] as const;

export const BODY_SYSTEMS = [
    { value: 'any', label: 'Системы организма' },
    { value: 'immune', label: 'Иммунная' },
    { value: 'cardio', label: 'Сердечно-сосудистая' },
    { value: 'digestive', label: 'Пищеварительная' },
] as const;

export const DISEASES = [
    { value: 'any', label: 'Болезни' },
    { value: 'diabetes', label: 'Диабет' },
    { value: 'hypertension', label: 'Гипертония' },
] as const;

export type CategoryId = typeof CATEGORIES[number]['id'];
