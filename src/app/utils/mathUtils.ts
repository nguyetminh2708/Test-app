import { mean } from 'lodash';

export const averageBy = <T>(collection: T[], expression: (val: T) => number): number => {
  const values = collection.map(expression).filter((item) => item != null && typeof item === 'number');

  if (values.length === 0) {
    return null;
  }

  return mean(values);
};
