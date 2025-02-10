//تمرین سوم: افزایش هر نمره به میزان 5 واحد با map
function lvlUp (array){
    let updateArray = array.map(array => array+5);
    return updateArray
}
console.log(lvlUp([1,2,3,4,5,6,7,8]))