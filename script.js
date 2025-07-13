// ===================== Website loading =====================
window.addEventListener('load', () => {
  document.body.classList.add('visible');
});



// ===================== Line of each title =====================
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                }
            });
        },
        { threshold: 0.5 }
    );

    document.querySelectorAll('.title').forEach(el => {
        observer.observe(el);
    });
});



// ===================== Container JS =====================
document.addEventListener("DOMContentLoaded", function () {
  // Fade in body
  document.body.classList.add("visible");

  // IntersectionObserver for section titles
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.title').forEach(el => {
    observer.observe(el);
  });

  // Typing effect + paragraph fade-in + separator animation
  setTimeout(() => {
    const text = "Welcome, I am Zahra Qaisar!";
    const target = document.getElementById("typing-text");
    const introText = document.getElementById("intro-text");
    const line = document.querySelector(".container-separator");
    let index = 0;

    function type() {
      if (index < text.length) {
        target.textContent += text.charAt(index);
        index++;
        setTimeout(type, 80);
      } else {
        // After typing is done, fade in intro text
        introText.classList.add("visible");

        // Then animate the line after a delay
        setTimeout(() => {
          line.style.width = "50vw";
        }, 500); // adjust as needed
      }
    }

    type();
  }, 750); // Delay to simulate 30% load
});


// ===================== NavBar - Role =====================
// document.addEventListener("DOMContentLoaded", function () {
//   document.body.classList.add("visible");

//   // Slide in navbar-role
//   const navbarRole = document.querySelector(".navbar-role");
//   setTimeout(() => {
//     navbarRole.classList.add("visible");
//   }, 500); // adjust delay if needed
// });


// ===================== Resume =====================

document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("visible");
});

// ===================== NavBar - Role =====================
  const element = document.querySelector('.navbar-role');
const texts = ["Frontend Developer","Backend Developer","Full Stack Developer","Problem Solver","Coder","Builder","Creator"
];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = texts[textIndex];
    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    element.innerHTML = currentText.substring(0, charIndex) + '<span class="cursor">|</span>';

    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(type, 1500); // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(type, 500); // Pause before typing next word
    } else {
      setTimeout(type, isDeleting ? 50 : 100); // Typing/deleting speed
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    element.classList.add('visible'); // trigger CSS animation
    type();
  });
