
import React from 'react';

const steps = [
  {
    title: "Choose Your Size",
    description: "Select from 6\", 8\", 10\" or custom sheet cake sizes to fit your event needs.",
  },
  {
    title: "Select Your Flavors",
    description: "Choose from any of our ice cream flavors. You can even mix multiple flavors in one cake!",
  },
  {
    title: "Design Your Cake",
    description: "Customize with toppings, decorations, and personalized messages.",
  },
  {
    title: "Pick Up Your Creation",
    description: "We'll have your custom cake ready for pickup on your specified date.",
  },
];

const HowItWorks = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-icecream-blue">How It Works</h2>
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="bg-icecream-blue text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
              {index + 1}
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
