import { css } from "styled-components";

export const linearGradient = ({ presets, preset, angle }) => css`
  background-color: ${presets[preset][0]};
  background-image: -webkit-linear-gradient(
    ${angle}deg,
    ${presets[preset][0]},
    ${presets[preset][1]}
  );
  background-image: -moz-linear-gradient(
    ${angle}deg,
    ${presets[preset][0]},
    ${presets[preset][1]}
  );
  background-image: -o-linear-gradient(
    ${angle}deg,
    ${presets[preset][0]},
    ${presets[preset][1]}
  );
  background-image: linear-gradient(
    ${angle}deg,
    ${presets[preset][0]},
    ${presets[preset][1]}
  );
`;

export const radialGradient = ({
  presets,
  preset,
  extent,
  shape = "circle",
  position = "center",
}) =>
  css`
    background-image: -webkit-radial-gradient(
      ${shape} ${extent} at ${position},
      ${presets[preset][0]},
      ${presets[preset][1]}
    );
    background-image: -moz-radial-gradient(
      ${shape} ${extent} at ${position},
      ${presets[preset][0]},
      ${presets[preset][1]}
    );
    background-image: -o-radial-gradient(
      ${shape} ${extent} at ${position},
      ${presets[preset][0]},
      ${presets[preset][1]}
    );
    background-image: radial-gradient(
      ${shape} ${extent} at ${position},
      ${presets[preset][0]},
      ${presets[preset][1]}
    );
    background-position: center;
  `;

export const gradientTextMask = () => css`
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const gradientScale = scale => css`
  background-size: ${scale};
`;

const generator = (props = {}) => {
  const { presets, type, textMask, scale } = props;

  // This is the array of css styles we'll return later
  const styles = [];

  if (!presets) {
    return null;
  }

  if (scale) {
    styles.push(gradientScale(scale));
  }

  if (textMask) {
    styles.push(gradientTextMask());
  }

  styles.push(
    type === "radial" ? radialGradient(props) : linearGradient(props)
  );

  return styles;
};

export default generator;
