import React from 'react';
import Link from 'next/link';

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
      imageUrl: 'https://pak-archi.com/public/files/category/Frame_648_copy-66ebebccf40c2.png'
    },
    {
      id: 16,
      title: 'Apartment',
      link: '/apartment',
      imageUrl: 'https://pak-archi.com/public/files/category/Frame_660-664b27e821de7.png'
    },
    {
      id: 4,
      title: 'Buildings',
      link: '/buildings',
      imageUrl: 'https://pak-archi.com/public/files/category/dd-664bfd3e7c2dd.png'
    },
    {
      id: 5,
      title: 'F&B',
      link: '/f-b',
      imageUrl: 'https://pak-archi.com/public/files/category/B3-663c9e4e30e8f.jpg'
    },
    {
      id: 6,
      title: 'Commercial',
      link: '/commercial',
      imageUrl: 'https://pak-archi.com/public/files/category/65-663cb52954b9c.jpg'
    },
    {
      id: 7,
      title: 'Construction',
      link: '/construction',
      imageUrl: 'https://pak-archi.com/public/files/category/40524637703_5f8faba1c6_k-663cadccf031b.jpg'
    },
    {
      id: 13,
      title: 'Design',
      link: '/design',
      imageUrl: 'https://pak-archi.com/public/files/category/Frame_652-667a9db754a1e.png'
    },
    {
      id: 10,
      title: 'About us',
      link: '/about-us',
      imageUrl: 'https://pak-archi.com/public/files/category/Group_53_copy-66ebfadc878ae.png'
    },
    {
      id: 17,
      title: 'CONTACTS',
      link: '/contacts',
      imageUrl: 'https://pak-archi.com/public/files/category/DD-663ca3a64321b.png'
    },
  ];

  return (
    <div className="gridresidencial" id="home">
      {gridItems.map((item) => (
        <Link 
          key={item.id}
          href={item.link}
          className="homepage_blocks-item bg-cover bg-center filter-img relative group"
          style={{ backgroundImage: `url(${item.imageUrl})` }}
        >
          <span className="text-content text-content-mobile md:hidden absolute bottom-4 left-4 text-white">
            {item.title}
          </span>
          <div className="hidden md:flex items-center justify-center absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-xl">{item.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomeGrid;
