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
          delete output[className][ ('@media ' + media) ];
          output[className][ ('@media ' + media) ] = temp;
        }
      }
    });
  });
});

let text = 'module.exports = ';
text += JSON.stringify(output);

fs.writeFile(path.resolve(__filename, './../../index.js'), text, (err) => {
  if (err) throw err;

  console.log();
  console.log('It\'s ok.');
  console.log();
});
