import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import { gradients } from "../src/gradients.js";
import Gradient from "../src/components/gradient.js";

const Preview = styled(Gradient)`
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  color: #fff;
  font-family: sans-serif;
  margin-bottom: 10px;
  padding: 50px;
  text-align: center;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
`;

const map = new Map(Object.entries(gradients));

const GradientPreviews = [];

map.forEach(function(value, key) {
  GradientPreviews.push(key);
});

storiesOf("Gradient Component", module)
  .add("Linear Gradient Previews", () => (
    <div>
      {GradientPreviews.map(function(value, id) {
        return (
          <Preview gradient={value} key={id}>
            {value}
          </Preview>
        );
      })}
    </div>
  ))
  .add("Radial Gradient Previews", () => (
    <div>
      {GradientPreviews.map(function(value, id) {
        return (
          <Preview gradient={value} key={id} type={"radial"}>
            {value}
          </Preview>
        );
      })}
    </div>
  ));
