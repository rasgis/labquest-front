import { HeroSlider, CategoriesCarousel, StocksCarousel, ServicesBlock } from '@/components/home';

interface PageProps {
  params: Promise<{
    city: string;
  }>;
}

export default async function CityPage({ params }: PageProps) {
  await params;

  return (
    <main className="min-h-screen bg-white pb-20">

      <HeroSlider />
      <CategoriesCarousel />
      <StocksCarousel />
      <ServicesBlock />

    </main>
  );
}