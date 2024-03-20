/*
    배열 고차 함수
    - 배열의 불변성을 최대한 보장하여 부수효과를 제거한 메서드
*/
const array = [7, 11, 20, 1, 8, 3, 16, 2, 19, 9, 10, 4, 13, 12, 14, 17, 15, 5, 18, 6];

/*
    sort(비교 함수) : 배열의 요소를 적절하게 정렬
    - 단순 sort()로 정렬하면 사전식 정렬을 하게됨
*/
// array.sort(); 
// console.log(array);

// x = 7 , y = 11  x-y = 음수면 x가 앞으로감
// asc = x-y  , desc = y-x 라고 보면 됨
const asc = function (x,y){
    return x-y;
}
array.sort(asc);
console.log(array);
array.sort(function (x,y) {return y-x});  
console.log(array);

const objects = [
    { x: 9, y: -5 },
    { x:-2, y:  0 },
    { x: 0, y: -3 },
    { x: 6, y:  5 }
]

objects.sort(function (a,b){
    return a.y - b.y ;
});
console.log(objects);

console.log('==============================');

/*
    forEach(콜백 함수) : 
    - 
    - 
    - 
    - 
*/


console.log('==============================');

/*
    map(콜백 함수) : 
    - 
    - 
*/


console.log('==============================');

/*
    filter(콜백 함수) : 
    - 
    - 
*/


console.log('==============================');

/*
    find(value, index) : 
*/


console.log('==============================');

/*
    find(value, index) : 
*/


console.log('==============================');