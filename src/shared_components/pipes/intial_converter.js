function jsUcfirst(string) {
  const matches = string.match(/\b(\w)/g); // ['J','S','O','N']
  const acronym = matches.join(''); // JSON
  return acronym;
}
export const InitializedConverter = para => {
  if (para) {
    return jsUcfirst(para.replace(/ /g, '_'));
  }
  return '';
};
