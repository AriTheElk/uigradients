import { css } from 'styled-components';
import { gradients, randomGradientName } from './gradients';


function generator(props = {}) {
  let gradient = '';
  let angle = -90;
  if (props.gradient === undefined) {
    gradient = randomGradientName();
  } else {
    gradient = props.gradient;
  }
  if (props.angle !== undefined) {
    angle = props.angle;
  }
  return css`background-color: ${gradients[gradient][0]};
background-image: -webkit-linear-gradient(
  ${angle}deg,
  ${gradients[gradient][0]},
  ${gradients[gradient][1]});
background-image: -moz-linear-gradient(
  ${angle}deg,
  ${gradients[gradient][0]},,
  ${gradients[gradient][1]});
background-image: -o-linear-gradient(
  ${angle}deg,
  ${gradients[gradient][0]},,
  ${gradients[gradient][1]});
background-image: linear-gradient(
  ${angle}deg,
  ${gradients[gradient][0]},
  ${gradients[gradient][1]});`;
}

export default generator;

