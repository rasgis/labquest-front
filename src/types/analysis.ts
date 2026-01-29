export interface Analysis {

    // Идентификаторы
    id: string; // ID анализа
    article: string; // Код анализа
    slug: string; // Слаг анализа (для URL)

    // Основная информация
    name: string; // Название анализа
    description?: string; // Описание анализа

    // Цена и скидка
    price: number; // Цена анализа
    oldPrice?: number | null; // Старая цена (для зачеркивания)
    discount?: number | null; // Процент скидки
    biomaterialPrice: number; // Стоимость взятия биоматериала

    // Дополнительные данные
    biomaterial?: string; // Биоматериал
    deadline: string; // Срок выполнения 
    preparation?: string; // Подготовка
    interpretation?: string; // Интерпретация
    indications?: string; // Показания
    method?: string; // Метод исследования
    synonyms?: string; // Синонимы

    // Связи
    categorySlug: string; // Ссылка на категорию
    relatedIds?: string[]; // Сопутствующие (похожие) анализы

    // UI Флаги (для карточки)
    badges?: ('popular' | 'new' | 'discount' | 'hit')[];

}

export interface Category {
    id: number;
    slug: string;
    name: string;
    productsCount: number;
    children?: Category[];
}

export type CatalogTab = 'analysis' | 'complex';