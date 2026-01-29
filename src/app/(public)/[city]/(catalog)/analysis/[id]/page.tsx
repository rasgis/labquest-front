import { notFound } from 'next/navigation';
import { getAnalysisById } from '@/features/catalog/api/get-analyses';
import { AnalysisDetails } from '@/features/catalog/components/analysis-details';
import { Metadata } from 'next';

interface PageProps {
    params: Promise<{
        city: string;
        id: string;
    }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
    const analysis = await getAnalysisById(id);
    if (!analysis) return { title: 'Анализ не найден' };

    return {
        title: `${analysis.name} - LabQuest`,
        description: analysis.description || `Сдать анализ ${analysis.name} в LabQuest`,
    };
}

export default async function AnalysisPage({ params }: PageProps) {
    const { id } = await params;
    const analysis = await getAnalysisById(id);

    if (!analysis) {
        notFound();
    }

    return (
        <AnalysisDetails analysis={analysis} />
    );
}
