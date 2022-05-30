const scrollElementsL = document.querySelectorAll(".animate_js_left");
const scrollElementsR = document.querySelectorAll(".animate_js_right");
const scrollElementsT = document.querySelectorAll(".animate_js_up");
const scrollElementsB = document.querySelectorAll(".animate_js_down");

if (document.querySelectorAll((".animate_js_left"))){
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;

        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const elementOutofView = (el) => {
        const elementTop = el.getBoundingClientRect().top;

        return (
            elementTop > (window.innerHeight || document.documentElement.clientHeight)
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add("animate__fadeInLeft", "position-def");
    };

    const hideScrollElement = (element) => {
        element.classList.remove("animate__fadeInLeft", "position-def");
    };


    const handleScrollAnimation = () => {
        scrollElementsL.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
            else if (elementOutofView(el)) {
                hideScrollElement(el)
            }
        })
    }
    window.addEventListener("scroll", () => {
        handleScrollAnimation();
    });

}

if (document.querySelectorAll((".animate_js_right"))){
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;

        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const elementOutofView = (el) => {
        const elementTop = el.getBoundingClientRect().top;

        return (
            elementTop > (window.innerHeight || document.documentElement.clientHeight)
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add("animate__fadeInRight", "position-def");
    };

    const hideScrollElement = (element) => {
        element.classList.remove("animate__fadeInRight", "position-def");
    };


    const handleScrollAnimation = () => {
        scrollElementsR.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
            else if (elementOutofView(el)) {
                hideScrollElement(el)
            }
        })
    }
    window.addEventListener("scroll", () => {
        handleScrollAnimation();
    });

}

if (document.querySelectorAll((".animate_js_up"))){
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;

        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const elementOutofView = (el) => {
        const elementTop = el.getBoundingClientRect().top;

        return (
            elementTop > (window.innerHeight || document.documentElement.clientHeight)
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add("animate__fadeInUp", "position-def");
    };

    const hideScrollElement = (element) => {
        element.classList.remove("animate__fadeInUp", "position-def");
    };


    const handleScrollAnimation = () => {
        scrollElementsT.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
            else if (elementOutofView(el)) {
                hideScrollElement(el)
            }
        })
    }
    window.addEventListener("scroll", () => {
        handleScrollAnimation();
    });

}

if (document.querySelectorAll((".animate_js_down"))){
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;

        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const elementOutofView = (el) => {
        const elementTop = el.getBoundingClientRect().top;

        return (
            elementTop > (window.innerHeight || document.documentElement.clientHeight)
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add("animate__fadeInDown", "position-def");
    };

    const hideScrollElement = (element) => {
        element.classList.remove("animate__fadeInDown", "position-def");
    };


    const handleScrollAnimation = () => {
        scrollElementsB.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
            else if (elementOutofView(el)) {
                hideScrollElement(el)
            }
        })
    }
    window.addEventListener("scroll", () => {
        handleScrollAnimation();
    });

}

