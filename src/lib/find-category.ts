import { Category } from '@/types/analysis';

// поиск категории по слагу

export function findCategoryBySlug(categories: Category[], slug: string | null): Category | null {
    if (!slug) return null;

    for (const category of categories) {
        if (category.slug === slug) {
            return category;
        }
        if (category.children) {
            const childResult = findCategoryBySlug(category.children, slug);
            if (childResult) {
                return childResult;
            }
        }
    }

    return null;
}
