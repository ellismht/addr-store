import { mockSmths } from "@/common/mockSmth";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const Home = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <div className="mx-3 sm:mx-13">
      <Carousel
        opts={{ align: "center", loop: true }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {mockSmths.map((item) => (
            <CarouselItem
              key={item.id}
              className="flex justify-center items-center basis-3/4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6"
            >
              <img
                src={item.images[0].url}
                height={item.images[0].height}
                width={item.images[0].width}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden sm:block">
        <CarouselPrevious />
        <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
