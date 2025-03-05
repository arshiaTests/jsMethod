function removeDuplicates(arr) {
    let uniqueArray = [];
    for (let num of arr) {
      if (!uniqueArray.includes(num)) {
        uniqueArray.push(num);
      }
    }
    return uniqueArray;
  }
  console.log(removeDuplicates([1,1,1,2,2,,3,4,,54,2,23,3]))

  const removeDuplicatesPreserveOrder = (arr) => {
    const seen = new Set();
    return arr.filter((num) => {
      if (!seen.has(num)) {
        seen.add(num);
        return true;
      }
      return false;
    });
  };
  
  console.log(removeDuplicatesPreserveOrder([1, 2, 2, 3, 4, 4, 5])); // خروجی: [1, 2, 3, 4, 5]
  
