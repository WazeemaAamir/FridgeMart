import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// 🔽 Dummy Fridge data
const Fridge = [
  {
    id: "1",
    image: "/Haier.jpg",
    model: "Haier 538 IFPA/IFGA/IFRA 19cft Twin Inverter Refrigerator",
    year: 2020,
    color: "Red",
    price: "₨ 128,000.00",
    description: "A well-maintained Haier 538 IFPA/IFGA/IFRA 19cft Twin Inverter Refrigerator with excellent performance, spacious interior, and reliable safety features.",
  },
   {
    id: "2",
    image: "/Gree.jpg",
    model: "GREE Everest Series Refrigerator Floral 9978",
    year: 2018,
    color: "Red",
    price: "₨ 85,000 ",
    description: "Perfect for off-road and city driving. Smooth suspension and rugged body. Very fuel efficient for its class.",
  },
  {
    id: "3",
    image: "/Samsung.jpg",
    model: "Samsung Refrigerator RF48A4010B4 French Door",
    year: 2024,
    color: "Gary",
    price: "₨600,000",
    description: "Sporty and stylish sedan with advanced features and great road grip. Ideal for everyday use.",
  },
 {
    id: "4",
    image: "/Dawlance.jpg",
    model: "DAWLANCE 9140WB AVANTE GD DOUBLE DOOR REFRIGERATOR",
    year: 2021,
    color: "Silver",
    price: "₨ 69,000",
   },
 {
    id: "5",
    image: "/Kewood.jpg",
    model: "Kenwood 24457 Glass Door Inverter Refrigerator",
    year: 2022,
    color: "White",
    price: "₨ 115,000",
  },
  {
    id: "6",
    image: "/Smart.jpg",
    model: "We took Samsung's flashy smart fridge for a spin (pictures)",
    year: 2021,
    color: "Black",
    price: "6,800,000",
    description: "Spacious SUV with smooth ride and latest infotainment system. Great for long trips.",
  },
  {
    id: "7",
    image: "/MiniFridge.jpg",
    model: "Suzuki Alto",
    year: 2017,
    color: "White",
    price: "Rs 14 570",
    description: "Budget-friendly small car with excellent fuel economy. Maintained with care.",
  },
  {
    id: "8",
    image: "/Orient.jpg",
    model: "Orient Crystal GD INV 350i Refrigerator",
    year: 2006,
    color: "Purple",
    price: "₨ 101,300",
  },
  {
    id: "9",
    image: "/PEL.jpg",
    model: "PEL Refrigerator Double Door - PRINVGD 6360 Digital (Inverter + Glass Door)",
    year: 2020,
    color: "Black",
    price: "Rs.107,000.00",
  },
  {
    id: "10",
    image: "/National.jpg",
    model: "Gaba National",
    year: 2021,
    color: "Black",
    price: "1,06,506",
  },
  {
    id: "11",
    image: "/Refrigerators.jpg",
    model: "The Ultimate Refrigerator Size Guide: Buy Refrigerator Online",
    year: 2021,
    color: "White",
  },
  {
    id: "12",
    image: "/Nissan Dayz.jpg",
    model: "Nissan Dayz",
    year: 2018,
    mileage: "40,000 KM",
    color: "Gray",
    price: "2,300,000",
    location: "Johar Mor, Karachi",
    description: "Japanese kei car with modern interior and great city driving experience.",
  },
  {
    id: "13",
    image: "/Toyota Aqua.webp",
    model: "Toyota Aqua",
    year: 2015,
    mileage: "60,000 KM",
    color: "Red",
    price: "3,900,000",
    location: "Karimabad, Karachi",
    description: "Hybrid hatchback with incredible fuel economy, ideal for daily commutes.",
  },
  {
    id: "14",
    image: "/Honda BR-V.webp",
    model: "Honda BR-V",
    year: 2022,
    mileage: "28,000 KM",
    color: "White",
    price: "4,850,000",
    location: "University Road, Karachi",
    description: "7-seater SUV with sporty look and smooth handling. Best for large families.",
  },
  {
    id: "15",
    image: "/Toyota Prius.webp",
    model: "Toyota Prius",
    year: 2014,
    mileage: "82,000 KM",
    color: "White",
    price: "4,700,000",
    location: "Bahadurabad, Karachi",
    description: "Eco-friendly hybrid sedan with advanced features and comfortable interior.",
  },
  {
    id: "16",
    image: "/MG HS.webp",
    model: "MG HS",
    year: 2020,
    mileage: "22,000 KM",
    color: "White",
    price: "8,000,000",
    location: "Gulberg, Karachi",
    description: "Luxurious MG SUV with turbocharged engine, leather seats, and panoramic sunroof.",
  },
  {
    id: "17",
    image: "/Changan Alsvin.webp",
    model: "Changan Alsvin",
    year: 2021,
    mileage: "35,000 KM",
    color: "White",
    price: "3,200,000",
    location: "Model Colony, Karachi",
    description: "Smart sedan with European design, digital meter, and DCT transmission.",
  },
  {
    id: "18",
    image: "/KIA Picanto.jpg",
    model: "KIA Picanto",
    year: 2020,
    mileage: "33,000 KM",
    color: "Sky Blue",
    price: "2,400,000",
    location: "Garden West, Karachi",
    description: "Compact and safe city car with premium build and affordable maintenance.",
  },
  {
    id: "19",
    image: "/Suzuki Swift.jpg",
    model: "Suzuki Swift",
    year: 2019,
    mileage: "47,000 KM",
    color: "Red",
    price: "2,900,000",
    location: "Ancholi, Karachi",
    description: "Quick and stylish hatchback with sporty suspension and responsive steering.",
  },
  {
    id: "20",
    image: "/Honda Vezel.webp",
    model: "Honda Vezel",
    year: 2022,
    mileage: "77,000 KM",
    color: "Blue",
    price: "4,950,000",
    location: "Airport, Karachi",
    description: "Elegant hybrid crossover with stylish design and excellent fuel efficiency.",
  },
  // ... باقی کارز کا ڈیٹا
];

// 🔽 Fridge detail page component
export default async function FridgeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const fridge = Fridge.find((fridge) => fridge.id === id);

  if (!fridge) return notFound();

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* 🔹 Car Image */}
        <div className="relative w-full h-80 md:h-[480px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={fridge.image}
            alt={fridge.model}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>

        {/* 🔹 Fridge Info */}
        <section className="space-y-6">
          <h1 className="text-4xl font-bold text-blue-900">{fridge.model}</h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            {fridge.description}
          </p>

          <ul className="space-y-2 text-gray-800 text-base">
            <li>
              <strong>Year:</strong> {fridge.year}
            </li>
            <li>
              <strong>Color:</strong> {fridge.color}
            </li>
            <li>
              <strong>Price:</strong> PKR {fridge.price}
            </li>
            <li>
              <strong>Location:</strong> {fridge.location}
            </li>
          </ul>

          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-transform hover:scale-105"
          >
            Contact Seller
          </Link>
        </section>
      </div>
    </main>
  );
}