function getQueryParams() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
        projectId: urlParams.get('projectId')
    };
}
const { projectId } = getQueryParams();

let project = localStorage[projectId]? JSON.parse(localStorage[projectId]): null;
document.title = project ? "Edit" : "Add";


let container = document.getElementsByClassName('action-container')[0];
if (!localStorage.accessToken) {
    container.style.display = 'none';
}

let nameInput = document.getElementById('name');
let descriptionInput = document.getElementById('description');
let urlInput = document.getElementById('url');
let dateInput = document.getElementById('date');
let starInput = document.getElementById('star');
let techInput = document.getElementById('tech-input');
let techStackDiv = document.getElementsByClassName('tech-stack')[0];
let date; 
let techs = [];

if(project){
    date = new Date(project.endDate);
    nameInput.value = project.name? project.name: null;
    descriptionInput.value = project.description? project.description: null;
    urlInput.value = project.url? project.url: null;
    dateInput.value = date? date.toISOString().substring(0, 10): null;
    starInput.checked = project.star? project.star: null;
    techs = project.technologies? project.technologies.trim().split(','): null;
}

function createTechTag(tech) {
    const span = document.createElement('span');
    span.textContent = tech;
    span.classList.add('tech-tag');
    span.style.cursor = 'pointer';

    span.addEventListener('click', function () {
        techStackDiv.removeChild(span);
        techs = techs.filter(t => t !== tech);
        console.log(techs); 
    });

    techStackDiv.appendChild(span);
}

if(techs){
    for (let tech of techs) {
        createTechTag(tech);
    }
}

techInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && techInput.value.trim() !== '') {
        event.preventDefault();
        const tech = techInput.value.trim();
        createTechTag(tech);
        techs.push(tech); 
        techInput.value = '';
    }
});
if(project){
    localStorage.removeItem(project.id);
}

async function submitProject(method) {

    const formData = new FormData();

    const imageInput = document.getElementById('img');
    if (imageInput.files.length > 0) {
        formData.append('image', imageInput.files[0]);
    }

    const project = {
        id: projectId? projectId: 0,
        name: nameInput.value,
        description: descriptionInput.value,
        url: urlInput.value,
        endDate: dateInput.value,
        star: starInput.checked,
        technologies: techs? techs.join(','): "",
        userId: userId,
    };
    for (let key in project) {
        formData.append(key, project[key]);
    }

    try {
        const response = await fetch(`${domain}/api/project`, {
            method: method,
            body: formData,
            headers: {
                'Authorization': `Bearer ${localStorage.accessToken}`,
            }
        });

        if (response.status >= 200 && response.status < 300) {
            console.log('Project created successfully');
            window.open('../table/index.html', '_self');
        } else {
            console.error('Failed to create project', response);
        }
    } catch (error) {
        console.error('Error sending data:', error);
    }
}


document.getElementById('submit').addEventListener('click', function (e) {
    e.preventDefault();
    if(project){
        submitProject('PUT');
    }else{
        submitProject('POST');
    }
});
