
import React from 'react';
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <div className="bg-icecream-blue/10 rounded-xl p-8 text-center">
      <h3 className="text-xl font-bold mb-4">Need More Information?</h3>
      <p className="mb-6">
        Have questions about custom cakes or want to discuss a special design? 
        Contact us directly and we'll help make your sweet dreams come true!
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button 
          className="bg-icecream-blue hover:bg-icecream-blue/80"
          onClick={() => window.location.href = 'tel:9853279617'}
        >
          Call Us: (985) 327-9617
        </Button>
        <Button 
          className="bg-icecream-pink hover:bg-icecream-pink/80"
          onClick={() => window.location.href = 'mailto:whitemegan404@gmail.com'}
        >
          Email Us
        </Button>
      </div>
    </div>
  );
};

export default ContactSection;
