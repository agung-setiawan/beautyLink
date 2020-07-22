# beautylink

Transform your traditional link into beautiful button

# Installation

`npm i beautylink --save`

```
import { beautylink } from 'beautylink';

beautylink({
  domID: 'theLink',
  padding: '10px',
  width: '100%',
  backgroundType: 'linear',
  solidColor: 'yellow',
  degrees: 90,
  firstPortion: 0,
  secondPortion: 100,
  firstColor: '#fff',
  secondColor: '#000',
  fontColor: 'brown',
});
```

## Options

support options :

| Option Name    | Description                                                         | Value Set                   | Default Value |
| -------------- | ------------------------------------------------------------------- | --------------------------- | ------------- |
| domID          | Element ID you want to transform (required)                         | string                      |               |
| padding        | Padding value                                                       | px, rem, %                  | 10px          |
| width          | Width value                                                         | px, rem, %                  | 100%          |
| backgroundType | Color style for background                                          | solid, linear, radial       | solid         |
| solidColor     | Color code for solid background                                     | color Hexcode or color name | #000          |
| degrees        | Color position degrees value for linear                             | number                      | 90            |
| firstPortion   | First color portion between 0 - 100% only for linear & radial type  | percent                     | 0%            |
| secondPortion  | Second color portion between 0 - 100% only for linear & radial type | percent                     | 100%          |
| firstColor     | Color code for left position only for linear & radial type          | color Hexcode or color name | #fff          |
| secondColor    | Color code for right position only for linear & radial type         | color Hexcode or color name | #000          |
| fontColor      | Color for fonts                                                     | color Hexcode or color name | #000          |

## Credits

beautylink - Created by Agung Setiawan

## Next Features

beautylink is one of my long term project call is Html Rocks, I will more and more additional project to make easy for create beautiful html style with ease implementation.
