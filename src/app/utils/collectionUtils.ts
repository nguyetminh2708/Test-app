import { isArray, mergeWith } from 'lodash';

export function customizer(objValue, srcValue) {
  if (isArray(objValue) && isArray(srcValue)) {
    return srcValue;
  }
}

export const updateItem = <T, TKey>(entity: T, collection: T[], keySelector: (entity: T) => TKey): T[] => {
  const itemIdx = collection.findIndex((item) => keySelector(item) === keySelector(entity));
  if (itemIdx < 0) {
    return collection;
  }

  const updatedCollection = [...collection];
  updatedCollection[itemIdx] = mergeWith({}, collection[itemIdx], entity, customizer);

  return updatedCollection;
};

export const mergeItems = <T, TKey>(originalData: T[], updatedData: T[], keySelector: (entity: T) => TKey): T[] => {
  const result = [...updatedData];
  originalData.forEach((entity) => {
    const itemIdx = updatedData.findIndex((item) => keySelector(item) === keySelector(entity));
    if (itemIdx < 0) {
      result.push(entity);
      return;
    }

    result[itemIdx] = mergeWith({}, entity, updatedData[itemIdx], customizer);
  });

  return result;
};
