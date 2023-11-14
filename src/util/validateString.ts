const validateString = (inputString: string): boolean => {
  if (!inputString) return true;
  else if (inputString[inputString.length - 1] === ",") return true;
  const regex = /^(\d+,)*\d+$/;

  return regex.test(inputString);
};

export default validateString;
