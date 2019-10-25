import React, { createContext, Component } from "react";
import memoize from "memoize-one";
import { gradients } from "../gradients.js";

// import StyledError from "../utils/error";
// import isFunction from "../utils/isFunction";

// export type Theme = { [key: string]: mixed };

// type Props = {
//   children?: Element<any>,
//   presets: Theme | ((outerPresets: Theme) => void),
// };

export const PresetContext = createContext();

export const PresetConsumer = PresetContext.Consumer;

/**
 * Provide a presets to an entire react component tree via context
 */
export default class GradientProvider extends Component {
  //   getContext;

  //   renderInner;

  constructor(props) {
    super(props);
    this.getContext = memoize(this.getContext.bind(this));
    this.renderInner = this.renderInner.bind(this);

    console.log("PROVIDER");
  }

  render() {
    console.log("fuck");
    if (!this.props.children) return null;

    return <PresetContext.Consumer>{this.renderInner}</PresetContext.Consumer>;
  }

  renderInner(outerPresets) {
    const context = this.getContext(this.props.presets, outerPresets);

    console.log("RENDERINNER");

    return (
      <PresetContext.Provider value={context}>
        {this.props.children}
      </PresetContext.Provider>
    );
  }

  /**
   * Get the presets from the props, supporting both (outerPresets) => {}
   * as well as object notation
   */
  getPresets(presets, outerPresets) {
    // if (isFunction(presets)) {
    //   const mergedTheme = presets(outerPresets);

    //   if (
    //     process.env.NODE_ENV !== "production" &&
    //     (mergedTheme === null ||
    //       Array.isArray(mergedTheme) ||
    //       typeof mergedTheme !== "object")
    //   ) {
    //     throw new StyledError(7);
    //   }

    //   return mergedTheme;
    // }

    // if (presets === null || Array.isArray(presets) || typeof presets !== "object") {
    //   throw new StyledError(8);
    // }

    if (!outerPresets && !presets) {
      return gradients;
    }

    console.log(outerPresets, presets);

    return { ...outerPresets, ...presets };
  }

  getContext(presets, outerPresets) {
    return this.getPresets(presets, outerPresets);
  }
}
