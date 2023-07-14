const imageSlider = () => {
  function slideLeft() {
    const slideContainer = document.querySelector('.slide-container');
    const styles = window.getComputedStyle(slideContainer);
    let horizontalOffset = styles.getPropertyValue('right');
    horizontalOffset = parseInt(horizontalOffset, 10);

    if (horizontalOffset >= -600) {
      horizontalOffset -= 200;
      horizontalOffset = `${horizontalOffset}px`;
    }

    slideContainer.style.right = horizontalOffset;
  }

  function slideRight() {
    const slideContainer = document.querySelector('.slide-container');
    const styles = window.getComputedStyle(slideContainer);
    let horizontalOffset = styles.getPropertyValue('right');
    horizontalOffset = parseInt(horizontalOffset, 10);

    if (horizontalOffset <= -200) {
      horizontalOffset += 200;
      horizontalOffset = `${horizontalOffset}px`;
    }

    slideContainer.style.right = horizontalOffset;
  }

  function viewCenter() {

  }

  function viewCenterRight() {

  }

  function viewCenterLeft() {

  }

  function viewFarRight() {

  }

  function viewFarLeft() {

  }

  function activateSlideButtons() {
    const rightButton = document.querySelector('.right-button');
    const leftButton = document.querySelector('.left-button');

    rightButton.addEventListener('click', () => {
      slideRight();
    });

    leftButton.addEventListener('click', () => {
      slideLeft();
    });
  }

  return {
    activateSlideButtons,
  };
};

imageSlider().activateSlideButtons();
