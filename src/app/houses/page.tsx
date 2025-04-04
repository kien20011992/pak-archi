import HouseCard from '@/components/houses/HouseCard';
import { getHouses } from '@/services/supabase';

export const revalidate = 3600; // revalidate every hour

async function getHouseProjects() {
  const houses = await getHouses();
  return houses.map(house => ({
    title: house.title,
    subtitle: 'Houses',
    imageUrl: house.images[0],
    link: `/houses/${house.slug}`
  }));
}

export default async function Houses() {
  const houseProjects = await getHouseProjects();
  
  if (!houseProjects || houseProjects.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-white">Trang vẫn đang cập nhật</p>
      </div>
    );
  }

  return (
    <div className="page-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {houseProjects.map((project, index) => (
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
