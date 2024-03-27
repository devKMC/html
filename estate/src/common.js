//kakao 
function onKakaoButtonClickHandler(){
    window.location.href = 'http://developers.kakao.com';
}


// naver
function onnaverButtonClickHandler(){
    window.location.href = 'http://developers.naver.com';
}

const KakaoButtonClickElement = document.getElementById('kakaoLink');
KakaoButtonClickElement.addEventListener('click', onKakaoButtonClickHandler);
const naverButtonClickElement = document.getElementById('naverLink');