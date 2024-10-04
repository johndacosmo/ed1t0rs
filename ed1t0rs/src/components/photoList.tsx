import PhotoCard from './photoCard'; // Assuming you have this component
import Image from 'next/image';

// Sample photo data (replace this with API data or dynamic content)
const photos = [
  {
    id: 1,
    title: 'Sunset Over Beach',
    price: 20,
    imgSrc: '/photos/DSC_7683edited2.jpg',
  },
  {
    id: 2,
    title: 'Mountain View',
    price: 25,
    imgSrc: '/photos/DSC_9618BLANDWITHFIL.jpg',
  },
  {
    id: 3,
    title: 'Forest Path',
    price: 15,
    imgSrc: '/photos/DSC_9618blue.jpg',
  },
  {
    id: 4,
    title: 'Pink Flowers',
    price: 30,
    imgSrc: '/photos/DSC_9618pink.jpg',
  },
  {
    id: 5,
    title: 'Moon Over Merge',
    price: 40,
    imgSrc: '/photos/moonsmerge1.jpg',
  },
];

const PhotoList = () => {
  return (
    <div>
      <h1>Available Photos</h1>
      <div className="photo-grid">
        {photos.map((photo) => (
          <PhotoCard
            key={photo.id}
            id={photo.id}
            title={photo.title}
            price={photo.price}
            imgSrc={photo.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;