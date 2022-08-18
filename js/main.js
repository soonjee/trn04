window.addEventListener('DOMContentLoaded', () => {
    // const boxheight = document.querySelector('.hhh').offsetTop;
    // console.log(boxheight);

    window.addEventListener('scroll', () => {
        let sct = window.scrollY;
        // console.log(sct);
        sct > 0
            ? document.querySelector('#Header').classList.add('on')
            : document.querySelector('#Header').classList.remove('on')

        sct > 500
            ? document.querySelector('.to_top').classList.add('on')
            : document.querySelector('.to_top').classList.remove('on');

    });

    const MainSlider = new Swiper('.MainSlider', {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    })

    const SCE_ELE = document.querySelectorAll('.active-event')
    window.addEventListener('scroll', () => {
        let sct = window.scrollY;
        SCE_ELE.forEach(el => {
            sct > el.offsetTop - 300
                ? el.classList.add('on')
                : el.classList.remove('on')
        })
    });
    // const UL = document.querySelector('nav ul');
    // const LI = [...UL.children];
    // console.log(LI);

    document.querySelector('.to_top').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    });


    document.querySelector('.mopen').addEventListener('click', (e) => {
        const TG = e.currentTarget;
        TG.classList.toggle('on'); //this
        document.querySelector('#Header').classList.toggle('ox')
    })

    document.querySelector('#Header').addEventListener('wheel', (e) => {
        e.preventDefault() // 이벤트 자체를 막음...
    })

})
        // });
        // // sct > boxheight
        // //     ? document.querySelector('.screvent').classList.add('on')
        // //     : document.querySelector('.screvent').classList.remove('on')

        // const UL = document.querySelector('nav ul');
        // const LI = [...UL.children]; //[1];
        // // const LI = UL.children; [ ] 배열 안에 ul을 늘여놓은것, ... 은 늘여놓았다라는 뜻
        // console.log(LI);