import { Events, scroller } from 'react-scroll';
import React, { useRef, useEffect } from 'react';
import moment from 'moment';

// Note: here we added some pre defined and used function in previous project 

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
export default usePrevious;

export const setDots = number => {
  let str = '';
  for (let i = 0; i < number; i += 1) {
    str += '.';
  }
  return str;
};

export const formatPhoneNumber = value => {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, '');
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
};

export const setIndex = currentIndex => {
  let index;
  if (currentIndex < 10) {
    index = `00${currentIndex + 1}`;
  } else if (currentIndex < 100) {
    index = `0${currentIndex + 1}`;
  } else {
    index = `${currentIndex + 1}`;
  }
  return index;
};

export const formatedssn = val => {
  if (val.length > 0) {
    const val1 = val.replace(/\-/g, '');
    for (let i = 0; val1.length <= 9; i += i) {
      return formatSocialSecurity(String(val1).padStart(9, '0'));
    }
  }
};

export const formatedfein = val => {
  if (val.length > 0) {
    const val1 = val.replace(/\-/g, '');
    for (let i = 0; val1.length <= 9; i += i) {
      return fein(String(val1).padStart(9, '0'));
    }
  }
};

function formatSocialSecurity(val) {
  val = val.replace(/\D/g, '');
  val = val.replace(/^(\d{3})/, '$1-');
  val = val.replace(/-(\d{2})/, '-$1-');
  val = val.replace(/(\d)-(\d{4}).*/, '$1-$2');
  return val;
}

function fein(val) {
  // val = val.replace(/\D/g, '');
  val = val.replace(/^(\d{2})/, '$1-');
  return val;
}

export function convertText(str) {
  const frags = str.split('_');
  for (let i = 0; i < frags.length; i += 1) {
    frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
  }
  return frags.join(' ');
}

export function windowScrollUp() {
  window.scrollTo(0, 0);
}

export const scrollToWithContainer = () => {
  const goToContainer = new Promise(resolve => {
    Events.scrollEvent.register('begin', (...args) => {
      resolve([...args]);
      Events.scrollEvent.remove('begin');
    });

    scroller.scrollTo('AccountingInformation', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  });

  goToContainer.then(() =>
    scroller.scrollTo('AccountingInformation', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      containerId: 'containerElement',
    })
  );
};

export const valueRender = (element, value, placeholderName) => {
  if (!value) {
    return element;
  }
  const children = [
    <span
      key={2}
      style={{ color: value === placeholderName ? 'rgba(1, 24, 98, 0.34)' : '#011862' }}
      className="ellipse-text"
    >
      {value === placeholderName ? placeholderName : element.props.children}
    </span>,
  ];
  return React.cloneElement(element, { ...element.props }, children);
};

// not allow dot as first character
export const catchDot = e => {
  if (e.key === '.' && e && e.target && e.target.value === '') {
    e.target.value = null;
    e.preventDefault();
  } else if (e.key === '.' && e && e.target && e.target.value.charAt(0) === '.') {
    e.target.value = null;
    e.preventDefault();
    return false;
  }
};

// get getDimensions
export const getDimensions = ele => {
  const { height } = (ele && ele.getBoundingClientRect()) || {};
  const offsetTop = ele && ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

// handle scroll event for shadow class
export const handleScroll = (id, headerRef) => {
  // const { height: headerHeight } = getDimensions(headerRef.current);
  // let scrollPosition;
  const a = 1;
  const b = 0;
  const mainNavLink = document.getElementById(id);
  if (a === b) {
    console.log(headerRef);
  }
  if (window.scrollY === 0) {
    // scrollPosition = window.scrollY + 278;
    if (mainNavLink) {
      mainNavLink.classList.remove('shadow');
    }
  } else {
    // scrollPosition = window.scrollY + headerHeight;
    if (mainNavLink) {
      mainNavLink.classList.add('shadow');
    }
  }
};

// check obkect empty or not
export const isObjectEmpty = value => {
  return (
    Object.prototype.toString.call(value) === '[object Object]' && JSON.stringify(value) === '{}'
  );
};

export const handleEnter = event => {
  if (event.keyCode === 13) {
    event.preventDefault();
    event.stopPropagation();
  }
};

// convert time to 10.00 PM formate
export function formatAMPM(t) {
  return moment(new Date().setHours(t[0], t[1], t[2])).format('LT');
}

export function hasWhiteSpace(s) {
  return /\s/.test(s);
}

// For converting normal text to CamelCase
export const formatCamelText = str => {
  return str && str.charAt(0) && str.charAt(0).toUpperCase() + str && str.slice(0);
};

/**
 *
 * @param text
 * @param highlight
 * @returns
 * working code
 */
export const getHighlightedText = (text, highlight) => {
  if (!highlight.trim()) {
    return text;
  }

  if (
    highlight !== '<' &&
    highlight !== '<b' &&
    highlight !== 'b' &&
    highlight !== 'r' &&
    highlight !== '/' &&
    highlight !== '>'
  ) {
    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);
    const updatedParts = parts
      .filter(part => part)
      .map((part, i) => (regex.test(part) ? <mark key={i}>{part}</mark> : part));
    let newText = '';
    [...updatedParts].map(parts1 => {
      newText +=
        typeof parts1 === 'object'
          ? `<${parts1.type}>${parts1?.props?.children}</${parts1.type}>`
          : parts1;
    });
    return newText;
  }
  return text;
};

export const setString = data => {
  let str = '';
  let str1 = '';
  let str2 = '';
  if (data && data.length > 0) {
    data.forEach((element, index) => {
      if (index !== 0) {
        str1 += ' ';
      }
      str += element.display_name;
      if (data.length - 1 !== index) {
        str2 += ',';
      }
    });
  }
  return str.length + str1.length + str2.length;
};

// copy need to remove html and add new line tag
export function removeHTML(str) {
  const tmp = document.createElement('DIV');
  const passStr = str?.replaceAll("</span><span class='ellipse-text'>", '\n') || '-';
  tmp.innerHTML = passStr;
  return tmp.textContent || tmp.innerText || '';
}

export function newRemoveHTML(str) {
  const tmp = document.createElement('DIV');
  let passStr = str?.replaceAll("</span><span class='ellipse-text'>", '') || '-';
  passStr = str?.replaceAll('\n', '') || '-';
  passStr = str?.replaceAll('</span>', '') || '-';
  passStr = str?.replaceAll("<span class='ellipse-text'>", '') || '-';
  tmp.innerHTML = passStr;
  return tmp.textContent || tmp.innerText || '';
}

export function convertHMS(value) {
  const sec = parseInt(value, 10); // convert value to number if it's string
  let hours = Math.floor(sec / 3600); // get hours
  let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
  let seconds = sec - hours * 3600 - minutes * 60; //  get seconds
  // add 0 if value < 10; Example: 2 => 02
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${hours}:${minutes}:${seconds}`; // Return is HH : MM : SS
}

export const convertMinsToHrsMins = mins => {
  let h = Math.floor(mins / 60);
  let m = mins % 60;
  h = h < 10 ? `0${h}` : h; // (or alternatively) h = String(h).padStart(2, '0')
  m = m < 10 ? `0${m}` : m; // (or alternatively) m = String(m).padStart(2, '0')
  return `${h}:${m}`;
};

export const appendZero = value => {
  const newValue = value < 10 ? `0${value}` : value; // (or alternatively) h = String(h).padStart(2, '0')
  return newValue;
};

export const ConverDataFormate = dt => {
  return `${(dt.getMonth() + 1).toString().padStart(2, '0')}/${dt
    .getDate()
    .toString()
    .padStart(2, '0')}/${dt.getFullYear().toString().padStart(4, '0')} ${dt
    .getHours()
    .toString()
    .padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}:${dt
    .getSeconds()
    .toString()
    .padStart(2, '0')}`;
};

// open pdf file in new tab
export const downloadFile = (path, filename) => {
  // Create a new link
  const anchor = document.createElement('a');
  anchor.target = '_blank';
  anchor.href = path;
  anchor.download = filename;

  // Append to the DOM
  document.body.appendChild(anchor);

  // Trigger `click` event
  anchor.click();

  // Remove element from DOM
  document.body.removeChild(anchor);
};

// PDF file download
export const downloadPDFFile = (path, filename) => {
  // Create a new link
  const anchor = document.createElement('a');
  anchor.setAttribute('href', `data:text/plain;charset=utf-8, ${encodeURIComponent(path)}`);
  anchor.target = '_blank';
  anchor.setAttribute('download', filename);

  // Append to the DOM
  document.body.appendChild(anchor);

  // Trigger `click` event
  anchor.click();

  // Remove element from DOM
  document.body.removeChild(anchor);
};
