import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function TabsRivi() {
  return (
    <Tabs defaultValue="chat" className="w-[400px]">

      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="chat">Rivi Chat</TabsTrigger>
        <TabsTrigger value="recommend">Rivi Recommended</TabsTrigger>
        <TabsTrigger value="other">Other Rivi AI</TabsTrigger>
      </TabsList>

      <TabsContent value="chat">
        <Card>
          <CardHeader>
            <CardTitle>Chat with RIVI</CardTitle>
            <CardDescription>
                NLU and conversational AI models that power Rivi's chat
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
            </div>
            <div className="space-y-1">
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="recommend">
        <Card>
          <CardHeader>
            <CardDescription>
              Recommendation systems for every aspect of travel
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
            </div>
            <div className="space-y-1">
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="other">
        <Card>
            <CardHeader>
                <CardTitle>Demo AI</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="space-y-1">
                </div>
                <div className="space-y-1">
                </div>
            </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
