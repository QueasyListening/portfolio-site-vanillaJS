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
    
    const displayFlower = () => {
        const droplets = Array.from(document.getElementsByClassName('droplet'));
        
        droplets.forEach(droplet => {
            droplet.style.animationPlayState = 'running';
        });
    };
};

// Event Listeners
document.getElementsByClassName('pot')[0].addEventListener('click', () => {
    growFlower();
});

// Code for page-title carousel
const pageTitles = document.getElementsByClassName('page-title');
const jumboBubbles = document.getElementsByClassName('jumbo-bubble');
let pageNumber = 0;

const changePage = (newPageNumber) => {
    if (newPageNumber >= pageTitles.length)
            newPageNumber = 0;
        jumboBubbles[pageNumber].style.animation = 'bubble-shrink 1s ease-out forwards';
        pageTitles[pageNumber].style.transform = 'translateX(-2000px)';
        window.setTimeout(() => {
            pageTitles[pageNumber].style.transform = 'translateX(3000px)';
            pageTitles[pageNumber].style.visibility = 'hidden';
            pageNumber = newPageNumber;
        }, 1000);

        jumboBubbles[newPageNumber].style.visibility = 'visible';
        jumboBubbles[newPageNumber].style.transform = 'scale(.01)';
        jumboBubbles[newPageNumber].style.animation = 'bubble-grow .5s ease-out 1s forwards';
        pageTitles[newPageNumber].style.transform = 'translateX(0px)';
        pageTitles[newPageNumber].style.visibility = 'visible';
}

// Navbar motion
const nav = document.querySelector('.nav-container');
const slideOut = () => {
    nav.style.right === '0px' ? nav.style.right = '-190px' : nav.style.right = '0';
}

// Event Listeners
document.querySelector('.next-btn').addEventListener('click', () => {
    changePage(pageNumber+1);
});

document.querySelector('.pull-tab').addEventListener('click', slideOut); 
