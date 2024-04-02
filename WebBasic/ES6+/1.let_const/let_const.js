/*
    let
*/

/*
    블록 레벨 스코프 : 
    - 모든 코드블럭 내에서 선언된 해당 코드 블럭 내에서만 사용 가능 
*/
{
    var functLevel = 10; 
}
console.log(functLevel);

// 블록 레벨 변수는 해당 블럭 외부에서 사용 불가능
// 
// {let blockLevel = 10;}
// 
// console.log(blockLevel);

/*
    변수 중복 선언 불가 : 
    - 변수를 동일한 이름으로 여러개를 선언할 수 없음
*/
var varVariable = 10;
var varVariable = 20;

// let letVariable = 10;
// let letVariable = 10;


/*
    호이스팅 : var, function 선언문을 최상단에 선언한 것처럼 동작하는 특성  
    - let 키워드로 선언된 변수는 최상단에서 변수의 선언문까지 일시적 사각지대(TDZ : Temporal Dead Zone)에 빠트림
*/
console.log(varHosting);
var varHosting = 10;

// ReferenceError: Cannot access 'letHosting' before initialization (초기화 전에 'letHosting'에 액세스할 수 없습니다.)
// console.log(letHosting);
// let letHosting = 10;

// ReferenceError: letHosting is not defined ( letHosting이 정의되지 않았습니다 )
// console.log(notDefined);

/*
    const
*/

/*
    선언과 초기화 : 
    - const는 재할당 불가능
    - 선언과 동시에 반드시 초기화가 이루어져야함
*/

// 변수 재할당 불가능
// TypeError: Assignment to constant variable.
// const ASSIGNMENT = 10;
// ASSIGNMENT = 11;

// const 선언에 초기화가 되어 있지 않음
// SyntaxError: Missing initializer in const declaration
// const INITIALIZATION; 


/*
    상수와 객체 : 
    - 코드의 가독성 향상을 위해 많이 사용 됨
    - 객체에 할당하여 참조를 변경하지 못하도록 하고 속성만 변경 가능하도록 함
    - 일반적으로 객체는 상수로 사용
*/

// 재할당 불가능
// TypeError: Assignment to constant variable.
// const king = { name : '이성계' };
// king = { name : '이방원' };

// 속성 (값) 은 변경 가능
const king = { name : '이성계' };
king.name = '이방원';
console.log(king)

/*
    var, let, const
    - ES6 이상을 사용할 수 없을 때 var을 사용함  ( var = for 문에서 인덱스값을 변경할 때 사용하는 경우도 있음 )
    - 재할당이 발생하는 변수에는 let을 사용함
    - 재할당이 일어나지 않는 변수에는 cost를 사용함
*/