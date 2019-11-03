import React from "react";
import { PresetConsumer } from "../components/GradientProvider";
import { gradients, randomGradientName } from "../gradients.js";

export default Component => {
  const withGradientPresets = React.forwardRef((props, ref) => (
    <PresetConsumer>
      {presets => {
        const presetProp = presets || gradients;
        const activePreset = props.preset || randomGradientName(presetProp);

        return (
          <Component
            {...props}
            presets={presetProp}
            preset={activePreset}
            ref={ref}
          />
        );
      }}
    </PresetConsumer>
  ));

  return withGradientPresets;
};
