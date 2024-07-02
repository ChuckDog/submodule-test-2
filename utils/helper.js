import _ from "lodash";

export const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const lodashConcat = _.concat;

export const lodashCloneDeep = _.cloneDeep;
