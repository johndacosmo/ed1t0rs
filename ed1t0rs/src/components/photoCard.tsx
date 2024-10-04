import Link from 'next/link';
import Image from 'next/image';

interface PhotoCardProps {
  id: number;
  title: string;
  price: number;
  imgSrc: string;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ id, title, price, imgSrc }) => {
  return (
    <div className="photo-card">
      <Image src={imgSrc} alt={title} width={300} height={200} />
      <h2>{title}</h2>
      <p>Price: ${price}</p>
      {/* Link to the dynamic route for photo details */}
      <Link href={`/photos/${id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default PhotoCard;