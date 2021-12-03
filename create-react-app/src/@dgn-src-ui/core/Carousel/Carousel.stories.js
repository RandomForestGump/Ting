import React, { useState } from "react";
import { boolean, text } from "@storybook/addon-knobs";
import CarouselComp from "./Carousel";
import Carouselmdx from "./Carousel.mdx";
import WrapperDecorator from "@dgn-src-ui/.storybook/WrapperDecorator";
import Paper from "@dgn-src-ui/core/Paper/Paper";
import Link from "@dgn-src-ui/core/Link/Link";
import CreateIcon from "@material-ui/icons/Create";

export default {
  title: "UI Core",
  component: CarouselComp,
  parameters: {
    docs: {
      page: Carouselmdx,
    },
  },
  decorators: [WrapperDecorator],
};

export const Carousel = () => {
  let props = {
    slide1content: text(
      "Slide 1 Content",
      "Elaine Benes 448 Central Park West New York, NY 10025"
    ),
    slide2content: text(
      "Slide 2 Content",
      "Phoebe Buffay 5 Morton St New York, NY 10014"
    ),
    slide3content: text(
      "Slide 3 Content",
      "Liz Lemon 160 Riverside Dr New York, NY 10024"
    ),
    showslideaction: boolean("Show Action Button on Slide?", true),
  };

  const addresses = [
    {
      id: 6,
      content: props.slide1content,
      edit: "#",
    },
    {
      id: 19,
      content: props.slide2content,
      edit: "#",
    },
    {
      id: 24,
      content: props.slide3content,
      edit: "#",
    },
  ];

  const makeAddressSlide = (address) => {
    return (
      <Paper
        elevation={0}
        square
        action={
          props.showslideaction ? (
            <Link href={address.edit}>
              Edit
              <CreateIcon fontSize="inherit" />
            </Link>
          ) : (
            false
          )
        }
      >
        {address.content}
      </Paper>
    );
  };

  const makeAddressSlides = (addresses) => {
    return addresses.map((address) => {
      return makeAddressSlide(address);
    });
  };

  let slides = makeAddressSlides(addresses);

  const [activeStep, setActiveStep] = useState(0);

  const slideAction = () => {
    setActiveStep(activeStep);
  };

  return <CarouselComp slides={slides} onCarouselUpdate={slideAction} />;
};
