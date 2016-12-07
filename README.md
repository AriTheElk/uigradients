[![travis-ci build status](https://travis-ci.org/JSBros/uigradients.svg?branch=master)](https://travis-ci.org/JSBros/uigradients) [![Slack Status](https://slackin-xtuseyimsc.now.sh/badge.svg)](https://slackin-xtuseyimsc.now.sh/)

[![uigradients website banner](http://imgur.com/xPdyAx4.png)](https://jsbros.github.io/uigradients/)

[![uigradients preview gradients](http://i.imgur.com/lFbfzII.png)](https://595f03bc-218b-4dc7-9045-df52791c557f.sbook.io/)

## Installation

    npm install --save uigradients

## Examples
### Linear Gradient Component

``` jsx
// Import the component...
import { Gradient } from 'uigradients';

// Now, use it!
class App extends Component {
    // If no gradient name is provided,
    // a random one will be chosen.
    return (
      <Gradient gradient="cherry">
        <h1>This will draw a div with a cherry gradient, like the one you're looking at right now.</h1>
      </Gradient>
    );
}
```
> ###### `cherry` is only one of the many presets provided by [_`uigradients`_](https://jsbros.github.io/uigradients/)
> A complete list of the gradient presets can be previewed [here](https://595f03bc-218b-4dc7-9045-df52791c557f.sbook.io/?selectedKind=Gradient%20Component&selectedStory=Color%20Previews&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel).
> Test out these presets, or create your own! But be sure to
[**PR your creation**](https://github.com/JSBros/uigradients/compare) so the
rest of the community can benefit from your ascetic awesomeness!

### Radial Gradient Component

``` jsx
import { Gradient } from 'uigradients';

class App extends Component {
    return (
      // Add a "type" attribute on your component and
      // set it to "radial" for a radial gradient!
      // NOTE: If a "type" attribute is not on
      // your component, the gradient type will
      // default to linear
      <Gradient gradient="aubergine" type="radial">
        <h1>Wow, a radial gradient!</h1>
      </Gradient>
    );
}
```

### Gradient Generator

``` jsx
import { generator } from 'uigradients';

generator({gradient: 'intuitive_purple'});

/* The function above returns:
background-color: ,#DA22FF,;
background-image: -webkit-linear-gradient(
  left,
  ,#DA22FF,,
  ,#9733EE,);
background-image: linear-gradient(
  to left,
  ,#DA22FF,,
  ,#9733EE,);
*/
```

uiGradients also supports [radial gradients](https://developer.mozilla.org/en-US/docs/Web/CSS/radial-gradient).

When using the `generator` function to create a radial gradient, two additional properties of `type` and `options` should be present on the object passed into `generator`.

The `type` and `options` properties are only required when generating a radial gradient. Passing an object with only a `gradient` property will generate a linear gradient.

``` jsx
import { generator } from 'uigradients';

generator({
  gradient: 'intuitive_purple',
  type: 'radial',
  options: {
    position: '45px 20px',
    shape: 'ellipse', // 'circle' or 'ellipse'
    colorStops: ['20%', '50%'], // Can be percentage or pixel values
    extent: 'farthest-corner'
  }
});

/* The function above returns:
background-image: -webkit-radial-gradient(
  ellipse farthest-corner at 45px 20px,
  #DA22FF 20%,
  #9733EE 50%);
background-image: radial-gradient(
  ellipse farthest-corner at 45px 20px,
  #DA22FF 20%,
  #9733EE 50%);
*/
```

#### Configuring the `options` for a Radial Gradient

If using the `generator` function to create a radial gradient, the following properties are valid configurations for a radial gradient:

```js
{
  gradient: 'electric_violet',
  type: 'radial'
  options: {
    position: '45px 20px', // defaults to center if omitted
    shape: 'ellipse', // defaults to circle if omitted
    colorStops: ['20%', '50%'], // the stop position for each color
    extent: 'farthest-corner' // valid options are closest-side, closest-corner, farthest-side, and farthest-corner
  }
}
```

Each property on the `options` object maps to the CSS values for [radial-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/radial-gradient).

NOTE: When using the `extent` property, the `position` property must also be set.

### <💅> Styled Components
#### Use the Generator in a styled-component

``` jsx
import { generator } from 'uigradients';
import styled from 'styled-components';

const Pre = styled.pre`
  ${generator({gradient: 'electric_violet'})}
  border-radius: 4px;
  display: block;
`;
```

#### And render the component

![This is what an electric_violet pre looks like!](http://imgur.com/hNuroip.png)

#### Or, you can override other properties on the Gradient component

``` jsx
import { Gradient } from 'uigradients';
import styled from 'styled-components';

const Header = styled(Gradient)`
  min-height: 300px;
  text-align: center;
  width: 100%;
`;
```

#### And render the component

![Awesome!](http://imgur.com/7G9C4eN.png)

#### Or, you can generate a radial gradient

```js
import { generator } from 'uigradients';
import styled from 'styled-components';

const RadialComponent = styled.div`
${generator({gradient: 'electric_violet', type: 'radial'})}
`;
```

#### And render the component

![Radial gradient](https://i.imgur.com/PcyFqtx.jpg)

#### Customize a radial gradient

```js
import { generator } from 'uigradients';
import styled from 'styled-components';

const RadialComponent = styled.div`
${generator({
    gradient: 'electric_violet',
    type: 'radial',
    options: {
        position: '45px 20px',
        shape: 'ellipse',
        colorStops: ['20%', '50%'],
        extent: 'farthest-corner'
    }
  }
)}`;
```

#### And render the component

![Custom radial gradient](http://i.imgur.com/ESjCRbI.jpg)

## Author

Built by [Garet McKinley](https://github.com/garetmckinley)

## License

This package is released under the [MIT License](LICENSE)
