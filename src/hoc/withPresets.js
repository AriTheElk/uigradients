import React from "react";
import { PresetConsumer } from "../components/GradientProvider";
import { gradients } from "../gradients.js";

export default Component => {
  const withGradientPresets = React.forwardRef((props, ref) => (
    <PresetConsumer>
      {presets => {
        const presetProp = presets || gradients;

        return <Component {...props} presets={presetProp} ref={ref} />;
      }}
    </PresetConsumer>
  ));

  return withGradientPresets;
};
