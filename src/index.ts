export default (map: { [key: string]: Record<any, any>}, key: string) => {
  return Object.keys(map).reduce((arr, index) => {
    arr.push({
      ...map[index],
      [key]: index
    });
    return arr;
  }, [] as Array<Record<any, any>>)
}