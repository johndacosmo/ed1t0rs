import PhotoCard from '@/components/photoCard';

// Sample data for photos
const photos = [
  {
    id: 1,
    title: 'ATL NIGHT',
    price: 20,
    imgSrc: '/photos/DSC_7683edited2.jpg',
  },
  // Add more photo data as needed
];

const Gallery = () => {
  return (
    <div>
      <h1>Photo Gallery</h1>
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

export default Gallery;
