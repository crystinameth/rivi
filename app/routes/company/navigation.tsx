"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const chat: { title: string; href: string; description: string; }[] = [
  {
    title: "Intent Classification",
    href: "#",
    description:
      "Understands the user's motive behind each message sent",
  },
  {
    title: "Named Entity Recognition",
    href: "#",
    description:
      "Classifies key information units into pre-defined categories",
  },
  {
    title: "Entity Understanding",
    href: "#",
    description:
      "Interprets the meaning of entity values conveyed by the user",
  },
  {
    title: "Contextual Conversations",
    href: "#",
    description: "Predicts the best action to take after every user message",
  },
  {
    title: "Natural Language Generation",
    href: "#",
    description:
      "Sends personalized responses from Rivi to each user",
  },
]

const others: {title: string; href: string; description: string; }[] = [
    {
        title: "Flight price prediction",
        href: "#",
        description: "Rivi predicts the flight prices for any given route based on historical data",
    },
    {
        title: "Rivi Automated Learning",
        href: "#",
        description: "Rivi automatically learns by itself in real-time based on feedback",
    },
    {
        title: "From the reviews, I read",
        href: "#",
        description: "Rivi reads and analyzes the reviews of a Place and shares all the meaningful info",
    },
]
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
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
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
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
