const signInModal = document.getElementById("signInModal");
const signUpModal = document.getElementById("signUpModal");
const subletPostingModal = document.getElementById("subletPostingModal");
const blogModal = document.getElementById("blogModal");
const signInBtn = document.getElementById("signInBtn");
const signUpBtn = document.getElementById("signUpBtn");
const blogBtn = document.getElementById("blogBtn");
const closeButtons = document.querySelectorAll(".close-btn");

signInBtn.onclick = function () {
  signInModal.style.display = "flex";
};

signUpBtn.onclick = function () {
  signUpModal.style.display = "flex";
};

blogBtn.onclick = function () {
  blogModal.style.display = "flex";
};

closeButtons.forEach((btn) => {
  btn.onclick = function () {
    btn.parentElement.parentElement.style.display = "none";
  };
});

window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};
function togglePasswordVisibility() {
  const passwordInput = document.getElementById("password");
  const toggleBtn = document.querySelector(".toggle-password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleBtn.innerHTML = '<i class="fas fa-eye-slash"></i>';
  } else {
    passwordInput.type = "password";
    toggleBtn.innerHTML = '<i class="fas fa-eye"></i>';
  }
}

function toggleSignUpPasswordVisibility() {
  const passwordInput = document.getElementById("signup-password");
  const passwordIcon = passwordInput.nextElementSibling.querySelector("i");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordIcon.classList.remove("fa-eye");
    passwordIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    passwordIcon.classList.remove("fa-eye-slash");
    passwordIcon.classList.add("fa-eye");
  }
}

function validateUsername(input) {
  const regex = /[^a-zA-Z0-9]/g;
  input.value = input.value.replace(regex, "");
}

const universities = [
  { name: "Loyola University Chicago", image: "/img/01 university.jpg" },
  { name: "DePaul University", image: "/img/02 university.jpeg" },
  {
    name: "Illinois Institute of Technology",
    image: "/img/03 university.jpeg",
  },
  { name: "Columbia College Chicago", image: "/img/04 university.jpg" },
  { name: "Roosevelt University", image: "/img/05 university.jpg" },
  { name: "Saint Xavier University", image: "/img/06 university.jpg" },
];

function searchUniversities() {
  const university = document.getElementById("university").value;

  const filteredUniversities = universities.filter(
    (uni) => university === "Select University" || uni.name === university
  );

  const resultsContainer = document.getElementById("resultsContainer");
  const searchFilterText = document.getElementById("searchFilterText");
  resultsContainer.innerHTML = "";

  if (filteredUniversities.length > 0) {
    searchFilterText.style.display = "block";
    filteredUniversities.forEach((uni) => {
      const universityItem = document.createElement("div");
      universityItem.classList.add("col-lg-4");
      universityItem.innerHTML = `
        <div class="university-item">
          <img class="w-100" src="${uni.image}" alt="${uni.name}" />
          <p>${uni.name}</p>
        </div>
      `;
      resultsContainer.appendChild(universityItem);
    });
  } else {
    searchFilterText.style.display = "none";
    const noResultsMessage = document.createElement("p");
    noResultsMessage.textContent = "No results found.";
    resultsContainer.appendChild(noResultsMessage);
  }
}
document
  .getElementById("mobileMenuButton")
  .addEventListener("click", function () {
    this.classList.toggle("active");
    document.getElementById("mobileMenu").classList.toggle("active");
  });
document.addEventListener("DOMContentLoaded", function () {
  var desktopHeader = document.querySelector(".desktop-header");
  var mobileHeader = document.querySelector(".mobile-header");
  var mobileMenuButton = document.getElementById("mobileMenuButton");
  var mobileMenu = document.getElementById("mobileMenu");

  function toggleHeader() {
    if (window.innerWidth <= 1115) {
      desktopHeader.style.display = "none";
      mobileHeader.style.display = "block";
    } else {
      desktopHeader.style.display = "block";
      mobileHeader.style.display = "none";
      mobileMenu.classList.remove("active");
    }
  }

  toggleHeader();

  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });

  window.addEventListener("resize", function () {
    toggleHeader();
  });
});

function searchUniversities() {
  const state = document.getElementById("state").value;
  const city = document.getElementById("city").value;
  const area = document.getElementById("area").value;
  const university = document.getElementById("university").value;
  const distance = document.getElementById("distance").value;
  const startMonth = document.getElementById("startMonth").value;
  const duration = document.getElementById("duration").value;

  const filteredUniversities = universities.filter(
    (uni) => university === "Select University" || uni.name === university
  );

  const resultsContainer = document.getElementById("resultsContainer");
  resultsContainer.innerHTML = "";

  filteredUniversities.forEach((uni) => {
    const universityItem = document.createElement("div");
    universityItem.classList.add("col-lg-4");
    universityItem.innerHTML = `
          <div class="university-item">
            <img class="w-100" src="${uni.image}" alt="${uni.name}" />
            <p>${uni.name}</p>
          </div>
        `;
    resultsContainer.appendChild(universityItem);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll(".testimonial");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  let currentIndex = 0;
  const intervalTime = 2000; // 5 seconds

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.remove("active");
      if (i === index) {
        testimonial.classList.add("active");
      }
    });
  }

  function nextTestimonial() {
    currentIndex =
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    showTestimonial(currentIndex);
  }

  prevButton.addEventListener("click", () => {
    currentIndex =
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    showTestimonial(currentIndex);
  });

  nextButton.addEventListener("click", () => {
    nextTestimonial();
  });

  setInterval(nextTestimonial, intervalTime);

  showTestimonial(currentIndex);
});
function searchUniversities() {
  const state = document.getElementById("state").value;
  const city = document.getElementById("city").value;
  const area = document.getElementById("area").value;
  const university = document.getElementById("university").value;
  const startMonth = document.getElementById("startMonth").value;
  const duration = document.getElementById("duration").value;
  const distance = document.getElementById("distance").value;

  const searchCriteria = {
    state,
    city,
    area,
    university,
    startMonth,
    duration,
    distance,
  };

  localStorage.setItem("searchCriteria", JSON.stringify(searchCriteria));

  window.location.href = "search-results.html";
}

window.onload = function () {
  const searchCriteria = JSON.parse(localStorage.getItem("searchCriteria"));

  if (searchCriteria) {
    const criteriaDiv = document.getElementById("searchCriteria");

    const resultsList = document.getElementById("resultsList");
    const universities = [
      { name: "Loyola University Chicago", img: "/img/01 university.jpg" },
      { name: "DePaul University", img: "/img/02 university.jpeg" },
      {
        name: "Illinois Institute of Technology",
        img: "/img/03 university.jpeg",
      },
      { name: "Columbia College Chicago", img: "/img/04 university.jpg" },
      { name: "Roosevelt University", img: "/img/05 university.jpg" },
      { name: "Saint Xavier University", img: "/img/06 university.jpg" },
    ];

    const filteredUniversities = universities.filter(
      (university) => university.name === searchCriteria.university
    );

    filteredUniversities.forEach((university) => {
      const universityItem = document.createElement("div");
      universityItem.classList.add("university-item");
      universityItem.innerHTML = `
              <img src="${university.img}" alt="${university.name}" />
              <p>${university.name}</p>
          `;
      resultsList.appendChild(universityItem);
    });
  }
};
const totalPages = 8;
let currentPage = 1;

function updatePagination() {
  document.getElementById(
    "page-info"
  ).innerText = `Page ${currentPage} of ${totalPages}`;

  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  if (currentPage === 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }

  if (currentPage === totalPages) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

function changePage(direction) {
  if (direction === -1 && currentPage > 1) {
    currentPage--;
  } else if (direction === 1 && currentPage < totalPages) {
    currentPage++;
  }
  updatePagination();
}

document.addEventListener("DOMContentLoaded", () => {
  updatePagination();
});
document
  .getElementById("contact-button")
  .addEventListener("click", function () {
    document
      .querySelector(".contact-form")
      .scrollIntoView({ behavior: "smooth" });
  });
document.addEventListener("DOMContentLoaded", function () {
  var tabLinks = document.querySelectorAll(".tab-link");

  tabLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      tabLinks.forEach(function (tabLink) {
        tabLink.classList.remove("active");
      });

      this.classList.add("active");

      var tabId = this.getAttribute("data-tab");

      // Hide all tab contents
      var tabContents = document.querySelectorAll(".tab-content");
      tabContents.forEach(function (tabContent) {
        tabContent.classList.remove("active");
      });

      var activeTab = document.getElementById(tabId);
      activeTab.classList.add("active");
    });
  });
});
document.querySelectorAll(".tab-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    document
      .querySelectorAll(".tab-link")
      .forEach((item) => item.classList.remove("active"));
    document
      .querySelectorAll(".tab-content")
      .forEach((item) => item.classList.remove("active"));

    link.classList.add("active");
    document
      .getElementById(link.getAttribute("data-tab"))
      .classList.add("active");
  });
});
