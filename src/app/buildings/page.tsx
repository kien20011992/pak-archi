import HouseCard from '@/components/houses/HouseCard';
import { getBuildings } from '@/services/buildings';

export const revalidate = 3600; // revalidate every hour

async function getBuildingProjects() {
  const buildings = await getBuildings();
  return buildings.map(building => ({
    title: building.title,
    subtitle: 'Buildings',
    imageUrl: building.images[0],
    link: `/buildings/${building.slug}`
  }));
}

export default async function Buildings() {
  const buildingProjects = await getBuildingProjects();
  
  if (!buildingProjects || buildingProjects.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-white">Trang vẫn đang cập nhật</p>
      </div>
    );
  }

  return (
    <div className="page-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {buildingProjects.map((project, index) => (
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
