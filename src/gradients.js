import gradients from "./gradient_list.json";

function randomGradientName() {
  const keys = Object.keys(gradients);
  const index = Math.floor(Math.random() * keys.length);
  return keys[index];
}

function listGradients() {
  const map = new Map(Object.entries(gradients));
  const GradientPreviews = [];

  map.forEach(function(value, key) {
    GradientPreviews.push(key);
  });

  return GradientPreviews;
}

export { gradients, listGradients, randomGradientName };
