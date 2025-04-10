
import { Facebook, Instagram } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface SocialLinksProps {
  className?: string;
}

const SocialLinks = ({ className = "" }: SocialLinksProps) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://www.instagram.com/scoopthereitis"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-icon"
            >
              <Instagram size={24} />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Follow us on Instagram</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://www.facebook.com/scoopthereitis"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-icon"
            >
              <Facebook size={24} />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Like us on Facebook</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://www.tiktok.com/@scoopthereitis"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="social-icon"
            >
              {/* Custom TikTok icon since it's not in lucide-react */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-tiktok"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Follow us on TikTok</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default SocialLinks;
