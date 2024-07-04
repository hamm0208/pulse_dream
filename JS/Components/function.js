//Scroll to feature part in index.html
function scrollToFeatures() {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
}

//Show sidebar when it reaches a certain breakpoint
function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "block";
}

//Hide sidebar when it reaches a certain breakpoint
function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}

//Products flip card
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('info-button').addEventListener('click', function() {
      document.querySelector('.car-card').classList.toggle('flipped');
    });
  });

document.addEventListener('click', function(event) {
    const clickedElement = event.target;
    
    if (clickedElement.classList.contains('info-button')) {
        clickedElement.closest('.car-card').classList.toggle('flip-card');
    }

    if (clickedElement.classList.contains('close-button')) {
        clickedElement.closest('.car-card').classList.remove('flip-card');
    }
});