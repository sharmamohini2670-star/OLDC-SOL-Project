// Mega Menu Functionality OF about Section
document.addEventListener('DOMContentLoaded', function() {
 
    const aboutLink = document.getElementById('about-link');
    const megaMenu = document.getElementById('mega-menu-box');

    if (aboutLink && megaMenu) {
        aboutLink.addEventListener('click', function(e) {
          console.log("About Link Clicked!");
            e.preventDefault();
            e.stopPropagation();
            megaMenu.classList.toggle('is-visible');
           
        });

        window.addEventListener('click', function(e) {
            if (!megaMenu.contains(e.target) && e.target !== aboutLink) {
                megaMenu.classList.remove('is-visible');
               
            }
        });
    } else {
        console.error("Breadcrumb elements not found on this page!");
    }
});


// Flashcard Carousel Functionality -  About us section
const cardData = [
  {
    title: "ET Lab",
    text: "Specifically designed for the production of video lectures and audiobooks. Equipped with the latest technology and software, our ET Lab aims to develop educational material in the form of content for massive open online courses (MOOCs), audiobooks, and web-based information."
  },
  {
    title: "PRAGYAN",
    text: "An advanced Learning Management System (LMS) that helps them to keep their track record and give their Internal Assessments online. All the information regarding any program is available for the students on this portal and they can easily register for the program they want to pursue."
  },
  {
    title: "COL Radio",
    text: "A platform which plays a crucial role in disseminating academic information and updates, hosting academic and non-academic podcasts, and actively interacting with students on various topics  and is managed by a dedicated team of experienced instructors, content creators, and technical staff who work together to create high-quality content"
  },
  {
    title: "CISBC",
    text: "OLDC has also established a Centre for Innovative Skill-Based Courses (CISBC) and introduced various skill-based courses to enhance the employability of the students and make them job-ready. Designed with a focus on sectors where human resources are needed, these courses provide specialized skills that are in demand across various industries."
  }
];

let currentIndex = 0;

const titleEl = document.getElementById('cardTitle');
const textEl = document.getElementById('cardText');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateCard(index) {
  // Update Content
  titleEl.textContent = cardData[index].title;
  textEl.textContent = cardData[index].text;

  // Visual feedback: Toggle 'active' class for arrows
  prevBtn.classList.toggle('active', index > 0);
  nextBtn.classList.toggle('active', index < cardData.length - 1);
}

nextBtn.addEventListener('click', () => {
  if (currentIndex < cardData.length - 1) {
    currentIndex++;
    updateCard(currentIndex);
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCard(currentIndex);
  }
});

/*
const searchData = [
    { name: "Home", category: "Webpage", url: "/index.html" },
    { name: "About OLDC", category: "Webpage", url: "/about.html" },
    { name: "Leadership & Governance", category: "Webpage", url: "/leadership.html" },
    { name: "Partnerships", category: "Webpage", url: "/partnerships.html" },
    { name: "Research & Innovation", category: "Webpage", url: "/research.html" },
    { name: "Campus Life", category: "Webpage", url: "/campus.html" },
    { name: "Facilities", category: "Webpage", url: "/facilities.html" },
    { name: "University of Delhi Portal", category: "Quick Link", url: "https://oldcdu.ac.in" },
    { name: "Press & Media Updates", category: "News", url: "/press.html" }
];

const searchWrapper = document.getElementById('searchWrapper');
const mainSearch = document.getElementById('mainSearch');
const resultsList = document.getElementById('searchResults');
let selectedIndex = -1;

function toggleSearch(event) {
    event.stopPropagation(); 
    
    const isActive = searchWrapper.classList.toggle('active');
    
    if (isActive) {
        mainSearch.focus(); 
    } else {
        closeSearch();
    }
}

mainSearch.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    selectedIndex = -1; 

    if (query === "") {
        resultsList.classList.remove('show');
        return;
    }

    const filtered = searchData.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.category.toLowerCase().includes(query)
    );
    
    renderResults(filtered);
});

function renderResults(data) {
    resultsList.innerHTML = "";
    if (data.length === 0) {
        resultsList.innerHTML = `<li class="result-item">No results match</li>`;
    } else {
        data.forEach((item) => {
            const li = document.createElement('li');
            li.className = 'result-item';
            li.innerHTML = `<span class="result-category">${item.category}</span>
                            <span class="result-name">${item.name}</span>`;
            li.onclick = () => window.location.href = item.url;
            resultsList.appendChild(li);
        });
    }
    resultsList.classList.add('show');
}

document.addEventListener('click', (e) => {
    if (!searchWrapper.contains(e.target)) {
        closeSearch();
    }
});

function closeSearch() {
    searchWrapper.classList.remove('active');
    resultsList.classList.remove('show');
    mainSearch.value = "";
}

*/
