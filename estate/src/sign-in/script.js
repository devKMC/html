const ID = 'kim';
const PASSWORD = '123asd!'


function onSignInButtonClickHandler(event){
    const id=document.getElementById('id').value;
    const password = document.getElementById('password').value;

    const signInMessageElement = document.getElementById('sign-in-message');
    if (id === ID && password === PASSWORD){
        alert('로그인성공');
        signInMessageElement.textContent = '';
    }else {
    
        signInMessageElement.textContent = '로그인 정보가 일치하지 않습니다.';
        
    }
}

function onSignUpLinkClickhandler(event){
    window.location.href = "../sign-up";

}

const onSignUpLinkElement = document.getElementById('sign-up-link');
onSignUpLinkElement.addEventListener('click',onSignUpLinkClickhandler);






