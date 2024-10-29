"use client";

import { animate } from 'framer-motion';

const randomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const Button4 = () => {
  const onButtonClick = () => {
    const hearts = Array.from({ length: 20 });

    const heartsAnimation = hearts.map((_, index) => [
      `.hearts-${index}`,
      {
        x: randomNumberBetween(-100, 100),
        y: randomNumberBetween(-100, 100),
        scale: randomNumberBetween(1.5, 2.5),
        opacity: 1,
      },
      {
        duration: 0.5,
        at: 0.0, // Start immediately
      },
    ]);

    const heartsFadeOut = hearts.map((_, index) => [
      `.hearts-${index}`,
      {
        opacity: 0,
        scale: [1, 0],
      },
      {
        duration: 0.5,
        at: 0.5, // Start after the initial animation completes
      },
    ]);

    const heartsReset = hearts.map((_, index) => [
      `.hearts-${index}`,
      {
        x: 0,
        y: 0,
      },
      {
        duration: 0.000001,
      },
    ]);

    animate([
      ...heartsReset,
      ...heartsAnimation,
      ...heartsFadeOut,
    ]);
  };

  return (
    <div className='btn-container'>
        <button
        className="py-2 px-4 border-2 border-green-400 text-green-400 w-fit rounded-lg flex flex-col items-center justify-center relative font-semibold text-lg uppercase"
        onClick={onButtonClick}
        >
            Click Me
            <span aria-hidden className="absolute inset-0 block pointer-events-none -z-10">
                {Array.from({ length: 20 }).map((_, index) => (
                <svg
                    className={`absolute opacity-0 left-1/2 top-1/2 hearts-${index}`}
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                >
                    <path
                    d="M12 2l2 6h6l-4.5 3.5L17 18l-5-3.5L7 18l1.5-6.5L4 8h6L12 2z"
                    fill="currentColor"
                    />
                </svg>
                ))}
            </span>
        </button>

        <p>Button 4</p>
    </div>
  );
};

export default Button4;
