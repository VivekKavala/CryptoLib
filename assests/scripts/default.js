(() => {
    const moreLinksContainer = document.querySelector(".more-links");
    const moreLinksBtn = document.querySelector('.more-link');
    const moreLinksBtnChivron = document.querySelector('.more-link i');

    const showMenuBtn = document.querySelector('button.show-menu-btn');
    const nav = document.querySelector('nav.nav');

    //to set the left value to more links container
    // let moreLinksContainerStyles;
    // if (window.innerWidth > 1100)
    //     moreLinksContainerStyles = `left:-${(window.innerWidth - 1100) * 0.5}px`
    // else
    //     moreLinksContainerStyles = `left:0px`;
    // moreLinksContainer.setAttribute('style', moreLinksContainerStyles)
    moreLinksBtn.addEventListener('click', () => {
        if (window.innerWidth > 900) {

            if (moreLinksContainer.classList.contains('showed')) {
                moreLinksContainer.setAttribute('style', `transform: translateY(-350px);`);
                moreLinksBtnChivron.setAttribute('style', 'transform: rotate(0deg);');

                moreLinksContainer.classList.remove('showed');
            } else {

                moreLinksContainer.setAttribute('style', `transform: translateY(0px);`);
                moreLinksBtnChivron.setAttribute('style', 'transform: rotate(-180deg);');

                moreLinksContainer.classList.add('showed');
            }
        } else {
            moreLinksContainer.setAttribute('style', `display:flex;`);
        }
    })

    showMenuBtn.addEventListener('click', () => {
        if (nav.classList.contains('showed')) {
            nav.setAttribute('style', 'opacity:0;');
            moreLinksContainer.setAttribute('style', `display:none;`);


            nav.classList.remove('showed');
        } else {
            nav.setAttribute('style', 'opacity:1;');

            nav.classList.add('showed');
        }
    })
})();


function scrollToTop() {
    console.log('Called');

    document.querySelector('header').scrollIntoViewIfNeeded({ behavior: 'smooth' });
}