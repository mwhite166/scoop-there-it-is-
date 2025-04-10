
import { Button } from "@/components/ui/button";
import FlavorCard from "@/components/FlavorCard";
import { MapPin, Clock, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const weeklyFlavors = [
    { 
      name: "Blueberry Cheesecake", 
      description: "Creamy vanilla base with real blueberry swirls and cheesecake chunks", 
      color: "bg-icecream-blue/40",
      isSpecial: true
    },
    { 
      name: "Chocolate Fudge", 
      description: "Rich chocolate ice cream with fudge swirls and chocolate chunks", 
      color: "bg-icecream-chocolate/40" 
    },
    { 
      name: "Strawberry Shortcake", 
      description: "Fresh strawberry ice cream with shortcake pieces", 
      color: "bg-icecream-strawberry/40" 
    },
    { 
      name: "Mint Chocolate Chip", 
      description: "Refreshing mint ice cream with chocolate chips throughout", 
      color: "bg-icecream-mint/40" 
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-icecream-blue/30 to-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-float">
            <img 
              src="/placeholder.svg" 
              alt="Scoop There It Is Logo" 
              className="h-64 w-auto mx-auto mb-8"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-icecream-blue mb-4">
              Scoop There It Is
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Premium homemade ice cream that will make you scream with delight
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/menu">
                <Button className="bg-icecream-blue hover:bg-icecream-blue/80 text-white px-8 py-6 rounded-full text-lg">
                  View Our Menu
                </Button>
              </Link>
              <Link to="/cake-decorating">
                <Button variant="outline" className="px-8 py-6 rounded-full text-lg border-icecream-blue text-icecream-blue hover:bg-icecream-blue/10">
                  Custom Ice Cream Cakes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Flavors Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-icecream-pink">
            Flavors of the Week
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {weeklyFlavors.map((flavor, index) => (
              <FlavorCard 
                key={index}
                name={flavor.name}
                description={flavor.description}
                color={flavor.color}
                isSpecial={flavor.isSpecial}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/menu">
              <Button variant="outline" className="border-icecream-blue text-icecream-blue hover:bg-icecream-blue/10">
                See All Flavors
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-icecream-blue/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Find Us
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="ice-card h-full flex flex-col justify-center">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="text-icecream-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Our Location</h3>
                  <p className="text-gray-600">123 Ice Cream Way</p>
                  <p className="text-gray-600">Sweet Tooth City, ST 12345</p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-icecream-blue hover:underline mt-2"
                  >
                    View on Maps <ExternalLink size={14} />
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="text-icecream-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Hours</h3>
                  <p className="text-gray-600">Monday - Thursday: 11am - 9pm</p>
                  <p className="text-gray-600">Friday - Saturday: 11am - 10pm</p>
                  <p className="text-gray-600">Sunday: 12pm - 8pm</p>
                </div>
              </div>
            </div>
            
            <div className="ice-card overflow-hidden h-64 md:h-auto">
              {/* Replace with an actual map or image of the location */}
              <div className="bg-icecream-cream h-full w-full flex items-center justify-center">
                <p className="text-gray-500">Map Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
