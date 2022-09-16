const lists = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground')
const nav = document.querySelector('.top');


function mouseEnter() {
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.contains('trigger-enter') &&
        this.classList.add('trigger-enter-active'), 150);
  
        
    background.classList.add('open');
    
    const dropdown = this.querySelector('.dropdown');
    const dropdownCoordinates = dropdown.getBoundingClientRect();
    const navCoordinates = nav.getBoundingClientRect();
  
    const coordinates = {
      height: dropdownCoordinates.height,
      width: dropdownCoordinates.width,
      top: dropdownCoordinates.top - navCoordinates.top, // offset for non-anchored
      left: dropdownCoordinates.left - navCoordinates.left
    };
    
    background.style.setProperty('width', `${coordinates.width}px`);
    background.style.setProperty('height', `${coordinates.height}px`)
    background.style.setProperty('transform', `translate(${coordinates.left}px, ${coordinates.top}px`)
    
    // background.style.top = this.offsetTop + this.offsetHeight + 'px';
    // background.style.transform = `translateX(${dropdownCoordinates.left}px)`;
    // background.style.width = dropdownCoordinates.width + 'px';
    // background.style.height = dropdownCoordinates.height + 'px';
    
        
}

function mouseLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}

lists.forEach(list => list.addEventListener('mouseenter', mouseEnter));
lists.forEach(list => list.addEventListener('mouseleave', mouseLeave));

