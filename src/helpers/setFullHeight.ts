export const setFullHeight = () => {
  let constantHeight = window.innerHeight;

  document.documentElement.style.setProperty(
    '--vh',
    `${constantHeight * 0.01}px`
  );

  window.addEventListener('resize', () => {
    if (
      window.innerHeight - constantHeight > 90 ||
      constantHeight - window.innerHeight > 90
    ) {
      constantHeight = window.innerHeight;

      document.documentElement.style.setProperty(
        '--vh',
        `${constantHeight * 0.01}px`
      );
    }
  });
};
