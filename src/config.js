export const regEx = {
    // eslint-disable-next-line max-len
    mail: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    name: /^[a-z ,.'-\u00E0-\u00FC]+$/i,
    decimal: /[.]\d$/,
    street: /^[a-zA-Z,.'-\d\s\u00E0-\u00FC]+$/i,
    link: /(https?:\/\/[^\s]+)/g,
    cuit: /\b([0-9]{2})(\D)?[0-9]{8}(\D)?[0-9]/,
  };
  
  export const config = {
    maxCantProd: 50,
    locales: "en-MX",
  };