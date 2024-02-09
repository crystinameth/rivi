"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { chat, recommend, others, ListItem } from "./navigation";

export function TabsRivi() {
  return (
    <Tabs defaultValue="chat" className="pt-20 pl-40 w-[1200px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="chat">Rivi Chat</TabsTrigger>
        <TabsTrigger value="recommend">Rivi Recommended</TabsTrigger>
        <TabsTrigger value="other">Other Rivi AI</TabsTrigger>
      </TabsList>

      <TabsContent value="chat">
        <Card>
          <CardHeader>
            <CardTitle className="scroll-m-20 text-4xl pt-10 pl-10 font-extrabold tracking-wide lg:text-5xl font-serif ">
              Chat with RIVI
            </CardTitle>
            <CardDescription className="scroll-m-20 text-2xl pt-5 pl-10 font-bold tracking-tight font-serif">
              NLU and conversational AI models that<br/> power Rivi&apos;s chat
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid w-[600px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[1000px]">
              {chat.map((chat) => (
                <ListItem
                  key={chat.title}
                  title={chat.title}
                  icon={chat.icon}
                >
                  {chat.description}
                </ListItem>
              ))}
            </ul>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="recommend">
        <Card>
          <CardHeader>
            <CardDescription className="scroll-m-20 text-2xl pt-5 pl-10 font-bold tracking-tight font-serif">
              Recommendation systems for every aspect of travel
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid w-[600px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[1000px]">
              {recommend.map((recommend) => (
                <ListItem
                  key={recommend.title}
                  title={recommend.title}
                  icon={recommend.icon}
                >
                </ListItem>
              ))}
            </ul>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="other">
        <Card>
          <CardHeader>
            <CardTitle className="scroll-m-20 text-4xl pt-10 pl-10 font-extrabold tracking-wide lg:text-5xl font-serif">
                Demo AI
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid w-[600px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[1000px]">
              {others.map((other) => (
                <ListItem
                  key={other.title}
                  title={other.title}
                  icon={other.icon}
                >
                  {other.description}
                </ListItem>
              ))}
            </ul>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
