'use strict';

export default {
  grid: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'stretch'
  },

  cell: {
    boxSizing: 'border-box'
  },

  col: (type) => {
    switch(type) {
      case 'hide-desktop':
        return {
          display: 'none!important'
        };

      case 'hide-tablet':
        return {
          '@media (min-width:480px) and (max-width:839px)': {
            display: 'none!important'
          }
        };

      case 'hide-phone':
        return {
          '@media (max-width:479px)': {
            display: 'none!important'
          }
        };

      default:
        if(Number.isInteger(type)) {
          return {
            width: 0 < type && type < 12 ? (100 / 12 * type) + '%' : '100%'
          };
        }

        if(type.indexOf('-tablet') !== -1) {
          const col =  type.replace('-tablet', '');

          return {
            '@media (min-width:480px) and (max-width:839px)': {
              width: 0 < col && col < 8 ? (100 / 8 * col) + '%' : '100%'
            }
          };
        }

        if(type.indexOf('-phone') !== -1) {
          const col =  type.replace('-phone', '');

          return {
            '@media (max-width:479px)': {
              width: 0 < col && col < 4 ? (100 / 4 * col) + '%' : '100%'
            }
          };
        }
    }
  }
};
