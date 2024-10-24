async function fetchAllProjects() {
    try {
        const projectsResponse = await fetch(`${domain}/api/project/all`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (projectsResponse.ok) {
            let projectsData = await projectsResponse.json();
            let tableBody = document.querySelector('tbody');
            for (let project of projectsData.result) {
                let row = document.createElement('tr');
                row.id = `r-${project.id}`
                let technologies = project.technologies? project.technologies.split(','): "";
                let techSpans = [];
                for(let j = 0 ; j < technologies.length; j++){
                    techSpans.push(`<span class="tag">${technologies[j]}</span>`);
                }
                var date = new Date(project.endDate);
                let imageSrc = project.image? `${domain}/${project.image}` : "";
                row.innerHTML = `
                        <td class="project-img-cell">
                            <img src="${imageSrc}" alt="">
                        </td>
                        <td class="year">${date.getFullYear()}</td>
                        <td class="title">
                            <a href="${project.url}">
                                ${project.name}
                            </a>
                        </td>
                        <td class="tag-container-cell">                                    
                            <div class="tag-container">
                                ${techSpans.join('')}
                            </div>  
                        </td>
                        <td class="btn-actions">
                            <a target="_self" href="action.html?projectId=${project.id}"><button class="btn-edit">Edit</button></a>
                            <button class="btn-delete">Delete</button>
                        </td>
                `;
                tableBody.appendChild(row);

                let editBtn = row.getElementsByClassName("btn-edit")[0];
                editBtn.addEventListener('click',  function() {
                    localStorage.setItem(project.id, JSON.stringify(project));
                });
                let deleteBtn = row.getElementsByClassName("btn-delete")[0];

                deleteBtn.addEventListener('click', async function() {
                    if(confirm('Are you sure you want to delete this project?')) {
                        try {
                            let deleteResponse = await fetch(`${domain}/api/project/${project.id}`, {
                                method: 'DELETE',
                                headers: {
                                    'Authorization': `Bearer ${localStorage.accessToken}`,
                                }
                            });
                            if (deleteResponse.status>=200 && deleteResponse.status<300) {
                                console.log('Project deleted successfully.');
                                row.remove();
                            } else {
                                console.error('Failed to delete project.', deleteResponse);
                            }
                        } catch (error) {
                            console.error('An error occurred:', error);
                        }
                    }
                });
            }

            // Call the function to handle visibility and interactions after data is fetched
            setupUI();
        } else {
            console.error('Fetching projects failed.', projectsResponse.status);
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

async function setupUI() {
    let addButton = document.getElementsByClassName("btn-add")[0];
    let actionsHead = document.getElementsByClassName("actions-head")[0];
    let actionsButtons = document.getElementsByClassName("btn-actions");
    let imageHead = document.getElementsByClassName("project-img")[0];
    let projectImages = document.getElementsByClassName("project-img-cell");

    if (localStorage.accessToken){

        addButton.style.display = "block";
        actionsHead.style.display = "table-cell";
        for (let i = 0; i < actionsButtons.length; i++) {
            actionsButtons[i].style.display = "table-cell";
        }
        if(!window.matchMedia("(max-width: 768px)").matches){
            console.log("image cell here");
            imageHead.style.display = "table-cell";
            for (let i = 0; i < projectImages.length; i++) {
                projectImages[i].style.display = "table-cell";
            }
        }

    }
}

fetchAllProjects();
