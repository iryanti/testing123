import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface IContentSlider {
  autoPlay?: boolean;
  children: any;
  itemsPerSlideDesk?: number;
}

export default function ContentSlider({
  autoPlay = true,
  itemsPerSlideDesk = 5,
  children,
}: IContentSlider) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: itemsPerSlideDesk,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      showDots={false}
      swipeable={false}
      draggable={false}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={autoPlay}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
    >
      {children}
    </Carousel>
  );
}
