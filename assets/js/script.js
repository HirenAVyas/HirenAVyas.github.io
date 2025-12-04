'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// project data
const projectData = {
  "sonetel-mobile": {
    title: "Sonetel",
    category: "Mobile App development",
    description: "The Sonetel app is a communication platform that provides businesses with virtual phone numbers and other communication tools to enable them to connect with customers, clients, and colleagues around the world. The app allows businesses to get virtual phone numbers in over 100 countries and use them to make and receive calls, send and receive SMS, and use other messaging platforms like WhatsApp and Facebook Messenger. It also includes features such as call forwarding, voicemail, call recording, and real-time call analytics.",
    technologies: ["React Native", "JavaScript", "Mobx", "WebRTC", "Firebase", "JIRA"],
    link: "https://play.google.com/store/apps/details?id=com.sonetel.sonetel2&pcampaignid=web_share"
  },
  "sonetel-web": {
    title: "Sonetel",
    category: "Web App development",
    description: "The Sonetel app is a communication platform that provides businesses with virtual phone numbers and other communication tools to enable them to connect with customers, clients, and colleagues around the world. The app allows businesses to get virtual phone numbers in over 100 countries and use them to make and receive calls, send and receive SMS, and use other messaging platforms like WhatsApp and Facebook Messenger. It also includes features such as call forwarding, voicemail, call recording, and real-time call analytics.",
    technologies: ["React JS", "JavaScript", "Mobx", "WebSocket"],
    link: "https://sonetel.com/en/"
  },
  "bimeco": {
    title: "BIMECO",
    category: "Web App Development",
    description: "BIMECO is a Building Information Modeling (BIM) viewer web application that allows users to visualize and interact with 3D building models. This project showcases advanced web development skills with complex 3D rendering and model interaction capabilities. Users can explore building models, view detailed specifications, and collaborate on construction projects through an intuitive web interface.",
    technologies: ["Next JS", "TypeScrit", "Three.js", "BIM Libraries", "AWS SDK", "AWS Amplify", "GQL", "TailwindCSS"],
    link: "https://viewer.staging.bim.com.sg/"
  },
  "bluebird": {
    title: "Bluebird",
    category: "Mobile Language App",
    description: "Bluebird is an innovative language learning mobile application designed to help users learn new languages through interactive lessons, pronunciation practice, and immersive learning experiences. The app features a user-friendly interface and comprehensive language courses. It includes features like speech recognition, progress tracking, gamified learning modules, and offline access to lessons.",
    technologies: ["React Native", "JavaScript", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=com.pronunciatorllc.bluebird&pcampaignid=web_share"
  },
  "hodl": {
    title: "Hodl",
    category: "Crypto Currency Mobile App",
    description: "Hodl is a cryptocurrency mobile application that allows users to track, manage, and trade various cryptocurrencies. Built with React Native, the app provides real-time price updates, portfolio management, and secure transaction capabilities with an intuitive user interface. The app includes features like price alerts, market analysis, wallet management, and secure authentication.",
    technologies: ["React Native", "JavaScript", "TypeScript", "Redux", "WebSocket", "Crypto APIs", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=net.hodltoken.hodlapp&pcampaignid=web_share"
  },
  "compose": {
    title: "Compose",
    category: "Content Writing Mobile App",
    description: "Compose is a content writing mobile application designed to help users create, edit, and manage their written content. The app features a clean writing interface, formatting tools, and cloud synchronization capabilities for seamless content creation on the go. It includes features like markdown support, document templates, collaboration tools, and export options for various formats.",
    technologies: ["React Native", "TypeScript", "Redux", "Markdown Parser"],
    link: "#"
  }
};

// portfolio project navigation
const projectLinks = document.querySelectorAll("[data-project-link]");
const projectDetailPage = document.querySelector("[data-page='project-detail']");
const portfolioPage = document.querySelector("[data-page='portfolio']");
const backBtn = document.querySelector("[data-back-btn]");

// project detail elements
const projectDetailTitle = document.querySelector("[data-project-detail-title]");
const projectDetailCategory = document.querySelector("[data-project-detail-category]");
const projectDetailDescription = document.querySelector("[data-project-detail-description]");
const projectDetailTechnology = document.querySelector("[data-project-detail-technology]");
const projectDetailLink = document.querySelector("[data-project-detail-link]");

// function to show project detail
const showProjectDetail = function (projectId) {
  const project = projectData[projectId];
  
  if (project) {
    projectDetailTitle.innerHTML = project.title;
    projectDetailCategory.innerHTML = project.category;
    projectDetailDescription.innerHTML = "<p style=\"color: var(--light-gray); font-size: var(--fs-6); font-weight: var(--fw-300); line-height: 1.6; margin-bottom: 15px;\">" + project.description + "</p>";
    projectDetailLink.href = project.link;
    
    // Display technologies
    if (project.technologies && project.technologies.length > 0) {
      projectDetailTechnology.innerHTML = "";
      project.technologies.forEach(tech => {
        const techItem = document.createElement("li");
        techItem.style.cssText = "background: var(--onyx); border: 1px solid var(--jet); border-radius: 8px; padding: 8px 16px; color: var(--light-gray); font-size: var(--fs-6);";
        techItem.textContent = tech;
        projectDetailTechnology.appendChild(techItem);
      });
    }
    
    // Hide link if it's just "#"
    if (project.link === "#") {
      projectDetailLink.style.display = "none";
    } else {
      projectDetailLink.style.display = "inline-flex";
    }
    
    // Hide all pages and show project detail
    pages.forEach(page => {
      page.classList.remove("active");
    });
    projectDetailPage.classList.add("active");
    
    // Update nav links
    navigationLinks.forEach(link => {
      link.classList.remove("active");
    });
    
    window.scrollTo(0, 0);
  }
};

// add click event to all project links
for (let i = 0; i < projectLinks.length; i++) {
  projectLinks[i].addEventListener("click", function (e) {
    e.preventDefault();
    const projectItem = this.closest("[data-project-id]");
    const projectId = projectItem.dataset.projectId;
    showProjectDetail(projectId);
  });
}

// back button functionality
backBtn.addEventListener("click", function () {
  // Hide project detail and show portfolio
  projectDetailPage.classList.remove("active");
  portfolioPage.classList.add("active");
  
  // Update nav links
  navigationLinks.forEach(link => {
    if (link.innerHTML.toLowerCase() === "portfolio") {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
  
  window.scrollTo(0, 0);
});



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");
const formMessage = document.querySelector("[data-form-message]");

// EmailJS configuration
// ============================================
// SETUP INSTRUCTIONS:
// 1. Sign up at https://www.emailjs.com/ (free account: 200 emails/month)
// 2. Create an Email Service (Gmail, Outlook, etc.) and copy the Service ID
// 3. Create an Email Template with variables: {{from_name}}, {{from_email}}, {{message}}
// 4. Get your Public Key from Account → General
// 5. Replace the values below with your actual credentials
// ============================================
const EMAILJS_SERVICE_ID = "service_ep8b8x9";
const EMAILJS_TEMPLATE_ID = "template_gg07nwa";
const EMAILJS_PUBLIC_KEY = "JU_UAdzD7dNOTFebV";

// Initialize EmailJS
(function() {
  emailjs.init(EMAILJS_PUBLIC_KEY);
})();

// Function to show message
const showFormMessage = function(message, isError = false) {
  formMessage.textContent = message;
  formMessage.style.display = "block";
  formMessage.style.background = isError ? "hsla(0, 43%, 51%, 0.1)" : "hsla(45, 100%, 72%, 0.1)";
  formMessage.style.border = `1px solid ${isError ? "var(--bittersweet-shimmer)" : "var(--orange-yellow-crayola)"}`;
  formMessage.style.color = isError ? "var(--bittersweet-shimmer)" : "var(--orange-yellow-crayola)";
  
  // Hide message after 5 seconds
  setTimeout(() => {
    formMessage.style.display = "none";
  }, 5000);
};

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

    // Hide message when user starts typing
    if (formMessage.style.display === "block") {
      formMessage.style.display = "none";
    }

  });
}

// Handle form submission
form.addEventListener("submit", function(e) {
  e.preventDefault();

  // Check if EmailJS is configured
  if (EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" || 
      EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID" || 
      EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY") {
    showFormMessage("EmailJS is not configured. Please set up your EmailJS credentials in script.js", true);
    return;
  }

  // Disable submit button
  formBtn.setAttribute("disabled", "");
  formBtn.innerHTML = '<ion-icon name="hourglass-outline"></ion-icon><span>Sending...</span>';

  // Prepare template parameters
  const templateParams = {
    from_name: form.fullname.value,
    from_email: form.email.value,
    message: form.message.value,
    to_name: "Hiren A. Vyas"
  };

  // Send email using EmailJS
  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
    .then(function(response) {
      // Success
      showFormMessage("Message sent successfully! I'll get back to you soon.", false);
      form.reset();
      formBtn.setAttribute("disabled", "");
      formBtn.innerHTML = '<ion-icon name="paper-plane"></ion-icon><span>Send Message</span>';
    }, function(error) {
      // Error
      showFormMessage("Failed to send message. Please try again or contact me directly at vyas.hiren.57@gmail.com", true);
      formBtn.removeAttribute("disabled");
      formBtn.innerHTML = '<ion-icon name="paper-plane"></ion-icon><span>Send Message</span>';
      console.error("EmailJS Error:", error);
    });
});



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    // Hide project detail page if it's active
    if (projectDetailPage) {
      projectDetailPage.classList.remove("active");
    }

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}