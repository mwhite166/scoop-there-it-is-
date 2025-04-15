
import React, { useState } from 'react';
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  eventDate: "",
  cakeSize: "",
  flavors: "",
  decorationDetails: "",
};

const CakeOrderForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real application, this would be an API call to your backend
      console.log("Form submitted:", formData);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Your cake request has been submitted! We'll contact you soon.");
      
      // Reset the form
      setFormData(initialFormData);
    } catch (error) {
      toast.error("There was a problem submitting your request. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
        
        <Button 
          type="submit" 
          className="bg-icecream-pink hover:bg-icecream-pink/80 w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Request"}
        </Button>

        <p className="text-sm text-gray-500 text-center">
          Your request will be sent to whitemegan404@gmail.com and we'll contact you shortly to confirm details.
        </p>
      </form>
    </div>
  );
};

export default CakeOrderForm;
