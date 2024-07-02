import axios from "../node_modules/axios/dist/esm/axios.js";
import debounce from "../node_modules/lodash-es/debounce.js";

export const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export default {
  axios,
  debounce,
  getRandomInt,
};
