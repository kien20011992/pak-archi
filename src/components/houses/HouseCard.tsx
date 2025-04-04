import Image from 'next/image';
import Link from 'next/link';

interface HouseCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  link: string;
}

const HouseCard = ({ title, subtitle, imageUrl, link }: HouseCardProps) => {
  return (
    <Link 
      href={link}
      className="loop-item relative group overflow-hidden aspect-square"
      title={title}
    >
      <div className="relative w-full h-full bg-black/20 backdrop-blur-sm transition-all duration-300 group-hover:bg-black/40">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
          <h2 className="text-sm uppercase tracking-wider mb-2">{subtitle}</h2>
          <span className="text-xl font-semibold">{title}</span>
        </div>
      </div>
    </Link>
  );
};

export default HouseCard;
