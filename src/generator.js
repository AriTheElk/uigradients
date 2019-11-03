import { css } from "styled-components";

export const linearGradient = ({ presets, preset, angle, start, end }) => css`
  background-color: ${start || presets[preset].start};
  background-image: -webkit-linear-gradient(
    ${angle}deg,
    ${start || presets[preset].start},
    ${end || presets[preset].end}
  );
  background-image: -moz-linear-gradient(
    ${angle}deg,
    ${start || presets[preset].start},
    ${end || presets[preset].end}
  );
  background-image: -o-linear-gradient(
    ${angle}deg,
    ${start || presets[preset].start},
    ${end || presets[preset].end}
  );
  background-image: linear-gradient(
    ${angle}deg,
    ${start || presets[preset].start},
    ${end || presets[preset].end}
  );
`;

export const radialGradient = ({
  presets,
  preset,
  extent,
  shape = "circle",
  position = "center",
  start,
  end,
}) =>
  css`
    background-image: -webkit-radial-gradient(
      ${shape} ${extent} at ${position},
      ${start || presets[preset].start},
      ${end || presets[preset].end}
    );
    background-image: -moz-radial-gradient(
      ${shape} ${extent} at ${position},
      ${start || presets[preset].start},
      ${end || presets[preset].end}
    );
    background-image: -o-radial-gradient(
      ${shape} ${extent} at ${position},
      ${start || presets[preset].start},
      ${end || presets[preset].end}
    );
    background-image: radial-gradient(
      ${shape} ${extent} at ${position},
      ${start || presets[preset].start},
      ${end || presets[preset].end}
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
