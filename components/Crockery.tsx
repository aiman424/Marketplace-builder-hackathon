import Image from "next/image";

interface crockeryProps {
    title: string; // Product title
    price: string; // Product price
    imageUrl: string; // Path to product image
    description: string; // Product description
  }

const Crockerycard: React.FC<crockeryProps> = ({ title, price, imageUrl, description }) => {
  return (
    <div className="md:w-[305px] md:h-auto md:mt-0 mt-[130px] ml-[30px] p-4 border border-gray-200 rounded-lg shadow-md">
      {/* Image Section */}
      <div className="md:w-[305px] md:h-[375px] w-[163px] h-[201px] relative">
        <Image
          src={imageUrl}
          alt={title}
          width={270}
          height={370}
          className="rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="mt-4">

        <h1 className="text-[20px] font-[Clash Display] text-gray-800">{title}</h1>

        {/* Price */}
        <p className="text-[18px] font-[Satoshi] text-gray-600 mt-2">{price}</p>

        {/* Description */}
        <p className="text-[16px] font-[Satoshi] text-gray-500 mt-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Crockerycard;