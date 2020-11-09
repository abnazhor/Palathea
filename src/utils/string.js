export default {
  allReplace: (str, obj) => {
    for (const el in obj) {
      str = str.replace(new RegExp(el, "g"), obj[el]);
    }
    return str;
  },
};
