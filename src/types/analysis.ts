export interface Analysis {

    // Идентификаторы
    id: string; // ID анализа
    article: string; // Код анализа
    slug: string; // Слаг анализа (для URL)
    limit?: number;            // Ограничение для пагинации

    // Основная информация
    name: string; // Название анализа
    description?: string; // Описание анализа

    // Цена и скидка
    price: number; // Цена анализа
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

    // UI Флаги (для карточки)
    badges?: ('popular' | 'new' | 'discount' | 'hit')[];
    homeVisit?: boolean; // true = выезд возможен, false = нет

}

export interface Category {
    id: number;
    slug: string;
    name: string;
    children?: Category[];
}

export type CatalogTab = 'analysis' | 'complex';