import { css } from "styled-components";
import { gradients, randomGradientName } from "./gradients";

function generateRadialGradientCss(options, gradientColors) {
  const { shape, position, extent, colorStops } = options;
  return css`
    background-image: -webkit-radial-gradient(
      ${shape} ${extent} at ${position},
      ${gradientColors[0]} ${colorStops[0]},
      ${gradientColors[1]} ${colorStops[1]}
    );
    background-image: -moz-radial-gradient(
      ${shape} ${extent} at ${position},
      ${gradientColors[0]} ${colorStops[0]},
      ${gradientColors[1]} ${colorStops[1]}
    );
    background-image: -o-radial-gradient(
      ${shape} ${extent} at ${position},
      ${gradientColors[0]} ${colorStops[0]},
      ${gradientColors[1]} ${colorStops[1]}
    );
    background-image: radial-gradient(
      ${shape} ${extent} at ${position},
      ${gradientColors[0]} ${colorStops[0]},
      ${gradientColors[1]} ${colorStops[1]}
    );
    background-position: center;
  `;
}

function configRadialGradientOptions(options = {}) {
  const { position, shape, colorStops, extent } = options;
  const radialConfig = {};
  if (position) {
    radialConfig.position = position;
  } else {
    radialConfig.position = "center";
  }
  if (shape && (shape === "circle" || shape === "ellipse")) {
    radialConfig.shape = shape;
  } else {
    radialConfig.shape = "circle";
  }
  if (Array.isArray(colorStops)) {
    radialConfig.colorStops = colorStops;
  } else {
    radialConfig.colorStops = ["", ""];
  }
  if (
    extent === "closest-side" ||
    extent === "closest-corner" ||
    extent === "farthest-side" ||
    extent === "farthest-corner"
  ) {
    radialConfig.extent = extent;
  } else {
    radialConfig.extent = "";
  }
  return radialConfig;
}

function generateTextMask() {
  return css`
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `;
}

function generateScale(scale) {
  return css`
    background-size: ${scale};
  `;
}

function generator(props = {}) {
  let gradient = "";
  let angle = -90;
  const styles = [];
  if (!props.presets) {
    return null;
  }
  if (props.gradient === undefined) {
    gradient = randomGradientName(props.presets);
  } else {
    gradient = props.gradient;
  }
  if (props.angle !== undefined) {
    angle = props.angle;
  }
  const { type, options, textMask, scale } = props;
  if (scale) {
    styles.push(generateScale(scale));
  }
  if (type === "radial") {
    const config = configRadialGradientOptions(options);
    styles.push(generateRadialGradientCss(config, gradients[gradient]));
  } else {
    styles.push(css`
      background-color: ${gradients[gradient][0]};
      background-image: -webkit-linear-gradient(
        ${angle}deg,
        ${gradients[gradient][0]},
        ${gradients[gradient][1]}
      );
      background-image: -moz-linear-gradient(
        ${angle}deg,
        ${gradients[gradient][0]},
        ,
        ${gradients[gradient][1]}
      );
      background-image: -o-linear-gradient(
        ${angle}deg,
        ${gradients[gradient][0]},
        ,
        ${gradients[gradient][1]}
      );
      background-image: linear-gradient(
        ${angle}deg,
        ${gradients[gradient][0]},
        ${gradients[gradient][1]}
      );
      ${textMask && generateTextMask()};
    `);
  }
  return styles;
}

export default generator;
