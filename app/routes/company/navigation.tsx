import * as React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

export const chat: {
  title: string;
  href: string;
  description: string;
  icon: string;
}[] = [
  {
    title: "Intent Classification",
    href: "#",
    description: "Understands the user's motive behind each message sent",
    icon: "/icons/search.svg",
  },
  {
    title: "Named Entity Recognition",
    href: "#",
    description: "Classifies key information units into pre-defined categories",
    icon: "/icons/quiz.svg",
  },
  {
    title: "Entity Understanding",
    href: "#",
    description: "Interprets the meaning of entity values conveyed by the user",
    icon: "/icons/thought.svg",
  },
  {
    title: "Contextual Conversations",
    href: "#",
    description: "Predicts the best action to take after every user message",
    icon: "/icons/prob.svg",
  },
  {
    title: "Natural Language Generation",
    href: "#",
    description: "Sends personalized responses from Rivi to each user",
    icon: "/icons/AI.svg",
  },
];

export const recommend: { title: string; icon: string }[] = [
  {
    title: "Flights",
    icon: "/icons/airIcon.svg",
  },
  {
    title: "Hotels and Vacation Rentals",
    icon: "/icons/hotel.svg",
  },
  {
    title: "Things to do, food and nightlife",
    icon: "/icons/AI.svg",
  },
  {
    title: "Automatic Itinerary",
    icon: "/icons/search.svg",
  },
  {
    title: "Destination, dates and more",
    icon: "/icons/quiz.svg",
  },
];

export const others: {
  title: string;
  href: string;
  description: string;
  icon: string;
}[] = [
  {
    title: "Flight price prediction",
    href: "#",
    description:
      "Rivi predicts the flight prices for any given route based on historical data",
    icon: "/icons/prob.svg",
  },
  {
    title: "Rivi Automated Learning",
    href: "#",
    description:
      "Rivi automatically learns by itself in real-time based on feedback",
    icon: "/icons/AI.svg",
  },
  {
    title: "From the reviews, I read",
    href: "#",
    description:
      "Rivi reads and analyzes the reviews of a Place and shares all the meaningful info",
    icon: "/icons/quiz.svg",
  },
];

export const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: string }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="flex items-center">
          <Image
            src={icon}
            alt={title}
            width={40}
            height={40}
            className="mr-4"
          />
          <div>
            <div className="text-xl font-bold leading-none">{title}</div>
            <p className="line-clamp-2 text-md leading-snug text-muted-foreground">
              {children}
            </p>
          </div>
        </div>
      </a>
    </li>
  );
});
ListItem.displayName = "ListItem";
