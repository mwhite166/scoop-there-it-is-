
import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & Head Chef",
      bio: "Sarah has been making ice cream since she was a child, learning from her grandmother's secret recipes. She founded Scoop There It Is in 2015 to share her passion for creative flavors.",
      image: "/placeholder.svg"
    },
    {
      name: "Michael Chen",
      role: "Master Ice Cream Maker",
      bio: "With over 10 years of experience in culinary arts, Michael brings his expertise in flavor balancing and unique ingredient combinations to our ice cream creation process.",
      image: "/placeholder.svg"
    },
    {
      name: "Jamila Williams",
      role: "Pastry Chef & Cake Designer",
      bio: "Jamila specializes in creating stunning ice cream cakes that not only look amazing but taste incredible. She leads our custom cake department.",
      image: "/placeholder.svg"
    },
    {
      name: "Carlos Rodriguez",
      role: "Store Manager",
      bio: "Carlos ensures that every customer has an amazing experience. He's been with us since the beginning and knows all our regular customers by name.",
      image: "/placeholder.svg"
    },
  ];

  const funFacts = [
    "We make all our ice cream in small batches to ensure the freshest flavors.",
    "Our shop goes through over 500 gallons of ice cream each month!",
    "The most scoops we've ever stacked on one cone: 12",
    "We source ingredients from local farmers whenever possible.",
    "Our most popular flavor is Salted Caramel Pretzel Swirl."
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">About Scoop There It Is</h1>
        
        {/* Our Story */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-icecream-blue">Our Story</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <p className="mb-4 text-gray-700">
                  Scoop There It Is began as a small ice cream cart at local farmers' markets in 2015. 
                  Founded by Sarah Johnson, our mission was simple: create delicious, homemade ice cream 
                  using only the finest ingredients.
                </p>
                <p className="mb-4 text-gray-700">
                  As word spread about our creative flavors and commitment to quality, we quickly outgrew 
                  our little cart. In 2017, we opened our first brick-and-mortar location, where we 
                  continued to experiment with new flavors and perfect our craft.
                </p>
                <p className="mb-4 text-gray-700">
                  Today, we're proud to serve our community with the same passion and dedication that 
                  started it all. Every scoop is still made in small batches, with locally sourced 
                  ingredients whenever possible, and always with love.
                </p>
                <p className="font-bold text-icecream-blue">
                  Our mission: To bring joy through extraordinary ice cream experiences.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/placeholder.svg" 
                    alt="Our ice cream shop" 
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Meet Our Team */}
        <section className="mb-16 bg-icecream-blue/5 py-12 rounded-xl">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-icecream-pink">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden border-none shadow-lg">
                  <div className="h-64 bg-gray-200">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <CardContent className="bg-white p-6">
                    <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                    <p className="text-icecream-blue font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="w-16 h-16 bg-icecream-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-icecream-blue text-2xl">♥</span>
                </div>
                <h3 className="font-bold text-xl mb-3">Quality</h3>
                <p className="text-gray-600">
                  We never compromise on ingredients or preparation methods. Every scoop meets our high standards.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="w-16 h-16 bg-icecream-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-icecream-pink text-2xl">♺</span>
                </div>
                <h3 className="font-bold text-xl mb-3">Sustainability</h3>
                <p className="text-gray-600">
                  From eco-friendly packaging to local sourcing, we strive to minimize our environmental footprint.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="w-16 h-16 bg-icecream-mint/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-icecream-mint text-2xl">★</span>
                </div>
                <h3 className="font-bold text-xl mb-3">Community</h3>
                <p className="text-gray-600">
                  We're proud to be part of our local community, supporting events and giving back whenever possible.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Fun Facts */}
        <section className="mb-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Fun Facts</h2>
            <div className="bg-icecream-cream/30 rounded-xl p-8">
              <ul className="space-y-4">
                {funFacts.map((fact, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-icecream-pink text-xl">•</span>
                    <p>{fact}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        
        {/* Visit Us CTA */}
        <section>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Come Visit Us!</h2>
            <p className="text-gray-700 mb-8">
              We'd love to see you at our ice cream shop. Stop by for a scoop (or two) and experience 
              the Scoop There It Is difference for yourself!
            </p>
            <a 
              href="/" 
              className="inline-block bg-icecream-pink text-white py-3 px-8 rounded-full font-medium hover:bg-icecream-pink/80 transition-colors"
            >
              Find Our Location
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
