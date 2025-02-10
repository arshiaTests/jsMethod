//تمرین سوم: افزایش هر نمره به میزان 5 واحد با map
function lvlUp (array){
    let updateArray = [];
    for(let i =0; i<array.length;i++){
        updateArray.push(array[i]+5);
    }
    return updateArray
}
console.log(lvlUp([1,2,3,4,5,6,7,8]))