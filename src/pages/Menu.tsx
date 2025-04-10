
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SizePrice {
  small: string;
  medium: string;
  large: string;
}

interface FlavorItem {
  name: string;
  description: string;
  prices: SizePrice;
  color: string;
  isNew?: boolean;
}

const Menu = () => {
  const iceCreamFlavors: FlavorItem[] = [
    {
      name: "Vanilla Bean",
      description: "Classic vanilla ice cream with real vanilla bean specks",
      prices: { small: "$4.50", medium: "$5.50", large: "$6.50" },
      color: "bg-icecream-vanilla",
    },
    {
      name: "Chocolate Fudge",
      description: "Rich chocolate ice cream with fudge swirls",
      prices: { small: "$4.50", medium: "$5.50", large: "$6.50" },
      color: "bg-icecream-chocolate",
    },
    {
      name: "Strawberry Fields",
      description: "Fresh strawberry ice cream with real strawberry pieces",
      prices: { small: "$4.75", medium: "$5.75", large: "$6.75" },
      color: "bg-icecream-strawberry",
    },
    {
      name: "Mint Chocolate Chip",
      description: "Cool mint ice cream with chocolate chips throughout",
      prices: { small: "$4.75", medium: "$5.75", large: "$6.75" },
      color: "bg-icecream-mint",
    },
    {
      name: "Cookies & Cream",
      description: "Vanilla ice cream with chocolate cookie crumbles",
      prices: { small: "$5.00", medium: "$6.00", large: "$7.00" },
      isNew: true,
      color: "bg-gray-200",
    },
    {
      name: "Butter Pecan",
      description: "Buttery ice cream with caramelized pecans",
      prices: { small: "$5.25", medium: "$6.25", large: "$7.25" },
      color: "bg-amber-200",
    },
  ];

  const shakes: FlavorItem[] = [
    {
      name: "Classic Vanilla Shake",
      description: "Creamy vanilla ice cream blended to perfection",
      prices: { small: "$5.50", medium: "$6.50", large: "$7.50" },
      color: "bg-icecream-vanilla",
    },
    {
      name: "Chocolate Dream",
      description: "Rich chocolate shake topped with whipped cream",
      prices: { small: "$5.50", medium: "$6.50", large: "$7.50" },
      color: "bg-icecream-chocolate",
    },
    {
      name: "Strawberry Delight",
      description: "Sweet strawberry shake made with real strawberries",
      prices: { small: "$5.75", medium: "$6.75", large: "$7.75" },
      color: "bg-icecream-strawberry",
    },
    {
      name: "Cookies & Cream Blast",
      description: "Vanilla shake loaded with chocolate cookie pieces",
      prices: { small: "$6.25", medium: "$7.25", large: "$8.25" },
      isNew: true,
      color: "bg-gray-200",
    },
  ];

  const specialties = [
    {
      name: "Ice Cream Sundae",
      description: "3 scoops with your choice of toppings",
      price: "$7.50",
      color: "bg-gradient-to-r from-icecream-cream to-icecream-vanilla",
    },
    {
      name: "Banana Split",
      description: "Classic banana split with 3 flavors and toppings",
      price: "$8.50",
      color: "bg-icecream-vanilla",
    },
    {
      name: "Ice Cream Cookie Sandwich",
      description: "Your choice of ice cream between two fresh cookies",
      price: "$6.25",
      color: "bg-amber-100",
    },
    {
      name: "Float",
      description: "Ice cream with your choice of soda",
      price: "$5.75",
      color: "bg-icecream-blue/30",
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Menu</h1>
        
        <Tabs defaultValue="ice-cream" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="ice-cream">Ice Cream</TabsTrigger>
            <TabsTrigger value="shakes">Shakes</TabsTrigger>
            <TabsTrigger value="specialties">Specialties</TabsTrigger>
          </TabsList>
          
          <TabsContent value="ice-cream">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {iceCreamFlavors.map((flavor, index) => (
                <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className={`h-4 ${flavor.color}`}></div>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{flavor.name}</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{flavor.description}</p>
                    
                    <div className="flex justify-between items-center text-sm text-gray-700 mb-2">
                      <span>Small:</span>
                      <span className="font-semibold">{flavor.prices.small}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-700 mb-2">
                      <span>Medium:</span>
                      <span className="font-semibold">{flavor.prices.medium}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-700">
                      <span>Large:</span>
                      <span className="font-semibold">{flavor.prices.large}</span>
                    </div>
                    
                    {flavor.isNew && (
                      <div className="mt-3">
                        <Badge className="bg-icecream-pink hover:bg-icecream-pink/90">New</Badge>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="mt-8 text-center text-gray-600">
              Ask about our seasonal flavors and daily specials!
            </p>
          </TabsContent>
          
          <TabsContent value="shakes">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {shakes.map((shake, index) => (
                <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className={`h-4 ${shake.color}`}></div>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{shake.name}</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{shake.description}</p>
                    
                    <div className="flex justify-between items-center text-sm text-gray-700 mb-2">
                      <span>Small:</span>
                      <span className="font-semibold">{shake.prices.small}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-700 mb-2">
                      <span>Medium:</span>
                      <span className="font-semibold">{shake.prices.medium}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-700">
                      <span>Large:</span>
                      <span className="font-semibold">{shake.prices.large}</span>
                    </div>
                    
                    {shake.isNew && (
                      <div className="mt-3">
                        <Badge className="bg-icecream-pink hover:bg-icecream-pink/90">New</Badge>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="mt-8 text-center text-gray-600">
              Add-ons available: whipped cream, sprinkles, extra toppings
            </p>
          </TabsContent>
          
          <TabsContent value="specialties">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specialties.map((item, index) => (
                <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className={`h-4 ${item.color}`}></div>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{item.name}</h3>
                      <span className="font-semibold">{item.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 bg-icecream-yellow/20 rounded-lg p-6">
              <h3 className="font-bold text-xl mb-4">Toppings - $0.75 each</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-2 bg-white rounded-md shadow-sm">Sprinkles</div>
                <div className="text-center p-2 bg-white rounded-md shadow-sm">Hot Fudge</div>
                <div className="text-center p-2 bg-white rounded-md shadow-sm">Caramel</div>
                <div className="text-center p-2 bg-white rounded-md shadow-sm">Whipped Cream</div>
                <div className="text-center p-2 bg-white rounded-md shadow-sm">Nuts</div>
                <div className="text-center p-2 bg-white rounded-md shadow-sm">Cherries</div>
                <div className="text-center p-2 bg-white rounded-md shadow-sm">Chocolate Chips</div>
                <div className="text-center p-2 bg-white rounded-md shadow-sm">Cookie Dough</div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Menu;
