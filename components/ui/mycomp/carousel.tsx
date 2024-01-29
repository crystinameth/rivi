import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import {
    Card,
    CardContent,
  } from "@/components/ui/card"

export default function MyCaousel(){
return (
    <div className="w-full bg-slate-400 font-mono font-semibold text-2xl tracking-wide flex items-center justify-center p-6 ">
        <Carousel
          opts={{
            align: "end",
          }}
          orientation="horizontal"
          className="w-full max-w-xs"
        >
          <CarouselContent className="-mt-1 h-[400px]">
            <CarouselItem>
            <div className="p-4">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-3xl font-semibold text-center">
                  Rivi is on a mission to empower the traveller with the most
                  intelligent product globally.
                  </span>
                </CardContent>
              </Card>
            </div>
            </CarouselItem>

            <CarouselItem>
            <div className="p-4">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-3xl font-semibold text-center">
                  One that deeply understands them.
                  </span>
                </CardContent>
              </Card>
            </div>
            </CarouselItem>

            <CarouselItem>
            <div className="p-4">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-3xl font-semibold text-center">
                    One that shares personalized recommendations for flights, stays,
                    activities, food and nightlife.
                  </span>
                </CardContent>
              </Card>
            </div>
            </CarouselItem>

            <CarouselItem>
            <div className="p-4">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-3xl font-semibold text-center">
                  One that provides transparent information so that nobody spends
                  more for less.
                  </span>
                </CardContent>
              </Card>
            </div>
            </CarouselItem>

            <CarouselItem>
            <div className="p-4">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-3xl font-semibold text-center">
                  One that helps them make decisions, backed by data.
                  </span>
                </CardContent>
              </Card>
            </div>
            </CarouselItem>

            <CarouselItem>
            <div className="p-4">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-3xl font-semibold text-center">
                  One that makes travel magical and easy.
                  </span>
                </CardContent>
              </Card>
            </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
)
}