import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


interface GridItem {
  id: number;
  title: string;
  link: string;
  imageUrl: string;
}

const HomeGrid = () => {
  const gridItems: GridItem[] = [
    {
      id: 3,
      title: 'Houses',
      link: '/houses',
      imageUrl: 'https://drive.google.com/uc?export=view&id=1TMqorow1KjR_ajj0d6F2uLnP4W2Z01eG'
    },
    {
      id: 16,
      title: 'Apartment',
      link: '/apartment',
      imageUrl: 'https://drive.google.com/uc?export=view&id=1jXs97ZmtcSdct0W6uOFP17UmH6BbGEya'
    },
    {
      id: 4,
      title: 'Buildings',
      link: '/buildings',
      imageUrl: 'https://drive.google.com/uc?export=view&id=1O5fOHnHFuscEq4cPZr4AcX0iqIplXvI9'
    },
    {
      id: 5,
      title: 'F&B',
      link: '/f-b',
      imageUrl: 'https://drive.google.com/uc?export=view&id=1krT5wvlOTQuo-FgaxYSl0QLhvnazyIHU'
    },
    {
      id: 6,
      title: 'Commercial',
      link: '/commercial',
      imageUrl: 'https://drive.google.com/uc?export=view&id=1w_XAHPJLEGzmpSFdVg4CvjWKbeBUljvh'
    },
    {
      id: 7,
      title: 'Construction',
      link: '/construction',
      imageUrl: 'https://drive.google.com/uc?export=view&id=1Newdvnm0Rm7H8I8UhZwIzDrIBfL5fuBB'
    },
    {
      id: 13,
      title: 'Design',
      link: '/design',
      imageUrl: 'https://drive.google.com/uc?export=view&id=11mu0STP-bOqpejvJ1OumC9Sdn0zDYFLM'
    },
    {
      id: 10,
      title: 'About us',
      link: '/about-us',
      imageUrl: 'https://drive.google.com/uc?export=view&id=1Efk5VRuom8fUxKNflavrLgdIi1-HBm0e'
    },
    {
      id: 17,
      title: 'CONTACTS',
      link: '/contacts',
      imageUrl: 'https://drive.google.com/uc?export=view&id=11v7SUQflkzxgdmvBNpm9OPEnZXMQEVbK'
    },
  ];

  return (
    <div className="gridresidencial" id="home">
      {gridItems.map((item) => (
        <Link 
          key={item.id}
          href={item.link}
          className="homepage_blocks-item relative group overflow-hidden"
        >
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="object-cover w-full h-full filter-img"
            style={{ objectFit: 'cover' }}
          />
          <span className="text-content text-content-mobile md:hidden absolute bottom-4 left-4 text-white z-10">
            {item.title}
          </span>
          <div className="hidden md:flex items-center justify-center absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <span className="text-white text-xl">{item.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomeGrid;
