/*
    타입 앨리어스 :
    - 커스텀 타입을 지정하는 방법으로 인터페이스와 유사하게 사용됨
    - type 키워드를 사용
*/
let gender: '남' | '여';

// 상수는 리터럴값에 이름을 부여하는 용도로 많이 사용함
type Gender = '남' | '여';
let Gender: Gender = '남';

type CustomText = string;



// interface King {
//     name: string;
//     tombName: string;
//     birth: string;
//     death: string;
// }

// 인터페이스의 킹과 같이 만든다고 했을 때
type King = {
    name: string,
    tmbName: string;
    birth: string;
    death: string;
};

const taejo: King = {
    name: '이성계',
    tmbName: '태조',
    birth: '1335-11-04',
    death: '1408-06-27'
}

console.log('==================================================');
