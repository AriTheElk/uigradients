# uiGradients
<div align="center"><img src="http://i.giphy.com/3oz8xTRTgiIERV3Kms.gif" alt="uiGradients in action"/></div>

## Installation

    npm install --save uigradients
    
## Examples
### Gradient Component

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
> ###### `cherry` is only one of the many presets provided by [_`uigradients`_](https://JSBros/uigradients)
> A complete list of the gradient presets can be found [here](https://github.com/JSBros/uigradients/blob/master/src/gradients.js).
> Test out these presets, or create your own! But be sure to 
[**PR your creation**](https://github.com/JSBros/uigradients/compare) so the 
rest of the community can benefit from your ascetic awesomeness! 


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

``` jsx
<Pre>
  This is what an electric_violet pre looks like!
</Pre>
```


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

``` jsx
<Header gradient="day_tripper">
  Awesome!
</Header>
```

## Author

Built by [Garet McKinley](https://github.com/garetmckinley)

## License

This package is released under the [MIT License](LICENSE)
