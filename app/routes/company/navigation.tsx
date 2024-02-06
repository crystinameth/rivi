"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const chat: {
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

const others: { title: string; href: string; description: string; icon: string; }[] = [
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
export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Rivi Chat</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {chat.map((chat) => (
                <ListItem 
                  key={chat.title} 
                  title={chat.title} 
                  href={chat.href} 
                  icon={chat.icon}
                >
                  {chat.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Other Rivi AI</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {others.map((other) => (
                <ListItem
                  key={other.title}
                  title={other.title}
                  href={other.href}
                  icon={other.icon}
                >
                  {other.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: string }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
        <div className="flex items-center">
          <Image src={icon} alt={title} width={32} height={32} className="mr-2" />
            <div>
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            </div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
