function convertColor(color) {
  let name = '';
  switch (color) {
    case '#10C469':
      name = 'green';
      break;
    case '#1076C4':
      name = 'blue';
      break;
    case '#F87928':
      name = 'orange';
      break;
    case '#76C0D1':
      name = 'lblue';
      break;
    case '#D12626':
      name = 'red';
      break;
    case '#B16ED9':
      name = 'purple';
      break;
    case '#FFD436':
      name = 'yellow';
      break;
    case '#F97474':
      name = 'pink';
      break;
    case '#65218D':
      name = 'darkpurple';
      break;
    case '#373737':
      name = 'black';
      break;
    case '#A5A5A5':
      name = 'gray';
      break;
    case '#309EF2':
      name = 'light-blue';
      break;
    default:
      name = '';
      break;
  }
  return name;
}

const GetColorName = para => {
  if (para) {
    const tempcolor = convertColor(para);
    return tempcolor;
  }
  return '';
};

export default GetColorName;
