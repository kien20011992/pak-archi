import HouseCard from '@/components/houses/HouseCard';
import { getConstructions } from '@/services/construction';

export const revalidate = 3600; // revalidate every hour

async function getConstructionProjects() {
  const constructions = await getConstructions();
  return constructions.map(construction => ({
    title: construction.title,
    subtitle: 'Construction',
    imageUrl: construction.images[0],
    link: `/construction/${construction.slug}`
  }));
}

export default async function Construction() {
  const constructionProjects = await getConstructionProjects();

  if (!constructionProjects || constructionProjects.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-white">Trang vẫn đang cập nhật</p>
      </div>
    );
  }
  
  return (
    <div className="page-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {constructionProjects.map((project, index) => (
        <HouseCard
          key={index}
          title={project.title}
          subtitle={project.subtitle}
          imageUrl={project.imageUrl}
          link={project.link}
        />
      ))}
    </div>
  );
}
