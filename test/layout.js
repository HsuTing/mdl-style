var Layout = require('./../lib/index');
var Grid = Layout.Grid;
var Cell = Layout.Cell;
var Col = Layout.Col;

console.log( Grid );
console.log( Cell );

console.log( Col('hide-desktop') ); 
console.log( Col('hide-tablet') ); 
console.log( Col('hide-phone')) ; 

for(var i = 1; i < 4; i++) {
  console.log( Col(i + '-phone') );
}

for(var i = 1; i < 8; i++) {
  console.log( Col(i + '-tablet') );
}

for(var i = 1; i < 12; i++) {
  console.log( Col(i) );
}
