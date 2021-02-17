/**
 * Takes in an array of objects plus a value
 * And searches all values in all of the properies
 * In all of the objects to see if there's a match
 * And returns the objects that do.
 * @param  {any[]} array
 * @param  {string} value
 */
export const filterByValue = (array: any[], value: string) => {
  return array.filter((o) =>
    Object.keys(o).some((k) => {
      return String(o[k]).toLowerCase().includes(String(value.toLowerCase()));
    })
  );
};
