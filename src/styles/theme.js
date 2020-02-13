import tinycolor from 'tinycolor2';

// Permet de générer une couleur plus claire
// color : couleur à traiter et percent: pourcentage à appliquer
export const lighten = (color, percent) => tinycolor(color).lighten(percent).toString();
// Permet de générer une couleur plus foncée
// color : couleur à traiter et percent: pourcentage à appliquer
export const darken = (color, percent) => tinycolor(color).darken(percent).toString();

const theme = {
  mainColor: '#0457A0',
  contentColor: '#555',
};

export default theme;
