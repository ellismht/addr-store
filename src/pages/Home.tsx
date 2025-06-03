import { mockSmths } from "@/common/mockSmth";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const Home = () => {
  return (

        <Carousel opts={{ align: "center", loop: true }}>
          <CarouselContent>
            {mockSmths.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/6 xl:basis-1/4">
                <img
                  src={item.images[0].url}
                  height={item.images[0].height}
                  width={item.images[0].width}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

  );
};

export default Home;
