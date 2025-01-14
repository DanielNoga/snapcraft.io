function maskString(str: string | undefined) {
  const visibleCharacterCount = 4;

  if (!str) {
    return "";
  }

  if (str.length < visibleCharacterCount) {
    return str;
  }

  const strLength = str.length;
  const strEnd = str.slice(strLength - visibleCharacterCount, strLength);

  let strMask = "";

  for (let i = 0, ii = strLength - visibleCharacterCount; i < ii; i++) {
    strMask += "*";
  }

  return `${strMask}${strEnd}`;
}

export default maskString;
