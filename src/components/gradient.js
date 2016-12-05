/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { randomGradientName } from '../gradients';
import generator from '../generator';


function GradientContainer(props) {
  const { gradient, angle, ...rest } = props;
  return <div {...rest} />;
}

GradientContainer.propTypes = {
  className: React.PropTypes.string,
  gradient: React.PropTypes.string,
  angle: React.PropTypes.number,
  type: React.PropTypes.string
};

GradientContainer.defaultProps = {
  gradient: randomGradientName(),
  angle: -90
};

const Gradient = styled(GradientContainer)`
  ${props => props ? generator(props) : generator()}
  content: '${props => props.name}';
`;


export default Gradient;

