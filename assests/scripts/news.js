(() => {
    const mainContainer = document.querySelector('.goToShow');
    const btnShowgtp = document.querySelector('#showgtp');
    const btnShowgtpIcon = document.querySelector("#gtpIcon");
    const gtContainer = document.querySelector('.gtContainer');
    const monthSelector = document.querySelector('select#month');
    const daySelector = document.querySelector('select#day');
    const submitBtn = document.querySelector('#submit-btn');

    let date = new Date();
    let day = date.getDate();

    console.log(day);


    for (let i = 3; i < day; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.innerText = i;
        console.log(option);

        daySelector.appendChild(option);
    }

    btnShowgtp.addEventListener('click', () => {
        if (gtContainer.classList.contains('hidden')) {
            mainContainer.setAttribute('style', 'margin-bottom:0');
            gtContainer.classList.remove('hidden');
            gtContainer.classList.add('showed');

            btnShowgtpIcon.classList.remove('fa-chevron-down');
            btnShowgtpIcon.classList.add('fa-chevron-up');

            btnShowgtp.classList.add('border-btm-radius-0');
        } else {
            mainContainer.setAttribute('style', 'margin-bottom:10px');
            gtContainer.classList.remove('showed');
            gtContainer.classList.add('hidden');

            btnShowgtpIcon.classList.remove('fa-chevron-up');
            btnShowgtpIcon.classList.add('fa-chevron-down');

            btnShowgtp.classList.remove('border-btm-radius-0');
        }
    })

    submitBtn.addEventListener('click', () => {
        window.open(`/crypto/news/2024-10-${daySelector.value < 10 ? '0' + daySelector.value : daySelector.value}`, '_self');
    })
})()