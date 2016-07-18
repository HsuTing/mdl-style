# mdl-style

Here are [material design lite](https://getmdl.io/) style for [radium](https://github.com/FormidableLabs/radium).

## Style

- [Layout](./#Layout).

## Layout

- `no-spacing` is not used here.
- `mdl-grid`, `mdl-cell`
```
  import {Grid, Cell} from 'mdl-style';

  console.log(Grid);
  // { display: 'flex', flexFlow: 'row wrap', alignItems: 'stretch' }

  console.log(Cell);
  // { boxSizing: 'border-box' }
```

- `mdl-cell--hide-[desktop | tablet | phone]`
```
  import {Col} from 'mdl-style';

  Col('hide-desktop');
  // { display: 'none!important' }

  Col('hide-tablet')
  // { '@media (min-width:480px) and (max-width:839px)': { display: 'none!important' } }

  Col('hide-phone')
  // { '@media (max-width:479px)': { display: 'none!important' } }
```

- `mdl-cell--N-col-[ | tablet | phone]`
```
  import {Col} from 'mdl-style';

  Col( /*1-4*/ + '-phone' )
  // { '@media (max-width:479px)': { width: '25%' } }
  // { '@media (max-width:479px)': { width: '50%' } }
  // { '@media (max-width:479px)': { width: '75%' } }

  Col( /*1-7*/ + '-tablet' )
  // { '@media (min-width:480px) and (max-width:839px)': { width: '12.5%' } }
  // { '@media (min-width:480px) and (max-width:839px)': { width: '25%' } }
  // { '@media (min-width:480px) and (max-width:839px)': { width: '37.5%' } }
  // { '@media (min-width:480px) and (max-width:839px)': { width: '50%' } }
  // { '@media (min-width:480px) and (max-width:839px)': { width: '62.5%' } }
  // { '@media (min-width:480px) and (max-width:839px)': { width: '75%' } }
  // { '@media (min-width:480px) and (max-width:839px)': { width: '87.5%' } }

  Col( /*1-11*/ )
  // { width: '8.333333333333334%' }
  // { width: '16.666666666666668%' }
  // { width: '25%' }
  // { width: '33.333333333333336%' }
  // { width: '41.66666666666667%' }
  // { width: '50%' }
  // { width: '58.333333333333336%' }
  // { width: '66.66666666666667%' }
  // { width: '75%' }
  // { width: '83.33333333333334%' }
  // { width: '91.66666666666667%' }
```
