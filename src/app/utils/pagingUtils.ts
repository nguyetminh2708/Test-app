export const generatePageItems = (totalPages: number, currentPage: number, numberOfDisplayItems: number) => {
  const items: (string | number)[] = new Array(numberOfDisplayItems);
  if (totalPages < numberOfDisplayItems) {
    for (let i = 0; i < totalPages; i++) {
      items[i] = i;
    }
    return items;
  }
  // get the temp position of current page
  const left = Math.max(
    0,
    Math.min(totalPages - numberOfDisplayItems, currentPage - Math.floor(numberOfDisplayItems / 2))
  );

  for (let i = 0; i < numberOfDisplayItems; i += 1) {
    // set position in the paging items line base on numberOfDisplayItems
    items[i] = i + left;
  }

  // replace non-ending items with placeholders
  if (+items[0] > 0) {
    items[0] = 0;
    items[1] = 'prev-ellipsis';
  }

  if (+items[items.length - 1] < totalPages - 1) {
    items[items.length - 1] = totalPages - 1;
    items[items.length - 2] = 'next-ellipsis';
  }
  return items;
};
