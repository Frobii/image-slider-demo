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

  function viewPosition(position) {
    const slideContainer = document.querySelector('.slide-container');
    const styles = window.getComputedStyle(slideContainer);
    let horizontalOffset = styles.getPropertyValue('right');
    horizontalOffset = parseInt(horizontalOffset, 10);

    horizontalOffset = position;
    horizontalOffset = `${horizontalOffset}px`;

    slideContainer.style.right = horizontalOffset;
  }

  function viewCenter() {
    viewPosition(-400);
  }

  function viewCenterRight() {
    viewPosition(-200);
  }

  function viewCenterLeft() {
    viewPosition(-600);
  }

  function viewFarRight() {
    viewPosition(0);
  }

  function viewFarLeft() {
    viewPosition(-800);
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

  function activatePickPosButtons() {
    const center = document.querySelector('.center');
    center.addEventListener('click', () => {
      viewCenter();
    });

    const centerRight = document.querySelector('.center-right');
    centerRight.addEventListener('click', () => {
      viewCenterRight();
    });

    const centerLeft = document.querySelector('.center-left');
    centerLeft.addEventListener('click', () => {
      viewCenterLeft();
    });

    const farRight = document.querySelector('.far-right');
    farRight.addEventListener('click', () => {
      viewFarRight();
    });

    const farLeft = document.querySelector('.far-left');
    farLeft.addEventListener('click', () => {
      viewFarLeft();
    });
  }

  function activateAllButtons() {
    activateSlideButtons();
    activatePickPosButtons();
  }

  return {
    activateAllButtons,
  };
};

imageSlider().activateAllButtons();
