const ID = 'kim';
const PASSWORD = '123asd!';
const EMAIL = 'email@email.con';
const AUTH_NUMBER = '1010';


const idInputElement = document.getElementById('id');
const emailInputElement = document.getElementById('email');
const authNumberInputElement = document.getElementById('auth-number');

const checkDuplicateButtonElement = document.getElementById('check-duplication-button');
const checkEmailButtonElement = document.getElementById('check-email-button');
const checkAuthNumberButtonElement = document.getElementById('check-auth-number-button');

const idMessageElement = document.getElementById('id-message');
const emailMessageElement = document.getElementById('email-message');


// 아이디 중복 확인
function onIdInputHandler (event) {
    const value = event.target.value;

    if (value) checkDuplicateButtonElement.className = 'input-primary-button';
    else checkDuplicateButtonElement.className = 'input-disable-button';
}

// 이메일 인증 확인
function onEmailInputHandler (event) {
    const value = event.target.value;
    if(value) checkEmailButtonElement.className = 'input-primary-button';
    else checkEmailButtonElement.className = 'input-disable-button';
}

// 인증 확인
function onAuthnumberInputHandler (event) {
    const value = event.target.value;
    if(value) checkAuthNumberButtonElement.className = 'input-primary-button';
    else checkAuthNumberButtonElement.className = 'input-disable-button';
}

idInputElement.addEventListener('input', onIdInputHandler);
emailInputElement.addEventListener('input', onEmailInputHandler);
authNumberInputElement.addEventListener('input', onAuthnumberInputHandler);

function onCheckDuplicateClickHandler (event) {
    const idValue = idInputElement.value;
    if(!idValue) return;

    const isDuplicate = idValue === ID;

    if(isDuplicate){
        idMessageElement.className = 'input-message error';
        idMessageElement.textContent = '이미 사용중인 아이디 입니다.';
    }else{
        idMessageElement.className = 'input-message primary';
        idMessageElement.textContent = '사용 가능한 아이디 입니다.';
    }
}

// 이메일 형식에 대한 확인 작업
function onCheckEmailClickHandler (event) {
    const emailValue = emailInputElement.value;

    const emailReg = /^[a-zA-Z0-9]*@([-.]?[a-zA-Z0-9])*\\.[a-zA-Z]{2,4}$/; //자바 스크립트에서의 정규식
    const isEmail = emailReg.test(emailValue);
    if(!isEmail){
        emailMessageElement.className = 'input-message error';
        emailMessageElement.textContent = '이메일 형식이 아닙니다.';
        return;
    }

    const isDuplicateEmail = emailValue === EMAIL;
    if(isDuplicateEmail){
        emailMessageElement.className = 'input-message error';
        emailMessageElement.textContent = '이미 사용중인 이메일 입니다.';
        return;
    }

    emailMessageElement.className = 'input-message primary';
    emailMessageElement.textContent = '인증번호가 전송되었습니다.'
}

checkDuplicateButtonElement.addEventListener('click', onCheckDuplicateClickHandler);

checkEmailButtonElement.addEventListener('click', onCheckEmailClickHandler);