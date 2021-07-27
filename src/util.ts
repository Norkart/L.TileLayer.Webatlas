export const doTemplate = (string: string, data: any) => {
  let value: any;
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      value = data[key];
      string = string.replace('{' + key + '}', value);
    }
  }
  return string;
};
