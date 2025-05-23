import HouseCard from '@/components/houses/HouseCard';
import { getCommercials } from '@/services/commercial';

export const revalidate = 3600; // revalidate every hour

async function getCommercialProjects() {
  const commercials = await getCommercials();
  return commercials.map(commercial => ({
    title: commercial.title,
    subtitle: 'Commercial',
    imageUrl: commercial.images[0],
    link: `/commercial/${commercial.slug}`
  }));
}

export default async function Commercial() {
  const commercialProjects = await getCommercialProjects();
  
  if (!commercialProjects || commercialProjects.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-white">Trang vẫn đang cập nhật</p>
      </div>
    );
  }

  return (
    <div className="page-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {commercialProjects.map((project, index) => (
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
