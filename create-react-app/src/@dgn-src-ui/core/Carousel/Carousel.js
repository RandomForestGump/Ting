import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { Button } from "@material-ui/core";
import NavigateNextRoundedIcon from "@material-ui/icons/NavigateNextRounded";
import NavigateBeforeRoundedIcon from "@material-ui/icons/NavigateBeforeRounded";
import MobileStepper from "@material-ui/core/MobileStepper";
import styles from "./Carousel.module.scss";

const Carousel = ({ slides, onCarouselUpdate, index, ...other }) => {
  const maxSteps = slides.length;
  const [activeStep, setActiveStep] = useState(index);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  useEffect(() => {
    onCarouselUpdate(activeStep);
  }, [activeStep, onCarouselUpdate]);

  const Slide = (slide, key) => {
    let props = {
      ...slide.props,
      key: key,
    };
    return React.cloneElement(slide, props);
  };

  return (
    <div className={styles.Carousel} {...other}>
      <SwipeableViews
        className={styles.Carousel__swiper}
        index={activeStep}
        onChangeIndex={handleStepChange}
        slideStyle={{ display: "flex" }}
      >
        {slides.map((slide, index) => Slide(slide, index))}
      </SwipeableViews>
      <div className={styles.Carousel__stepper}>
        <MobileStepper
          variant="dots"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              size="small"
              color="secondary"
              className={styles.Carousel__button}
            >
              <NavigateNextRoundedIcon />
            </Button>
          }
          backButton={
            <Button
              onClick={handleBack}
              disabled={activeStep === 0}
              size="small"
              color="secondary"
              className={styles.Carousel__button}
            >
              <NavigateBeforeRoundedIcon />
            </Button>
          }
        />
      </div>
    </div>
  );
};

Carousel.propTypes = {
  /** Array of objects to be included as slides. The Content property is required, Action is optional */
  slides: PropTypes.array.isRequired,
  /** Callback function for when the slides change */
  onCarouselUpdate: PropTypes.func,
  /** Starting slide number  */
  index: PropTypes.number,
};

Carousel.defaultProps = {
  index: 0,
};

export default Carousel;
