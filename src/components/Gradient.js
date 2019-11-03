/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import generator from "../generator";
import withPresets from "../hoc/withPresets";

function GradientContainer(props) {
  const { gradient, angle, type, textMask, scale, start, end, ...rest } = props;
  return <div {...rest} />;
}

const Gradient = styled(GradientContainer)`
  ${props => generator(props)}
`;

Gradient.propTypes = {
  className: PropTypes.string,
  preset: PropTypes.string,
  angle: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  type: PropTypes.string,
  textMask: PropTypes.bool,
  scale: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string,
};

Gradient.defaultProps = {
  angle: -90,
  textMask: false,
};

export default withPresets(Gradient);
