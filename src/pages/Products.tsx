import { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Carousel } from 'primereact/carousel';
import type { Smth } from "../common/Smth";
import type { CarouselResponsiveOption } from 'primereact/carousel';
import { fetchSmthResults } from "../common/api";

export default function Products() {
  const [smths, setSmths] = useState<Smth[]>([]);
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

  useEffect(() => {
    const smth1 = async () => {
      const smth2 = await fetchSmthResults();
      setSmths(smth2);
    };

    smth1();
  }, []);

  const productTemplate = (product: Smth) => {
    return (
      <div className="flex flex-col">
        <div className="mb-3 flex justify-center">
          <img
            src={product.images[0].url}
            alt={product.name}
            className="shadow-2"
            height={product.images[0].height}
            width={product.images[0].width}
          />
        </div>
        <div className="flex flex-col">
          <h4 className="mb-1 flex justify-center">{product.name}</h4>
          <h6 className="flex justify-center">{product.name}</h6>
          <div className="mt-1 flex justify-center p-4 gap-4">
            <Button icon="pi pi-search" className="p-button p-button-rounded" />
            <Button
              icon="pi pi-star-fill"
              className="p-button-success p-button-rounded"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <Carousel
        value={smths}
        numVisible={3}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        className="custom-carousel h-auto w-auto mt-3"
        circular
        autoplayInterval={3000}
        itemTemplate={productTemplate}
      />
    </div>
  );
}
