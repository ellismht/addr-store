import { mockSmths } from "@/common/mockSmth";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const Home = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnMouseEnter:true, stopOnInteraction:false }));
  return (
    <div>
      <Carousel
        opts={{ align: "center", loop: true }}
        plugins={[plugin.current]}
      >
        <CarouselContent>
          {mockSmths.map((item) => (
            <CarouselItem
              key={item.id}
              className="flex justify-center items-center basis-3/4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6 rounded-lg"
            >
              <Card className="p-0 shadow-none border-none">
                <CardContent className="p-0 shadow-none">
              <img onClick={() => alert('przekierowanie')}
                className="rounded-lg"
                src={item.images[0].url}
                height={item.images[0].height}
                width={item.images[0].width}
              />
              </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <div className="hidden sm:block">
        <CarouselPrevious />
        <CarouselNext />
        </div> */}
      </Carousel>
    </div>
  );
};

export default Home;
