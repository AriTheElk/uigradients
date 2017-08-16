import gradients from './gradient_list.json';

function randomGradientName() {
  const keys = Object.keys(gradients);
  const index = Math.floor(Math.random() * keys.length);
  return keys[index];
}


export { gradients, randomGradientName };

