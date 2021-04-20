export const enumToMap = (enumeration: any): Map<string, string | number> => {
  const map = new Map<string, string | number>();
  for (const key in enumeration) {
    //TypeScript does not allow enum keys to be numeric
    if (!isNaN(Number(key))) continue;

    const val = enumeration[key] as string | number;

    //TypeScript does not allow enum value to be null or undefined
    if (val !== undefined && val !== null) map.set(key, val);
  }

  return map;
};

export const enumToArray = (
  enumeration: any,
): Array<{ value: string; label: string | number }> => {
  const mapOfEnum = enumToMap(enumeration);

  return Array.from(mapOfEnum.entries()).map((m) => ({
    value: m[0],
    label: m[1],
  }));
};
