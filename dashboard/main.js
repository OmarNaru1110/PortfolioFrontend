let myName = document.getElementById('name');
let myTitle = document.getElementById('title');
let myBrief = document.getElementById('brief');
let myAbout = document.getElementById("about");
let myGithub = document.getElementById("github");
let myLinkedin = document.getElementById("linkedin");
let myLeetcode = document.getElementById("leetcode");
let myEmail = document.getElementById("email");
let myResume = document.getElementById("resume");
let viewsCount = document.getElementById("views-count");

async function fetchUserDetails() {
    let userData;
    try {
        const userResponse = await fetch(`${domain}/api/user`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.accessToken}`
            }
        });

        if (userResponse.ok) {
            userData = await userResponse.json();
            
            myName.value = userData.result.userName;
            myTitle.value = userData.result.title;
            myBrief.value = userData.result.brief;
            myAbout.value = userData.result.about;
            viewsCount.textContent= userData.result.viewsCount;
            for(let i = 0; i < userData.result.connections.length; i++){
                if(userData.result.connections[i].name.toLowerCase() === 'github'){
                    myGithub.value = userData.result.connections[i].url;
                }
                else if(userData.result.connections[i].name.toLowerCase() === 'linkedin'){
                    myLinkedin.value = userData.result.connections[i].url;
                }
                else if(userData.result.connections[i].name.toLowerCase() === 'leetcode'){
                    myLeetcode.value = userData.result.connections[i].url;
                }
                else if(userData.result.connections[i].name.toLowerCase() === 'email'){
                    myEmail.value = userData.result.connections[i].url;
                }
                else if(userData.result.connections[i].name.toLowerCase() === 'resume'){
                    myResume.value = userData.result.connections[i].url;
                }
            }
            var container = document.getElementsByClassName('container')[0];
            if(!localStorage.accessToken){
                container.style.display = 'none';
            }
            else{
                container.style.display = 'grid';
            }

        } else {
            console.error('Fetching user details failed.', userResponse.status);
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
    return userData.result;

}
let userPromise = fetchUserDetails();

let submit = document.getElementById('submit');
submit.addEventListener('click', async (e) => {
    e.preventDefault();

    const json = JSON.stringify({
        id: userId,
        userName: myName.value,
        title: myTitle.value,
        brief: myBrief.value,
        about: myAbout.value,
        connections: [
            {
                name: 'github',
                url: myGithub.value
            },
            {
                name: 'linkedin',
                url: myLinkedin.value
            },
            {
                name: 'leetcode',
                url: myLeetcode.value
            },
            {
                name: 'email',
                url: myEmail.value
            },
            {
                name: 'resume',
                url: myResume.value
            }
        ]
    });
    try{
        const response = await fetch(`${domain}/api/user/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: json,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.accessToken}`,
            }
        });
        if (response.ok) {
            console.log(response);
            window.open('../index.html', '_self');
        } else {
            console.log(response);
            console.error('update failed', response.status);
        }
    }
    catch (error) {
        console.error('An error occurred:', error);
    }
});