export const getOrderColors = (color?: string) => {
  switch (color) {
    default:
    case 'red':
      return {
        dark: 'hsl(331, 100%, 50%)',
        light: 'hsl(333, 100%, 96%)',
      };

    case 'orange':
      return {
        dark: 'hsl(36, 100%, 48%)',
        light: 'hsl(36, 100%, 96%)',
      };

    case 'blue':
      return {
        dark: 'hsl(209, 100%, 50%)',
        light: 'hsl(210, 100%, 96%)',
      };

    case 'violet':
      return {
        dark: 'hsl(252, 100%, 50%)',
        light: 'hsl(252, 100%, 96%)',
      };

    case 'green':
      return {
        dark: 'hsl(104, 100%, 41%)',
        light: 'hsl(105, 67%, 95%)',
      };
  }
};
