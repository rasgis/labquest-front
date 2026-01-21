import { getAnalyses } from '@/features/catalog/api/get-analyses';
import { CatalogPage } from '@/features/catalog/components/catalog-page';
import { Metadata } from 'next';

interface PageProps {
    params: Promise<{
        city: string;
    }>;
}

export const metadata: Metadata = {
    title: 'Каталог анализов - LabQuest',
    description: 'Полный каталог медицинских анализов и исследований. Удобный поиск, фильтрация по категориям и сортировка по цене.',
};

export default async function CatalogPageRoute({ params }: PageProps): Promise<React.ReactElement> {
    const { city } = await params;
    const analyses = await getAnalyses(city);

    return <CatalogPage analyses={analyses} />;
}
