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
