const nextButton = document.querySelector('.next-btn');
const navItems = Array.from(document.querySelectorAll('.navbar a'));
const nav = document.querySelector('.nav-container');
const pageTitles = document.getElementsByClassName('page-title');
const jumboBubbles = document.getElementsByClassName('jumbo-bubble');
let pageNumber = 0;

// Code for growing the flower
const growFlower = () => {
    let stem = document.getElementsByClassName('stem')[0];
    window.setTimeout(() => {
        stem.style.height = '99.5%';
        window.setTimeout(displayFlower, 1800);
        window.setTimeout(displayLeaves, 1500);
    }, 1000);
            
    const displayLeaves = () => {
        const leaves = Array.from(document.getElementsByClassName('leaf'));
        if (window.innerWidth < 964) {
            leaves.forEach( (leaf, i) => {
                leaf.style.transform = 'scale(.8)';
                if (i % 2 === 0) {
                    leaf.style.left = '-29px';
                    leaf.style.bottom = '18px';
                } else {
                    leaf.style.left = '1px';
                    leaf.style.bottom = '38px';
                }
            });    
        } else {
            leaves.forEach( (leaf, i) => {
                leaf.style.transform = 'scale(1)';
                if (i % 2 === 0) {
                    leaf.style.left = '-32px';
                    leaf.style.bottom = '26px';
                } else {
                    leaf.style.left = '8px';
                    leaf.style.bottom = '52px';
                }
            });
        };
    };
    
    const displayFlower = () => {
        const droplets = Array.from(document.getElementsByClassName('petal'));
        
        droplets.forEach(droplet => {
            droplet.style.animationPlayState = 'running';
        });
    };
};

growFlower();

// Code for page changing
const changePage = (newPageNumber) => {
    if (newPageNumber >= pageTitles.length)
        newPageNumber = 0;

    // Set active nav-item    
    navItems[pageNumber].classList.remove('active');
    navItems[newPageNumber].classList.add('active');
    
    // Disable buttons during transition
    nextButton.disabled = true;
    navItems.forEach(item => {
        item.disabled = true;
    });

    let firstTransition = true;

    jumboBubbles[pageNumber].style.animation = 'bubble-shrink 1s ease-out forwards';
    pageTitles[pageNumber].style.transform = 'translateX(-2000px)';
    
    pageTitles[pageNumber].addEventListener('transitionend', () => {
        if (firstTransition) {
            firstTransition = false;
            pageTitles[pageNumber].style.transform = 'translateX(3000px)';
            pageTitles[pageNumber].style.visibility = 'hidden';
            pageNumber = newPageNumber;
            nextButton.disabled = false;
            navItems.forEach(item => {
                item.disabled = false;
            });
        };    
    }, { once: true });

    jumboBubbles[newPageNumber].style.visibility = 'visible';
    jumboBubbles[newPageNumber].style.transform = 'scale(.01)';
    jumboBubbles[newPageNumber].style.animation = 'bubble-grow .5s ease-out 1s forwards';
    pageTitles[newPageNumber].style.transform = 'translateX(0px)';
    pageTitles[newPageNumber].style.visibility = 'visible';
}


// Navbar motion
const slideNav = () => {
    nav.style.transform === 'translateX(-191px)' ? nav.style.transform = 'translateX(0)' : nav.style.transform = 'translateX(-191px)';
}

// Event Listeners
nextButton.addEventListener('click', () => {
    changePage(pageNumber+1);
});

document.querySelector('.pull-tab').addEventListener('click', slideNav); 

// add event listeners for nav items 
navItems.forEach((item, i) => {
   item.addEventListener('click', () => {
       let page = i;
        changePage(page);
        slideNav();
    });
});