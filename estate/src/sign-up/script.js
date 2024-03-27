
// 아이디 중복 확인
function onIdInputHandler (event){
    const checkDuplicateButtonElement = document.getElementById("check-duplication-button");
    const value = event.target.value;
    // if(value !=='' || value !== null || value !==undefined)
    // 값이 있다는걸 표현할때는 value만 적으면 됨
    if(value) checkDuplicateButtonElement.className = 'input-primary-button';
    else checkDuplicateButtonElement.className ='input-disable-button';
}

const idInputElement = document.getElementById('id');
idInputElement.addEventListener('input',onIdInputHandler);


// 이메일 인증 확인

function onEmailInputHandler (event){
    const checkEmailButtonElement = document.getElementById('check-email-button');
    const value = event.target.value;
    if(value) checkEmailButtonElement.className = 'input-primary-button';
    else checkEmailButtonElement.className = 'input-disable-button';

}

const emailInputElement = document.getElementById('email');
emailInputElement.addEventListener('input',onEmailInputHandler);

//인증 확인
function onAuthNumberElement (event){
    const value = event.target.value;
    const checkAuthNumberButtonElement = document.getElementById('check-auth-number-button');

    if(value) checkAuthNumberButtonElement.className = 'input-primary-button';
    else checkAuthNumberButtonElement.className = 'input-disable-button';
}

const authNumberInputElement = document.getElementById('auth-number');
authNumberInputElement.addEventListener('input',onAuthNumberElement);
