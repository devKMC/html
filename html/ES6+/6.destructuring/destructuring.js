/*
    디스트럭처링 :
    - 구조화된 배열 또는 객체를 비구조화, 구조화 파괴하여 개별 변수로 할당하는 것
    - 배열 또는 객체에서 필요한 데이터만 추출해서 사용
*/

let king = {
    name: '이성계',
    name: '이성계',
    tombName: '태조',
    birth: '1335年.11月04日',
    death: '1408年06月27日'
}
console.log(king);
// let name = king.name;
// let tombName = king.tombName;
// let birth = king.birth;
// let death = king.death;

let fruits = ['apple', 'banana', 'melon', 'mango', 'orange'];

// let fruit1 = fruits[0];
// let fruit2 = fruits[1];
// let fruit3 = fruits[2];
// let fruit4 = fruits[3];
// let fruit5 = fruits[4];

/*
    배열 디스트럭처링
    - 배열의 각각의 요소를 배열로부터 추출해서 리스트에 할당
    - 할당 기준은 인덱스를 기준으로 함
*/

// 위에서 주석한 부분을 디스트럭쳐링을 사용하여 간편하게 만듬
// let fruits = ['apple', 'banana', 'melon', 'mango', 'orange'];
const [fruit1,fruit2,fruit3] = fruits;
console.log(fruit1,fruit2,fruit3);
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);



console.log('========================================');

/*
    spread 연산자를 활용
    - 
*/



console.log('========================================');

/*
    객체 디스트럭처링
    - 
    - 
*/



console.log('========================================');

/*
    spread 연산자를 활용
    - 
*/



console.log('========================================');