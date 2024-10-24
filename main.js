let container = document.getElementsByClassName("container")[0];

async function fetchUserDetails() {
    try {
        const userResponse = await fetch(`${domain}/api/user`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.accessToken}`
            }
        });

        if (userResponse.ok) {
            let userData = await userResponse.json();
            let myName = document.getElementsByClassName('my-name')[0];
            let myTitle = document.getElementsByClassName('my-title')[0];
            let myBrief = document.getElementsByClassName('my-brief')[0];
            let myAbout = document.getElementById("about");
            let myGithub = document.getElementById("github");
            let myLinkedin = document.getElementById("linkedin");
            let myLeetcode = document.getElementById("leetcode");
            let myEmail = document.getElementById("email");
            let myResume = document.getElementById("resume");
            
            myName.textContent = userData.result.userName;
            myTitle.textContent = userData.result.title;
            myBrief.textContent = userData.result.brief;

            const formattedText = userData.result.about.replace(/\n/g, '<br>');

            myAbout.innerHTML = formattedText;
            for(let i = 0; i < userData.result.connections.length; i++){
                if(userData.result.connections[i].name.toLowerCase() === 'github'){
                    myGithub.href = userData.result.connections[i].url;
                }
                else if(userData.result.connections[i].name.toLowerCase() === 'linkedin'){
                    myLinkedin.href = userData.result.connections[i].url;
                }
                else if(userData.result.connections[i].name.toLowerCase() === 'leetcode'){
                    myLeetcode.href = userData.result.connections[i].url;
                }
                else if(userData.result.connections[i].name.toLowerCase() === 'email'){
                    myEmail.href = userData.result.connections[i].url;
                }
                else if(userData.result.connections[i].name.toLowerCase() === 'resume'){
                    myResume.href = userData.result.connections[i].url;
                }
            }
        } else {
            console.error('Fetching user details failed.', userResponse.status);
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
    container.style.display = 'flex';
}

async function fetchStarredProjects() {
    try {
        const projectsResponse = await fetch(`${domain}/api/project/starred`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (projectsResponse.ok) {
            let projectsData = await projectsResponse.json();
            let projctsDiv = document.getElementById("projects");
            for (let i = 0; i < projectsData.result.length; i++) {
                let project = projectsData.result[i];
                let technologies = project.technologies.split(',');
                let techSpans = [];
                for(let j =0 ; j< technologies.length; j++){
                    techSpans.push(`<span class="tag">${technologies[j]}</span>`);
                }
                let projectElement = document.createElement('a');
                projectElement.target = `_blank`;
                projectElement.href = project.url;
                let imageSrc = project.image? `${domain}/${project.image}` : "";
                projectElement.innerHTML = `
                    <div class="full-project-container">
                        <div class="project-container">
                            <div class="project-content">
                                <img class="project-img" src="${imageSrc}" width="109" height="61" alt="">
                                <div class="project-details">
                                    <p class="project-title">${project.name}</p>
                                    <p class="project-desc">${project.description}</p>
                                    <div class="tag-container">
                                        ${techSpans.join('')}
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                projctsDiv.append(projectElement);
            }

        } else {
            console.error('Fetching projects failed.', projectsResponse.status);
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
    container.style.display = 'flex';
}
fetchUserDetails();
fetchStarredProjects();

for (let i = 0; i < document.links.length; i++) {
    if (document.links[i].href.includes('#')) {
        document.links[i].addEventListener('click', function(e) {
            e.preventDefault(); 
            const targetId = document.links[i].hash.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

let dashboardLink = document.getElementsByClassName('view-dashboard')[0];
if(localStorage.accessToken){
    dashboardLink.style.display = 'block';
}


let about = document.getElementsByClassName('about-nav')[0];
let aboutLink = document.getElementsByClassName('about-nav-link')[0];
let aboutNavDec = document.getElementsByClassName('about-nav-decorator')[0];
let project = document.getElementsByClassName('project-nav')[0];
let projectLink = document.getElementsByClassName('project-nav-link')[0];
let projectNavDec = document.getElementsByClassName('project-nav-decorator')[0];

let activeSection = null;

aboutLink.addEventListener('click', function() {
    activeSection = 'about';
    if (projectNavDec.style.width === '40px') {
        project.style.color = '#919194';
        projectNavDec.style.backgroundColor = '#919194';
        projectNavDec.style.width = '20px';
    }
    about.style.color = '#1E1E22';
    aboutNavDec.style.backgroundColor = '#1E1E22';
    aboutNavDec.style.width = '40px';
});

projectLink.addEventListener('click', function() {
    activeSection = 'project';
    if (aboutNavDec.style.width === '40px') {
        about.style.color = '#919194';
        aboutNavDec.style.backgroundColor = '#919194';
        aboutNavDec.style.width = '20px';
    }
    project.style.color = '#1E1E22';
    projectNavDec.style.backgroundColor = '#1E1E22';
    projectNavDec.style.width = '40px';
});

aboutLink.addEventListener('mouseover', function() {
    about.style.color = '#1E1E22';
    aboutNavDec.style.backgroundColor = '#1E1E22';
    aboutNavDec.style.width = '40px';
});

aboutLink.addEventListener('mouseout', function() {
    if (activeSection !== 'about') {
        about.style.color = '#919194';
        aboutNavDec.style.backgroundColor = '#919194';
        aboutNavDec.style.width = '20px';
    }
});

projectLink.addEventListener('mouseover', function() {
    project.style.color = '#1E1E22';
    projectNavDec.style.backgroundColor = '#1E1E22';
    projectNavDec.style.width = '40px';
});

projectLink.addEventListener('mouseout', function() {
    if (activeSection !== 'project') {
        project.style.color = '#919194';
        projectNavDec.style.backgroundColor = '#919194';
        projectNavDec.style.width = '20px';
    }
});