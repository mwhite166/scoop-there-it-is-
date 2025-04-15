
import React from 'react';
import HowItWorks from '@/components/CakeDecorating/HowItWorks';
import CakeOrderForm from '@/components/CakeDecorating/CakeOrderForm';
import CakeGallery from '@/components/CakeDecorating/CakeGallery';
import ContactSection from '@/components/CakeDecorating/ContactSection';

const CakeDecorating = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">Custom Ice Cream Cakes</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Make your special occasion even sweeter with our custom ice cream cakes. Perfect for birthdays, 
          weddings, anniversaries, or just because!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <HowItWorks />
          <CakeOrderForm />
        </div>
        
        <CakeGallery />
        <ContactSection />
      </div>
    </div>
  );
};

export default CakeDecorating;
