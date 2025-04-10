
import { Card, CardContent } from "@/components/ui/card";

interface FlavorCardProps {
  name: string;
  description: string;
  color: string;
  isSpecial?: boolean;
}

const FlavorCard = ({ name, description, color, isSpecial = false }: FlavorCardProps) => {
  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${isSpecial ? 'border-2 border-icecream-pink' : ''}`}>
      <div className={`h-16 ${color}`} />
      <CardContent className="pt-6">
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        {isSpecial && (
          <div className="mt-3">
            <span className="bg-icecream-pink text-white text-xs py-1 px-3 rounded-full">
              Special
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FlavorCard;
