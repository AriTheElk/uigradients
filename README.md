<img src="https://raw.githubusercontent.com/garetmckinley/project-assets/master/uigradients/header.svg?sanitize=true" alt="UIGradients Logo" id="dracula-invert" />

<p align="center">
  <img alt="CircleCI" src="https://img.shields.io/circleci/build/github/garetmckinley/uigradients?style=for-the-badge">
  <img alt="npm" src="https://img.shields.io/npm/v/uigradients?style=for-the-badge">
  <img alt="npm" src="https://img.shields.io/npm/dt/uigradients?color=dodgerblue&label=Installs&style=for-the-badge">
  <img alt="GitHub" src="https://img.shields.io/github/license/garetmckinley/uigradients?color=mediumslateblue&style=for-the-badge">
</p>

* [💾 Installation](#-installation)
* [📚 Docs](#-docs)
* [🏗 Usage Examples](#-usage-examples)
* [📜 License](#-license)


## 💾 Installation

    npm install --save uigradients

or 

    yarn add uigradients


## 📚 Docs

### Components

- [`Gradient`](https://garetmckinley.github.io/uigradients/?path=/docs/documentation-gradient--linear-gradient)
- [`GradientProvider`](https://garetmckinley.github.io/uigradients/?path=/docs/documentation-gradientprovider--usage)

### Utilities

- [`generator`]()
  

#### [Or, go to the interactive docs →](https://garetmckinley.github.io/uigradients)


## 🏗 Usage Examples
### Linear Gradient Component

``` jsx
// Import the component...
import { Gradient } from 'uigradients';

// Now, use it!
class App extends Component {
    // If no gradient preset is provided,
    // a random preset will be used.
    return (
      <Gradient preset="cherry">
        <h1>This will draw a div with a cherry gradient, like the one you're looking at right now.</h1>
      </Gradient>
    );
}
```
> ###### `cherry` is only one of the many presets provided by [_`uigradients`_](https://jsbros.github.io/uigradients/)
> A complete list of the gradient presets can be previewed [here](https://0df99f9c-6d93-4766-a009-1f633aa91579.sbook.io/).
> You can use your own preset library via [`GradientProvider`](https://garetmckinley.github.io/uigradients/?path=/docs/documentation-gradientprovider--usage)

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
      <Gradient preset="aubergine" type="radial">
        <h1>Wow, a radial gradient!</h1>
      </Gradient>
    );
}
```

### Gradient Generator

``` jsx
import { generator } from 'uigradients';

generator({preset: 'intuitive_purple'});

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

### 💅 Styled Components
#### Use the Generator in `styled-components`

``` jsx
import { generator } from 'uigradients';
import styled from 'styled-components';

const Pre = styled.pre`
  ${generator({preset: 'electric_violet'})}
  border-radius: 4px;
  display: block;
`;
```

#### And render the component

![This is what an electric_violet pre looks like!](https://imgur.com/hNuroip.png)

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

![Awesome!](https://imgur.com/7G9C4eN.png)

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


## 📜 License

This package is released under the [MIT License](LICENSE)


<img src="https://raw.githubusercontent.com/syntra/assets/master/syntra-sponsorship.svg?sanitize=true" alt="sponsored by syntra.io"/>
