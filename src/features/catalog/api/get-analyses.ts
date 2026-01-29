import { Analysis, Category } from "@/types/analysis";

// ВАЖНО: Мы используем id: string, так как это было в вашем исходном коде.
// Если решите перейти на number, просто уберите кавычки у id.

export const ANALYSIS_CATEGORIES: Category[] = [
    {
        id: 100, slug: 'covid-19', name: 'Covid-19', productsCount: 12,
        children: [
            { id: 101, slug: 'pcr-test', name: 'ПЦР-тест на коронавирус', productsCount: 3 },
            { id: 102, slug: 'antibody', name: 'Анализ на антитела', productsCount: 4 },
        ]
    },
    { id: 200, slug: 'biochemistry', name: 'Биохимические исследования', productsCount: 120 },
    { id: 300, slug: 'hormones', name: 'Гормоны', productsCount: 35 },
    { id: 400, slug: 'general', name: 'Общеклинические исследования', productsCount: 45 },
    { id: 500, slug: 'vitamins', name: 'Витамины', productsCount: 15 },
];

export const COMPLEX_CATEGORIES: Category[] = [
    { id: 901, slug: 'woman-health', name: 'Женское здоровье', productsCount: 5 },
    { id: 902, slug: 'man-health', name: 'Мужское здоровье', productsCount: 4 },
    { id: 903, slug: 'checkup', name: 'Чек-апы', productsCount: 8 },
];

const MOCK_DATA: Analysis[] = [
    // --- 1. Популярные и Общеклинические ---
    {
        id: "1",
        article: "15.105",
        slug: "clinical-blood-test", // ЧПУ
        categorySlug: "general",     // Связь с категорией "Общеклинические"
        name: "Клинический анализ крови: общий анализ, лейкоформула, СОЭ",
        price: 690,
        oldPrice: null,
        deadline: "1 день",
        biomaterial: "Венозная кровь",
        method: "Проточная цитофлуометрия, капиллярная микрофотометрия",
        description: "Клинический анализ крови (КАК) — это одно из самых распространенных лабораторных исследований, которое используется для оценки общего состояния здоровья. Он включает в себя определение количества эритроцитов, лейкоцитов, тромбоцитов, уровня гемоглобина и скорости оседания эритроцитов (СОЭ).",
        preparation: `
                Кровь рекомендуется сдавать утром (в период с 8 до 11 часов), натощак (не менее 8 и не более 14 часов голодания, воду пить можно).
                Накануне избегать пищевых перегрузок.
                Исключить физическое и эмоциональное перенапряжение и не курить 30 минут до сдачи крови.
        `,
        interpretation: `
            Результаты анализа должны интерпретироваться врачом. Отклонение показателей от нормы может свидетельствовать о наличии воспалительных процессов, анемии, инфекционных заболеваний и других патологий.
        `,
        indications: `
            Подозрение на инфекционно-воспалительные заболевания.
            Профилактическое обследование.
            Мониторинг проводимой терапии.
        `,
        synonyms: "ОАК, CBC, ESR, общий анализ крови",
        relatedIds: ["4", "5"],
        biomaterialPrice: 150,
        discount: 0,
        badges: ["popular"], // <--- ХИТ
    },
    // --- 2. Витамины ---
    {
        id: "2",
        article: "22.101",
        slug: "vitamin-d",
        categorySlug: "vitamins", // Связь с категорией "Витамины"
        name: "Витамин D, 25-OH (кальциферол)",
        price: 1990,
        oldPrice: 2500, // Пример старой цены
        discount: 20,
        deadline: "1 день",
        biomaterial: "Венозная кровь",
        method: "Хемилюминесцентный иммуноанализ",
        description: "Исследование уровня витамина D в крови, необходимого для усвоения кальция и фосфора, а также для поддержания иммунитета.",
        preparation: `
            Не курить в течение 30 минут до исследования.
            Можно сдавать кровь в течение дня, не ранее, чем через 3 часа после приема пищи или утром натощак.
            Рекомендуется исключить прием витамина D за 3-4 дня до исследования (по согласованию с врачом).
        `,
        interpretation: `
            Нормальный уровень витамина D: 30-100 нг/мл. Недостаточность: 20-30 нг/мл. Дефицит: менее 20 нг/мл.
            Низкий уровень может указывать на риск остеопороза, мышечной слабости, снижения иммунитета. Повышенный уровень может свидетельствовать об избыточном приеме витамина D.
        `,
        indications: `
            Диагностика дефицита витамина D.
            Остеопороз.
            Контроль терапии препаратами витамина D.
        `,
        synonyms: "Vitamin D, 25-OH",
        relatedIds: ["1", "5"],
        biomaterialPrice: 350,
        badges: ["popular", "discount"], // <--- И ХИТ, И СКИДКА
    },
    // --- 3. Гормоны ---
    {
        id: "3",
        article: "31.002",
        slug: "ttg-hormone",
        categorySlug: "hormones",
        name: "Тиреотропный гормон (ТТГ)",
        price: 550,
        oldPrice: null,
        deadline: "1 день",
        biomaterial: "Венозная кровь",
        method: "Иммунохемилюминесцентный анализ",
        description: "Основной регулятор функции щитовидной железы. Используется для скрининга дисфункций щитовидной железы.",
        preparation: `
            Кровь сдавать строго натощак (не менее 8 часов голодания).
            Исключить прием гормональных препаратов (по согласованию с врачом) за 48 часов до исследования.
            Избегать физических и эмоциональных нагрузок за 24 часа до анализа.
            Не курить минимум 3 часа до сдачи крови.`,
        interpretation: `
            Референсные значения ТТГ: 0,4-4,0 мМЕ/л. Повышенный уровень ТТГ может указывать на гипотиреоз (сниженную функцию щитовидной железы).
            Пониженный уровень ТТГ может свидетельствовать о гипертиреозе (повышенной функции щитовидной железы) или передозировке тиреоидных гормонов.
        `,
        indications: `
            Подозрение на гипер- или гипотиреоз.
            Контроль лечения заболеваний щитовидной железы.
            Обследование при бесплодии, аменорее.
        `,
        synonyms: "TSH, Тиротропин",
        relatedIds: ["1", "2"],
        biomaterialPrice: 200,
        discount: 0,
        badges: ["popular"],
    },
    // --- 4. Биохимия ---
    {
        id: "4",
        article: "40.120",
        slug: "glucose",
        categorySlug: "biochemistry",
        name: "Глюкоза (в крови)",
        price: 280,
        oldPrice: null,
        deadline: "1 день",
        biomaterial: "Венозная кровь",
        method: "Гексокиназный метод",
        description: "Основной тест для диагностики сахарного диабета и контроля уровня сахара в крови.",
        preparation: `
            Строго натощак (не менее 8 часов и не более 14 часов голодания).
            Воду пить можно, но исключить сладкие напитки.
            Избегать физических нагрузок и стрессов за 30 минут до сдачи крови.
            Не курить минимум 30 минут до анализа.`,
        interpretation: `
            Нормальный уровень глюкозы натощак: 3,9-5,5 ммоль/л. Преддиабет (нарушенная гликемия натощак): 5,6-6,9 ммоль/л.
            Сахарный диабет: 7,0 ммоль/л и выше при двух измерениях. Гипогликемия (низкий уровень сахара): менее 3,9 ммоль/л.
        
        `,
        indications: `
            Диагностика и мониторинг сахарного диабета.
            Ожирение.
            Беременность.
        `,
        synonyms: "Сахар крови, Glucose",
        relatedIds: ["1", "5"],
        biomaterialPrice: 100,
        discount: 0,
        badges: [],
    },
    {
        id: "5",
        article: "11.200",
        slug: "ferritin",
        categorySlug: "biochemistry",
        name: "Ферритин",
        price: 1490,
        oldPrice: null,
        deadline: "1 день",
        biomaterial: "Венозная кровь",
        method: "Иммунотурбидиметрия",
        description: "Показатель запасов железа в организме. Важен для диагностики анемии.",
        preparation: `
            Кровь сдавать натощак (не менее 8 часов голодания).
            Исключить физические нагрузки и спортивные тренировки за 24 часа до исследования.
            Избегать стрессовых ситуаций накануне анализа.
            Не курить минимум 30 минут до сдачи крови.
        `,
        interpretation: `
            Референсные значения для мужчин: 20-250 мкг/л, для женщин: 10-120 мкг/л. Низкий уровень ферритина указывает на дефицит железа и железодефицитную анемию.
            Повышенный уровень может свидетельствовать о гемохроматозе, воспалительных процессах, заболеваниях печени или избыточном приеме железосодержащих препаратов.
        `,
        indications: `
            Диагностика и дифференциальная диагностика анемий.
            Скрытый дефицит железа.
            Оценка запасов железа в организме.
        `,
        synonyms: "Ferritin",
        relatedIds: ["1", "4"],
        biomaterialPrice: 250,
        discount: 0,
        badges: [],
    },
    // --- 5. Инфекции (Дерматофиты) ---
    {
        id: "6",
        article: "P717",
        slug: "dermatophytes",
        categorySlug: "infections",
        name: "Дерматофиты. Выявление ДНК (ПЦР)",
        price: 1415,
        oldPrice: null,
        deadline: "3-5 дней",
        biomaterial: "Соскоб кожи, ногтевая пластина",
        method: "ПЦР в режиме реального времени",
        description: "Молекулярно-генетическое исследование для выявления ДНК возбудителей дерматофитий (грибковых инфекций кожи, ногтей и волос).",
        preparation: `
            За 2 недели до исследования прекратить применение противогрибковых препаратов (по согласованию с врачом).
            Не обрабатывать пораженные участки кожи антисептиками за 24 часа до взятия биоматериала.
            Ногти не обрабатывать лаком за 3 дня до исследования.
        `,
        interpretation: `
            Положительный результат указывает на наличие ДНК дерматофитов и подтверждает грибковую инфекцию.
            Отрицательный результат свидетельствует об отсутствии ДНК возбудителей в исследуемом материале.
        `,
        indications: `
            Подозрение на грибковую инфекцию кожи, ногтей, волос.
            Дифференциальная диагностика дерматологических заболеваний.
            Контроль эффективности противогрибковой терапии.
        `,
        biomaterialPrice: 200,
        discount: 0,
        badges: ["new"], // <--- НОВИНКА
    },

    // --- НОВЫЕ ДАННЫЕ (РАСШИРЕНИЕ) ---

    // --- COVID-19 ---
    {
        id: "7",
        article: "P639",
        slug: "covid-pcr-urgent",
        categorySlug: "pcr-test",
        name: "Срочный ПЦР-тест на COVID-19",
        price: 2500,
        oldPrice: 3000,
        deadline: "12 часов",
        biomaterial: "Мазок",
        description: "Результат день в день.",
        biomaterialPrice: 300,
        discount: 15,
        badges: ["popular", "discount"],
    },
    {
        id: "8",
        article: "A001",
        slug: "covid-antibodies-igg",
        categorySlug: "antibody",
        name: "Антитела к коронавирусу SARS-CoV-2 (IgG)",
        price: 900,
        oldPrice: null,
        deadline: "1 день",
        biomaterial: "Венозная кровь",
        description: "Проверка иммунитета после болезни или прививки.",
        biomaterialPrice: 200,
        discount: 0,
        badges: [],
    },

    // --- КОМПЛЕКСНЫЕ ПРОГРАММЫ ---
    {
        id: "9",
        article: "C001",
        slug: "woman-health-basic",
        categorySlug: "woman-health",
        name: "Женское здоровье: Базовый чек-ап",
        price: 5500,
        oldPrice: 7200,
        deadline: "2 дня",
        biomaterial: "Кровь, Моча",
        description: "Комплексное обследование для женщин.",
        biomaterialPrice: 400,
        discount: 23,
        badges: ["hit", "discount"],
    },
    {
        id: "10",
        article: "C002",
        slug: "man-health-basic",
        categorySlug: "man-health",
        name: "Мужское здоровье: Базовый чек-ап",
        price: 5500,
        oldPrice: 7200,
        deadline: "2 дня",
        biomaterial: "Кровь",
        description: "Комплексное обследование для мужчин.",
        biomaterialPrice: 400,
        discount: 23,
        badges: ["discount"],
    }
];

// --- API ФУНКЦИИ (Имитация Бэкенда) ---

export async function getAnalyses(city: string): Promise<Analysis[]> {
    // Имитация задержки сети
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return MOCK_DATA;
}

export async function getAnalysisById(id: string): Promise<Analysis | undefined> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return MOCK_DATA.find((item) => item.id === id);
}

// Хелперы для синхронной фильтрации (для каталога)
export const getPopularAnalyses = (): Analysis[] => {
    return MOCK_DATA.filter(item => item.badges?.includes('popular') || item.badges?.includes('hit'));
};

export const getAnalysesByCategory = (slug: string): Analysis[] => {
    return MOCK_DATA.filter(item => item.categorySlug === slug);
};

export async function getRelatedAnalyses(ids: string[]): Promise<Analysis[]> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return MOCK_DATA.filter(item => ids.includes(item.id));
}