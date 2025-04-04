import HouseCard from '@/components/houses/HouseCard';
import { getApartments } from '@/services/apartment';

export const revalidate = 3600; // revalidate every hour

async function getApartmentProjects() {
  const apartments = await getApartments();
  return apartments.map(apartment => ({
    title: apartment.title,
    subtitle: 'Apartment',
    imageUrl: apartment.images[0],
    link: `/apartment/${apartment.slug}`
  }));
}

export default async function Apartment() {
  const apartmentProjects = await getApartmentProjects();
  
  if (!apartmentProjects || apartmentProjects.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-white">Trang vẫn đang cập nhật</p>
      </div>
    );
  }

  return (
    <div className="page-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {apartmentProjects.map((project, index) => (
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
