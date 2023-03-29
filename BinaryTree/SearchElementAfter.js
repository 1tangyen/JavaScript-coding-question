function elementAfter(arr, target) {
  let lastOccurrence = undefined;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      lastOccurrence = i;
    }
    else if (lastOccurrence !== undefined && i === lastOccurrence + 1) {
      return arr[i];
    }
  }
  
  return undefined;
}
