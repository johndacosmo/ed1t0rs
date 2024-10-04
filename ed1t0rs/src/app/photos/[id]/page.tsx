import Image from 'next/image';
import CheckoutButton from '@/components/checkoutButton';

interface PhotoDetailsProps {
  params: {
    id: string;
  };
}

const PhotoDetails = ({ params }: PhotoDetailsProps) => {
  const { id } = params;

  // Temporary static data for photos
  const photos: { [key: number]: { id: number; title: string; price: number; imgSrc: string } } = {
    1: { id: 1, title: 'ATL NIGHT', price: 20, imgSrc: '/photos/DSC_7683edited2.jpg' },
  };

  const photo = photos[parseInt(id)];

  if (!photo) {
    return <div>Photo not found</div>;
  }

  return (
    <div>
      <h1>{photo.title}</h1>
      <Image src={photo.imgSrc} alt={photo.title} width={500} height={300} />
      <p>Price: ${photo.price}</p>

      {/* Pass the photo ID and price to the CheckoutButton */}
      <CheckoutButton photoId={photo.id} price={photo.price} />
    </div>
  );
};

export default PhotoDetails;

