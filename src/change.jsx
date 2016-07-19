'use strict';

import fs from 'fs';
import path from 'path';
import Merge from 'merge';

import MDL from './../mdl';

let output = {};


//spite ','
Object.keys(MDL).map((key) => {
  key.split(',').map((className) => {
    if(output[ className ] === undefined) {
      output[ className ] = Merge({}, MDL[ key ]);
    }

    else {
      let temp = Merge({}, output[ className ], MDL[ key ]);
      delete output[className];
      output[className] = temp;
    }
  });
});


//add media
delete output.mediaQueries;

Object.keys(MDL.mediaQueries).map((media) => {
  Object.keys(MDL.mediaQueries[media]).map((key) => {
    key.split(',').map((className) => {
      if(output[ className ] === undefined) {
        let temp = {};
        temp[ ('@media ' + media) ] = MDL.mediaQueries[media][ key ];
        output[ className ] = Merge({}, temp);
      }

      else {
        if(output[ className ][ ('@media ' + media) ] === undefined) {
          output[ className ][ ('@media ' + media) ] = MDL.mediaQueries[media][ key ];
        }

        else {
          let temp = Merge({}, output[ className ][  ('@media ' + media) ], MDL.mediaQueries[media][ key ]);
          delete output[ className ][ ('@media ' + media) ];
          output[ className ][ ('@media ' + media) ] = temp;
        }
      }
    });
  });
});


//hover, focus, active
let tempOutput = Merge({}, output);

const addState = (key, state) => {
  if(key.indexOf(state) !== -1) {
    delete output[key];

    let className = key.replace(state, '');
    if(output[ className ] === undefined) {
      let temp = {};
      temp[ state ] = tempOutput[key];
      output[ className ] = Merge({}, temp);
    }

    else {
      if(output[ className ][ state ] === undefined) {
        output[ className ][ state ] = tempOutput[key]
      }
    }
  }
};

Object.keys(tempOutput).map((key) => {
  [':hover', ':focus', ':active'].map((state) => {
    addState(key, state);
  });
});


// rename 
const rename = (newClassName, oldClassName) => {
  output[ newClassName ] = output[ oldClassName ]; 
  delete output[ oldClassName ];
};

for(let i = 1; i <= 12; i++) {
  const base = '.mdl-cell--' + i + '-col-';
  ['phone', 'tablet'].map((label) => {
    const className = base + label;
    rename(className, className+className);
    rename('.mdl-grid--no-spacing>'+className, '.mdl-grid--no-spacing>'+className+className)
  });
}

// special
// .mdl-grid.mdl-grid--no-spacing
delete output['.mdl-grid.mdl-grid--no-spacing'];
output['.mdl-grid--no-spacing'] = Merge({}, output['.mdl-grid'], {
  '@media (max-width:479px)': {
    padding: '0'
  },
  '@media (min-width:480px) and (max-width:839px)': {
    padding: '0'
  },
  '@media (min-width:840px)': {
    padding: '0'
  }
});


// output
Object.keys(output).map((key) => {
  console.log(key);
});

let text = 'module.exports = ';
text += JSON.stringify(output);

fs.writeFile(path.resolve(__filename, './../../index.js'), text, (err) => {
  if (err) throw err;
});
