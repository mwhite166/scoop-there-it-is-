
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const cakeGallery = [
  {
    title: "Birthday Celebration",
    description: "Rainbow sprinkles with chocolate ice cream",
    image: "/lovable-uploads/013a76a0-1e1b-4894-bf24-4d32016e5de0.png",
  },
  {
    title: "Wedding Special",
    description: "Vanilla and strawberry with elegant decorations",
    image: "/lovable-uploads/013a76a0-1e1b-4894-bf24-4d32016e5de0.png",
  },
  {
    title: "Chocolate Lover's Dream",
    description: "All chocolate everything with fudge topping",
    image: "/lovable-uploads/013a76a0-1e1b-4894-bf24-4d32016e5de0.png",
  },
  {
    title: "Fruity Delight",
    description: "Mixed berry ice cream with fresh fruit toppings",
    image: "/lovable-uploads/013a76a0-1e1b-4894-bf24-4d32016e5de0.png",
  },
];

const CakeGallery = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-10">Our Cake Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {cakeGallery.map((cake, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="h-64 bg-gradient-to-br from-icecream-yellow to-icecream-pink flex items-center justify-center">
              <img 
                src={cake.image} 
                alt={cake.title} 
                className="w-auto h-32 object-contain" 
              />
            </div>
            <CardContent className="pt-4">
              <h3 className="font-bold text-lg mb-1">{cake.title}</h3>
              <p className="text-gray-600 text-sm">{cake.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default CakeGallery;
