export const equals = <E extends string[] | number[]>(
  arr1: E,
  arr2: E,
): boolean => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return isSuperSet(arr1, arr2);
};

export const isSuperSet = <E extends (string | number | undefined)[]>(
  arr1: E,
  arr2: E,
): boolean => {
  // @ts-ignore
  return arr2.every((arr2Item) => arr1.includes(arr2Item));
};

export const intersection = <T, E extends Array<T>>(arr1: E, arr2: E): T[] => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return [];
  }
  return arr1.filter((x) => arr2.includes(x));
};

type IdObject = {
  id: any;
};

export function uniqueById<T extends IdObject>(array: T[]) {
  const addedIds: string[] = [];
  return array.reduce((accumulator, current) => {
    if (addedIds.indexOf(current.id) >= 0) {
      return accumulator;
    } else {
      addedIds.push(current.id);
      accumulator.push(current);
      return accumulator;
    }
  }, [] as T[]);
}

export function unique<T>(array: T[]): T[] {
  return [...new Set(array)];
}

export function moveElement(
  inputArray: string[],
  element: string,
  direction: 'Up' | 'Down',
) {
  const array = [...inputArray];
  const index = array.indexOf(element);

  if (index !== -1) {
    const newPosition =
      direction === 'Up'
        ? Math.max(index - 1, 0)
        : Math.min(index + 1, array.length - 1);
    array.splice(index, 1);
    array.splice(newPosition, 0, element);
  }

  return array;
}

export function mapByKey<T, K extends keyof T>(array: T[] = [], theKey: K) {
  const result: { [key: string]: T } = {};

  array.forEach((entry) => {
    const key = entry[theKey];
    if (typeof key === 'string') {
      result[key] = entry;
    }
  });

  return result;
}

export function partition<T>(array: T[], predicate: (elem: T) => boolean) {
  return array.reduce<[T[], T[]]>(
      ([pass, fail], elem) => {
        return predicate(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]];
      },
      [[], []],
  );
}

