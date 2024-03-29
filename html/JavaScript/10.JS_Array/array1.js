/*
    배열 : 여러 데이터를 하나의 변수로 저장할 때 사용
*/

/*
    배열 리터럴 : 
    - 0개 이상의 값을 쉼표로 구분하여 []로 묶어 표현
    - 배열[인덱스]로 요소에 접근 가능 , 존재하지 않는 인덱스에 접근하면 undefined 반환
    - 자바스크립트 배열 각 요소의 데이터 타입이 서로 달라도 됨
*/
const emptyArray = []; // 길이가 0인 배열 , 인덱스 0번도 존재하지 않음
console.log(emptyArray[2]);

const numbers =[1,2,3,4,'5']; 
console.log(numbers);

const functions = {
    function () {console.log('함수1')},
    function () {console.log('함수2')}
}

console.log(functions)

functions[0];
console.log('==============================');

/*
    배열의 요소 추가
    - 배열(인덱스) = 값 요소 추가 기능 순서를 생각할 필요 없음
    - 뛰어 넘은 인덱스의 값에는 empty item으로 표현됨 ( 값이 들어가는 건 아님 )
*/
const emptyArray2 = [];
emptyArray2[2] = 10;


console.log(emptyArray2);
console.log(emptyArray2[0]);

console.log('==============================');

/*
    배열의 요소 삭제
    - delete 연산자를 사용하여 제거 가능
*/
delete emptyArray2[2];
console.log(emptyArray2);


console.log('==============================');

/*
    배열의 순회
    - for - in 문을 사용하여 인덱스 값을 가지고 순회 가능
*/
const fruits = ['apple','banana','melon'];
for (let index = 0; index < fruits.length; index++){
    console.log(fruits[index]);
}

for (const index in fruits){
    console.log(fruits[index]);
}

console.log('==============================');

/*
    - for in 순회 방식은 index를 사용하여 한번 더 작업해야 하기 때문에 요소를 읽어들이는 순회에는 적합하지 않을 수 있음
    - forEach 메서드 혹은 for - of 문을 사용
*/
for (const item of fruits){
    console.log(item);
}
// 괄호안에는 (요소 , 인덱스)
fruits.forEach(function(item,index){
    console.log(`index : ${index} , item : ${item}`);
}) 

console.log('==============================');

/*
    배열의 길이 : 배열.length
*/


console.log('==============================');

/*
    배열 메서드
*/

/*
    indexOf(element) : 
    - 배열에서 매개변수로 전달된 요소를 검색하여 해당 인덱스를 반환
    - 배열에 요소가 존재하지 않으면 -1을 반환
*/
console.log(fruits.indexOf('banana'));
console.log(fruits.indexOf('bana'));


console.log('==============================');

/*
    includes(element) :
    - 배열에 매개변수로 전달된 요소가 존재하면 true 반환 , 존재하지 않으면 false 반환
*/
console.log(fruits.includes('banana'));
console.log(fruits.includes('bana'));


console.log('==============================');

/*
    push(element) : 
    - 배열의 마지막 인덱스에 요소를 추가하고 변경된 길이를 반환
*/
console.log(fruits, fruits.length); 
console.log(fruits.push('bana'));
console.log(fruits);

console.log('==============================');

/*
    pop() :
    - 배열의 마지막 인덱스 요소를 제거하고 제거한 요소를 반환
*/
console.log(fruits.pop());
console.log(fruits);

console.log('==============================');

/*
    shift() :
    - 배열의 첫번째 요소를 제거하고 제거한 요소를 반환
*/
console.log(fruits.shift());
console.log(fruits);


console.log('==============================');

/*
    reverse() :
    - 배열의 순서를 역전
*/
console.log(fruits.reverse());
console.log(fruits);

console.log('==============================');

/*
    concat(array or item) : 
    - 매개변수로 전달된 값들을 해당 배열의 마지막 요소 뒤에 연결하여 새로운 배열을 반환
*/
const newFurits = fruits.concat('apple','bana');
console.log(newFurits);
console.log(fruits);


console.log('==============================');

/*
    slice(start, end) : 
    - start에 해당하는 인덱스부터 end에 해당하는 인덱스 앞까지 복사하여 반환
*/
console.log(newFurits.slice(1,3));
console.log(newFurits);

console.log('==============================');

/*
    splice(start, elementeCount, items...) :
    - 배열의 요소를 제거하고 제거한 위치에 요소를 갈아끼운 배열을 반환
    - elementecount는 지정한 수 만큼 제거
*/
// console.log(newFurits.splice(2, 1)); // 멜론(0) 바나나(1) 애플(2) 바나(3) 에서 제거하면서 애플을 반환하고
// console.log(newFurits);              // 애플이 제거된 값이 나옴

console.log(newFurits.splice(2,1,'peach')); // 멜론(0) 바나나(1) 애플(2) 바나(3) 에서 제거하면서 애플을 반환하고
console.log(newFurits);                     // 애플이 peach 로 변경된 값이 나옴


