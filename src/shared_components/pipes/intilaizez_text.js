import React from 'react';

function jsUcfirst(string) {
  const matches = string.match(/\b(\w)/g); // ['J','S','O','N']
  const acronym = matches.join(''); // JSON
  return acronym;
}
class InitializedText extends React.Component {
  render() {
    const { text } = this.props ? this.props : '';
    return text ? jsUcfirst(text.replace(/ /g, '_')) : '';
  }
}

export default InitializedText;
