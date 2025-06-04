const menuToggle = document.querySelector('.menu-toggle')
const menuOpen = document.querySelector('.menu-open')
const menuClose = document.querySelector('.menu-close')
const mobileMenu = document.querySelector('.mobile-menu')
const body = document.querySelector('.body')
const mobileNavbar = document.getElementById("mobileNavbar");


menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    if(mobileMenu.classList.contains('active')) {
        menuOpen.style.display = 'none';
        menuClose.style.display = 'block';
        
    } else {
        menuOpen.style.display = 'block';
        menuClose.style.display = 'none';
        
    }
})

/*function hideNavbar() {
    if (window.innerWidth <= 768) {
        mobileNavbar.style.display = "block";
    }
    else {
        mobileNavbar.style.display = "none";
    }
}
hideNavbar()
window.addEventListener("resize", hideNavbar);  */

window.addEventListener('scroll', () => {
    let navbar = this.document.querySelector('.navbar');
        if(this.window.pageYOffset > 100) {
            navbar.classList.add('sticky');
        }
        else {
            navbar.classList.remove('sticky')
        }
    
})

// Tab switching logic
// Tab switching logic
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.tab-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active from all
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));

    // Add to current
    tab.classList.add('active');
    const target = document.getElementById(tab.dataset.tab);
    target.classList.add('active');
  });
});


/*
// Get DOM elements
const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.modal');
const modalImage = document.querySelector('#modal-image');
const modalTitle = document.querySelector('#modal-title');
const modalDescription = document.querySelector('#modal-description');
const closeModal = document.querySelector('.close');

// Add click event to each card
cards.forEach(card => {
    card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        const product = products[id];

        // Populate modal
        modalImage.src = product.image;
        modalTitle.textContent = product.title;
        modalDescription.textContent = product.description;

        // Show modal
        modal.style.display = 'flex';
    });
});

// Close modal on close button click
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal on outside click
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
}); */