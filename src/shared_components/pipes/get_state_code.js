import { allStateData } from '../json/state';

export const StateCodeConverter = para => {
  let result;
  allStateData.forEach(element => {
    if (element.name === para) {
      result = element.isoCode;
    }
  });
  return result;
};
