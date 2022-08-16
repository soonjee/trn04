window.addEventListener('DOMContentLoaded', () => {

    const SCE_ELE = document.querySelectorAll('.screvent');

    window.addEventListener('scroll', () => {
        let sct = window.scrollY;
        console.log(sct);
        sct > 0
            ? document.querySelector('#Header').classList.add('on')
            : document.querySelector('#Header').classList.remove('on')
    });

    window.addEventListener('scroll', () => {
        let sct = window.scrollY;
        SCE_ELE.forEach(el => {
            sct > el.offsetTop
                ? el.classList.add('on')
                : el.classList.remove('on')
        })
    });
    // sct > boxheight
    //     ? document.querySelector('.screvent').classList.add('on')
    //     : document.querySelector('.screvent').classList.remove('on')

    const UL = document.querySelector('nav ul');
    const LI = [...UL.children]; //[1];
    // const LI = UL.children; [ ] 배열 안에 ul을 늘여놓은것, ... 은 늘여놓았다라는 뜻
    console.log(LI);

});


