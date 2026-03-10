const userList = document.getElementById("userList");

async function fetchUsers() {
  try {

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    displayUsers(users);

  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

function displayUsers(users) {

  users.forEach(user => {

    const div = document.createElement("div");
    div.classList.add("user-card");

    div.innerHTML = `
      <h3>${user.name}</h3>
      <p><span>Email:</span> ${user.email}</p>
      <p><span>Phone:</span> ${user.phone}</p>
      <p><span>City:</span> ${user.address.city}</p>
      <p><span>Company:</span> ${user.company.name}</p>
    `;
    userList.appendChild(div);

  });

}

fetchUsers();