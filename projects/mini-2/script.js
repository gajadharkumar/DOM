const form = document.querySelector("form");
const inp1 = document.querySelector(".name");
const inp2 = document.querySelector(".email");
const btn = document.querySelector("button");
const card = document.querySelector(".card");


let users = [
    {
        image: "https://i.pravatar.cc/150?img=1",
        name: "Rahul Sharma",
        profession: "Web Developer",
        city: "Patna"
    },
    {
        image: "https://i.pravatar.cc/150?img=2",
        name: "Priya Singh",
        profession: "UI/UX Designer",
        city: "Delhi"
    },
    {
        image: "https://i.pravatar.cc/150?img=3",
        name: "Aman Kumar",
        profession: "Software Engineer",
        city: "Bangalore"
    },
    {
        image: "https://i.pravatar.cc/150?img=4",
        name: "Neha Verma",
        profession: "Data Analyst",
        city: "Mumbai"
    },
    {
        image: "https://i.pravatar.cc/150?img=5",
        name: "Rohit Singh",
        profession: "Android Developer",
        city: "Hyderabad"
    }
];



function showUsers() {

    card.innerHTML = "";

    users.forEach(function(user) {

        let UserCard = document.createElement("div");

        UserCard.innerHTML = `
            <img src="${user.image}" alt="Profile Image">

            <h2>${user.name}</h2>

            <p>${user.profession}</p>

            <p>${user.city}</p>
        `;

        card.append(UserCard);
    });
}


btn.addEventListener("click", (event) => {

    event.preventDefault();

    let name = inp1.value.trim();
    let email = inp2.value.trim();

    if (name === "" || email === "") {
        alert("Please enter name and email");
        return;
    }

   
    users.push({
        image: "https://i.pravatar.cc/150?img=12",
        name: name,
        profession: "New User",
        city: "Patna"
    });

    
    showUsers();

  
    inp1.value = "";
    inp2.value = "";
});



showUsers();