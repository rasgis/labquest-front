export interface Analysis {
    id: string; // ID анализа
    article: string; // Код анализа
    name: string; // Название анализа
    price: number; // Цена анализа
    time: string; // Срок выполнения 
    description?: string; // Описание анализа
    biomaterial?: string; // Биоматериал
    preparation?: string; // Подготовка
    interpretation?: string; // Интерпретация
    indications?: string; // Показания
    relatedIds?: string[]; // Сопутствующие анализы
    category: string; // Категория анализа
    method?: string; // Метод исследования
    synonyms?: string; // Синонимы
    biomaterialPrice: number; // Стоимость взятия биоматериала
    discount?: number; // Процент скидки
}