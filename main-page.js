document.getElementsByClassName('pot')[0].addEventListener('click', () => {
    growFlower();
});

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
