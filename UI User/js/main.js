window.addEventListener("load", event => {

    var swiperWrapper = document.querySelector('.swiper-wrapper');

    /* The Team */
    var team = [{
        name: "Lesley Donna  Williams ",
        role: "Chief Executive Officer",
        desc: "Lesley believes that living your full potential is a basic human right and designs this opportunity through all her work. ",
         photo: "../../images/department/lasley.jpg",
        website: "https://rafaelalucas.com",
        email: "mailto:lesley@tshimologong.joburg",
     
        },
        {
            name: "Natalie Makgamathe ",
            role: "Member Experience Coordinator",
            desc: " ",
             photo: "../../images/department/natalie_makgamathe.png",
            website: "https://rafaelalucas.com",
            email: "mailto:natalie@tshimologong.joburg",
            linkedin: "https://www.linkedin.com/in/rafaelalucas/",
            dribbble: "https://dribbble.com/rafaelalucas",
        },
        {
            name: "Lance Stewart ",
            role: "Digital Skills Academy Manager",
            desc: " ",
             photo: "../../images/department/lance_stewart.png",
            website: "https://rafaelalucas.com",
            email: "mailto:thandeka@tshimologong.joburg",
            linkedin: "https://www.linkedin.com/in/rafaelalucas/",
            dribbble: "https://dribbble.com/rafaelalucas",
        },
        {
            name: "Kendal Makgamathe",
            role: "Marketing & Events Manager",
            desc: "Kendal Makgamathe is the Events and Marketing Manager at the Tshimologong Digital Innovation Precinct and entrepreneur at heart, he enjoys finding solutions to challenges and helping people feel special.",
            photo: "../../images/department/kendal_makgamathe.png",
            website: "https://rafaelalucas.com",
            email: "mailto:thandeka@tshimologong.joburg",
            linkedin: "https://www.linkedin.com/in/rafaelalucas/",
            dribbble: "https://dribbble.com/rafaelalucas",
        },
        {
            name: "Nompumelelo Shabangu ",
            role: "Member Growth Manager",
            desc: "",
             photo: "../../images/department/Nompumelelo-Shabangu.png",
            website: "https://rafaelalucas.com",
            email: "mailto:thandeka@tshimologong.joburg",
            linkedin: "https://www.linkedin.com/in/rafaelalucas/",
            dribbble: "https://dribbble.com/rafaelalucas",
        },
        {
            name: "Kholi Ndlovu",
            role: "Facilities Manager",
            desc: "",
            photo: "../../images/department/kholi_ndlovu.png",
            website: "https://rafaelalucas.com",
            email: "mailto:kholi@tshimologong.joburg",
            linkedin: "https://www.linkedin.com/in/rafaelalucas/",
            dribbble: "https://dribbble.com/rafaelalucas",
        },
        {
            name: "Portia Mokoetla",
            role: "Community Host",
            desc: "",
            photo: "../../images/department/portia_mokoetla.png",
            website: "https://rafaelalucas.com",
            email: "mailto:thandeka@tshimologong.joburg",
            linkedin: "https://www.linkedin.com/in/rafaelalucas/",
            dribbble: "https://dribbble.com/rafaelalucas",
        },
        {
            name: "Raj Rajakanthan",
            role: "Software Development Manager",
            desc: "",
            photo: "../../images/department/raj_rajakanthan.png",
            website: "https://rafaelalucas.com",
            email: "mailto:thandeka@tshimologong.joburg",
            linkedin: "https://www.linkedin.com/in/rafaelalucas/",
            dribbble: "https://dribbble.com/rafaelalucas",
        },
        {
            name: "Thandeka Gumede",
            role: "Incubation Coordinator",
            desc: "",
            photo: "../../images/department/thandeka_gumede.png",
            website: "https://rafaelalucas.com",
            email: "mailto:thandeka@tshimologong.joburg",
            linkedin: "https://www.linkedin.com/in/rafaelalucas/",
            dribbble: "https://dribbble.com/rafaelalucas",
        },
    ];

    /* Social Icons */
    var icons = [{
        iWebsite: "../../assets/link.svg",
        iEmail: "../../assets/email.svg",
        iLinkedin: "../../assets/linkedin.svg",
        iDribbble: "../../assets/dribbble.svg",
    }];

    var iWebsite = icons[0].iWebsite,
        iEmail = icons[0].iEmail,
        iLinkedin = icons[0].iLinkedin,
        iDribbble = icons[0].iDribbble;


    /* Function to populate the team members */
    function addTeam() {
        for (let i = 0; i < team.length; i++) {

            /* Variables for the team */
            var name = team[i].name,
                role = team[i].role,
                desc = team[i].desc,
                photo = team[i].photo,
                website = team[i].website,
                email = team[i].email,
                linkedin = team[i].linkedin,
                dribbble = team[i].dribbble;

            /* Template for the Team Cards */
            var template = `
                <div class="swiper-slide">
                <div class="card">
                    <span class="bg"></span>
                    <span class="more"></span>
                    <figure class="photo"><img src="${photo}"></figure>
                        <article class="text">
                            <p class="name">${name}</p>
                            <p class="role">${role}</p> 
                            <p class="desc">${desc}</p> 
                        </article>
                        
                        <div class="social">
                        <span class="pointer"></span>
                        <div class="icons">
                            
                            <a class="icon" href="${email}" target="_blank"  rel="noopener" data-index="1"><img src="${iEmail}"></a>
                            <a class="icon" href="${linkedin}" target="_blank"  rel="noopener" data-index="2"><img src="${iLinkedin}"></a>
                          
                            </div>
                            </div>
                    </div>
                </div>`;

            swiperWrapper.insertAdjacentHTML('beforeend', template);
        }
    };


    addTeam();



    /* Swiper Settings */

    var mySwiper = new Swiper(".swiper-container", {
        // Optional parameters
        direction: "horizontal",
        loop: true,
        centeredSlides: false,
        speed: 800,
        slidesPerView: 3,
        spaceBetween: 40,
        threshold: 5,


        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            1180: {
                slidesPerView: 2,
                spaceBetween: 40,
                centeredSlides: false,
            },
            799: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: true,
                loop: true,
            },
        }
    });

    /* Show More */

    var btnShow = document.querySelectorAll('.more');



    btnShow.forEach(function (el) {
        el.addEventListener('click', showMore);
    });

    function showMore(event) {
        var card = event.target.closest(".swiper-slide");

        if (card.classList.contains('show-more')) {
            card.classList.remove('show-more');
        } else {
            card.classList.add('show-more')
        }

    }


    /* Social Hover */
    var icon = document.querySelectorAll('.icon');

    icon.forEach(function (el) {
        el.addEventListener("mouseenter", followCursor);

    });


    function followCursor(event) {
        var pointer = event.currentTarget.closest(".swiper-slide").querySelector('.pointer'),
            index = event.currentTarget.dataset.index,
            sizeIcon = (60 * index) + 25;

        pointer.style.transform = `translateX(${sizeIcon}px)`;
    }


    /* end */
});