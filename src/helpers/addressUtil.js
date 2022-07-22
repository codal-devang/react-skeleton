import { allCountryData } from '../shared_components/json/country';
import { allStateData } from '../shared_components/json/state';

export const AddressUtils = {
  getCountryName: countryId => {
    const allCountries = allCountryData;
    for (let index = 0; index < allCountries.length; index += 1) {
      const element = allCountries[index];
      if (countryId === element.isoCode) {
        return element.name;
      }
    }
    return undefined;
  },
  getState: (stateId, countryId) => {
    const allStates = [];
    if (countryId) {
      allStateData.forEach(element => {
        if (element.countryCode === countryId) {
          allStates.push(element);
        }
      });
    }
    for (let index = 0; index < allStates.length; index += 1) {
      const element = allStates[index];
      if (stateId === element.isoCode) {
        return element.name;
      }
    }
    return undefined;
  },
};

export default AddressUtils;
