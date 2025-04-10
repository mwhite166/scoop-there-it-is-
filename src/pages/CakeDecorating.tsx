
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const CakeDecorating = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    cakeSize: "",
    flavors: "",
    decorationDetails: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Your cake request has been submitted! We'll contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventDate: "",
      cakeSize: "",
      flavors: "",
      decorationDetails: "",
    });
  };

  const cakeGallery = [
    {
      title: "Birthday Celebration",
      description: "Rainbow sprinkles with chocolate ice cream",
      image: "/placeholder.svg",
    },
    {
      title: "Wedding Special",
      description: "Vanilla and strawberry with elegant decorations",
      image: "/placeholder.svg",
    },
    {
      title: "Chocolate Lover's Dream",
      description: "All chocolate everything with fudge topping",
      image: "/placeholder.svg",
    },
    {
      title: "Fruity Delight",
      description: "Mixed berry ice cream with fresh fruit toppings",
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">Custom Ice Cream Cakes</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Make your special occasion even sweeter with our custom ice cream cakes. Perfect for birthdays, 
          weddings, anniversaries, or just because!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-icecream-blue">How It Works</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-icecream-blue text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Choose Your Size</h3>
                  <p className="text-gray-600">
                    Select from 6", 8", 10" or custom sheet cake sizes to fit your event needs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-icecream-blue text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Select Your Flavors</h3>
                  <p className="text-gray-600">
                    Choose from any of our ice cream flavors. You can even mix multiple flavors in one cake!
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-icecream-blue text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Design Your Cake</h3>
                  <p className="text-gray-600">
                    Customize with toppings, decorations, and personalized messages.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-icecream-blue text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Pick Up Your Creation</h3>
                  <p className="text-gray-600">
                    We'll have your custom cake ready for pickup on your specified date.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-icecream-pink">Request a Custom Cake</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="eventDate">Event Date</Label>
                  <Input 
                    id="eventDate" 
                    name="eventDate" 
                    type="date" 
                    value={formData.eventDate} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="cakeSize">Cake Size</Label>
                <select 
                  id="cakeSize" 
                  name="cakeSize" 
                  value={formData.cakeSize} 
                  onChange={handleChange} 
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  required
                >
                  <option value="">Select a size</option>
                  <option value="6inch">6" Round</option>
                  <option value="8inch">8" Round</option>
                  <option value="10inch">10" Round</option>
                  <option value="quarter">Quarter Sheet</option>
                  <option value="half">Half Sheet</option>
                  <option value="full">Full Sheet</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="flavors">Flavor Choices</Label>
                <Input 
                  id="flavors" 
                  name="flavors" 
                  value={formData.flavors} 
                  onChange={handleChange} 
                  placeholder="e.g. Vanilla, Chocolate, Strawberry" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="decorationDetails">Decoration Details</Label>
                <Textarea 
                  id="decorationDetails" 
                  name="decorationDetails" 
                  value={formData.decorationDetails} 
                  onChange={handleChange} 
                  placeholder="Describe your ideal cake decoration, theme, colors, and any special requests..." 
                  rows={4} 
                  required 
                />
              </div>
              
              <Button type="submit" className="bg-icecream-pink hover:bg-icecream-pink/80 w-full">
                Submit Request
              </Button>
            </form>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-center mb-10">Our Cake Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cakeGallery.map((cake, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="h-64 bg-gray-200">
                <img 
                  src={cake.image} 
                  alt={cake.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <CardContent className="pt-4">
                <h3 className="font-bold text-lg mb-1">{cake.title}</h3>
                <p className="text-gray-600 text-sm">{cake.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-icecream-blue/10 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">Need More Information?</h3>
          <p className="mb-6">
            Have questions about custom cakes or want to discuss a special design? 
            Contact us directly and we'll help make your sweet dreams come true!
          </p>
          <Button className="bg-icecream-blue hover:bg-icecream-blue/80">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CakeDecorating;
