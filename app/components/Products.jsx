'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ImageGallery() {
  const router = useRouter();
  const imageCount = 9;
  const imagesArray = Array(imageCount).fill(0);
  const totalPages = 12;

  const handlePageClick = (pageNumber) => {
    router.push(`/`); 
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-3 sm:justify-center sm:p-4 z-0">
      <div className="grid grid-cols-3 gap-6 mb-8">
        {imagesArray.map((_, index) => (
          <div key={index} className="relative">
            <Image
              src="/bottle.svg" 
              alt={`Image ${index + 1}`}
              width={300}
              height={200}
              className='hover:scale-105 shadow-sm cursor-pointer transition-transform duration-200'
             
            />
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-2 mt-8">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageClick(index + 1)}
            className="text-blue-700 py-2 px-4 rounded hover:bg-[#62C3C6] hover:text-white"
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
