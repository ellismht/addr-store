import { Carousel, CarouselResponsiveOption } from "primereact/carousel";
import { Smth } from "../common/model/Smth";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { fetchSmthResults } from "../common/services/api";

const responsiveOptions: CarouselResponsiveOption[] = [
  {
    breakpoint: "1400px",
    numVisible: 4,
    numScroll: 1,
  },
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
    numScroll: 1,
  },
];

const Products = () => {
  const [smths, setSmths] = useState<Smth[]>([]);
  useEffect(() => {
    const smth = async () => {
      const smth2 = await fetchSmthResults();
      setSmths(smth2);
    };

    smth();
  }, []);

  return (
    <div className="global-align py-2">
      <Carousel
        value={smths}
        numVisible={3}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        circular
        autoplayInterval={3000}
        itemTemplate={smthTemplate}
      />
    </div>
  );
};

export default Products;

const smthTemplate = (smth: Smth) => {
  return (
    <div className="border-spacing-1">
      <div className="mb-3 flex justify-center">
        <img
          src={smth.images[0].url}
          width={smth.images[0].width}
          height={smth.images[0].height}
          alt={smth.name}
        />
      </div>
      <div className="flex flex-col">
        <h4 className="flex justify-center">{smth.name}</h4>
        <div className="flex justify-center">
          <Button icon="pi pi-search" className="text-victoria-950" />
          <Button icon="pi pi-star-fill" />
        </div>
      </div>
    </div>
  );
};
