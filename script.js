
const progTexts = document.querySelectorAll(".progText");
        const progresses = document.querySelectorAll(".progress");
        const circularBars = document.querySelector(".circular-bars");
        let animated = false;

        window.addEventListener("scroll", function() {
            if (!animated && isElementInViewport(circularBars)) {
                animated = true;
                for (let i = 0; i < progTexts.length; i++) {
                    animateProgress(progTexts[i], progresses[i]);
                }
            }
        });

        function animateProgress(progText, progress) {
            const target = parseInt(progText.dataset.count);
            let count = 0;

            function updateCount() {
                if (count < target) {
                    count++;
                    progText.innerText = count;
                    progress.style.height = count + "%";
                    progress.style.borderColor = getColor(count / 100); // Calculate color based on progress
                    setTimeout(updateCount, 20); // Adjust timing for smoother animation
                } else {
                    progText.innerText = target + "%";
                    progress.style.borderColor = getColor(target / 100); // Set final color
                }
            }

            updateCount();
        }

        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        function getColor(percentage) {
            const hue = percentage * 120; // Hue range from green to red
            return `hsl(${hue}, 100%, 50%)`; // Construct HSL color string
        }




       /* document.addEventListener("DOMContentLoaded", function() {
            const filterButtons = document.querySelectorAll(".works button");
            const filterableCards = document.querySelectorAll(".filterable_Cards .card");
        
            const filterCards = (category) => {
                filterableCards.forEach(card => {
                    const cardCategory = card.dataset.name;
                    const parentCol = card.closest('.col-sm-4');
                    
                    if (category === 'All' || category === cardCategory) {
                        parentCol.classList.remove("hide");
                    } else {
                        parentCol.classList.add("hide");
                    }
                });
            };
        
            filterButtons.forEach(button => {
                button.addEventListener("click", function() {
                    const category = this.dataset.name;
                    filterCards(category);
                    document.querySelector(".active").classList.remove("active");
                    this.classList.add("active");
                });
            });
        });*/



        document.addEventListener('DOMContentLoaded', function () {
            const buttons = document.querySelectorAll('.buttons button');
            const cards = document.querySelectorAll('.card');
    
            buttons.forEach(button => {
                button.addEventListener('click', function () {
                    const name = button.getAttribute('data-name');
                    cards.forEach(card => {
                        const cardName = card.getAttribute('data-name');
                        if (name === 'All' || name === cardName) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });
        });

// Get all buttons inside the "works" container
const buttons = document.querySelectorAll('.works button');

// Loop through each button and add a click event listener
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove 'active' class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));
        
        // Add 'active' class to the clicked button
        this.classList.add('active');
        
        // You can perform additional actions here based on the clicked button's data-name attribute
        const categoryName = this.getAttribute('data-name');
        console.log(`Clicked on category: ${categoryName}`);
        
        // Example: Filter content based on the clicked category
        // Implement your filtering logic here
    });
});
/*
ScrollReveal().reveal('.card', {
    delay: 200,
    distance: '50px',
    duration: 1000,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    origin: 'bottom',
    reset: true,
    interval: 200 // Delay between each card animation
});

*/






function handleScroll() {
    var aboutMeSection = document.getElementById('AboutMe');
    var skillsSection = document.getElementById('skills');
    var barsSection = document.querySelector('.bars');

    var aboutMeSectionTop = aboutMeSection.getBoundingClientRect().top;
    var skillsSectionTop = skillsSection.getBoundingClientRect().top;
    var barsSectionTop = barsSection.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    function addRevealClass(section) {
        setTimeout(function() {
            section.classList.add('reveal');
        }, 700); // 5000 milliseconds = 5 seconds
    }

    if (aboutMeSectionTop < windowHeight) {
        addRevealClass(aboutMeSection);
    }

    if (skillsSectionTop < windowHeight) {
        addRevealClass(skillsSection);
    }

    if (barsSectionTop < windowHeight) {
        addRevealClass(barsSection);
    }
}

// Initial check on page load
handleScroll();

// Event listener for scroll event
window.addEventListener('scroll', handleScroll);


 /*

@media only screen and (max-width:1024px){
    .nav{
      position:sticky;
      top: 0;
      left: 0;
      height:100vh;
      background-color: #111111;
      display: flex;
      flex-direction: column;
      text-align: center;
      width:100%;
    }
    .nav .profile{
      height:200px;
      width:150px;
      margin-top:40px;
      margin-left:10px;
    }
    .two{
      padding: 7%;
      margin-top: 50px;
  }
  .animi{
    justify-content: center;
    margin-left: 100px;
  }
  .rowabout{
    margin-top: 120px;
  }
  .rowabout .demo1{
    margin-top:45px;
    height:300px;
    width:100%;
    margin-left: -100px;
    border-radius: 20px;
    border:1px solid white;
  }
  .rowskills{
    margin-top: -50px;
    margin-left: 40px;
  }
  .rowskills .circular-bars{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
   
  }
  .bars .circular-bars{
    margin-top:-250px ;
    margin-bottom: -10px;
    margin-left: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
   
  }
  .circular-bars .progress-circle {
    position: relative;
    background: transparent;
    border: #1b1b1b 8px solid;
    width: 8em;
    height: 8em;
    border-radius: 100%;
    overflow: hidden;
    margin: 2em;
    justify-content: center;
  }
  .fil .works{
   margin-left: 150px;
  
  }
  .frm .inp{
    border: 1px solid #686363;
    background-color: black;
    color: white;
    width:150px;
    padding:2%;
    margin-top:20px;
    padding-right: 10px;
   
  }
  .frm .inp1{
    border: 1px solid #686363;
    background-color: black;
    color: white;
    width:150px;
    padding:2%;
    margin-top:20px;
    padding-right: 10px;
  }
  .frm .inp2{
    border: 1px solid #686363;
    background-color: black;
    color: white;
    width:150px;
    padding:2%;
    margin-top:20px;
    padding-right: 10px;
  }
  .frm .inp3{
    border: 1px solid #686363;
    background-color: black;
    color: white;
    width:150px;
    padding:2%;
    margin-top:20px;
    padding-right: 10px;
  }
  .frm .inp4{
    border: 1px solid #686363;
    color: white;
    background-color:black;
    margin-top:20px;
    height:150px;
    width:98%;
  }
  
  }
  @media only screen and (max-width:425px){
    .nav{
      position:sticky;
      top: 0;
      left: 0;
      height:100vh;
      background-color: #111111;
      display: flex;
      flex-direction: column;
      text-align: center;
      width:100%;
    }
    .nav .profile{
      height:200px;
      width:150px;
      margin-top:40px;
      margin-left:10px;
    }
    .two{
      padding: 7%;
      margin-top: 50px;
  }
  .animi{
    justify-content: center;
    margin-left: 100px;
  }
  .rowabout .demo1{
    margin-top:45px;
    height:300px;
    width:100%;
    margin-left: -100px;
    border-radius: 20px;
    border:1px solid white;
  }
  .rowskills .circular-bars{
   
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
   
  }
  .bars .circular-bars{
    margin-top:-250px ;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
   
  }
  .circular-bars .progress-circle {
    position: relative;
    background: transparent;
    border: #1b1b1b 8px solid;
    width: 8em;
    height: 8em;
    border-radius: 100%;
    overflow: hidden;
    margin: 2em;
    justify-content: center;
  }
  .fil .works{
   margin-left: 150px;
  
  }
  .frm .inp{
    border: 1px solid #686363;
    background-color: black;
    color: white;
    width:150px;
    padding:2%;
    margin-top:20px;
    padding-right: 10px;
   
  }
  .frm .inp1{
    border: 1px solid #686363;
    background-color: black;
    color: white;
    width:150px;
    padding:2%;
    margin-top:20px;
    padding-right: 10px;
  }
  .frm .inp2{
    border: 1px solid #686363;
    background-color: black;
    color: white;
    width:150px;
    padding:2%;
    margin-top:20px;
    padding-right: 10px;
  }
  .frm .inp3{
    border: 1px solid #686363;
    background-color: black;
    color: white;
    width:150px;
    padding:2%;
    margin-top:20px;
    padding-right: 10px;
  }
  .frm .inp4{
    border: 1px solid #686363;
    color: white;
    background-color:black;
    margin-top:20px;
    height:150px;
    width:98%;
  }
  
  }
  @media only screen and (max-width:425px){
  
  }
  */