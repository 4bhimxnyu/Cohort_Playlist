async function validatePeople(){
    const response = await fetch("https://fakerapi.it/api/v1/persons");
    const data = await response.json();
    document.getElementById("people").innerHTML = `
        <h2>People Data</h2>
        <ul>
            ${data.data.map(person => `<li>${person.firstname} ${person.lastname} - Email: ${person.email}</li>`).join('')}
        </ul>
    `;
    // Display the data in the console for debugging
    console.log(data);
}