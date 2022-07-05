const init = () => 
{
    // Add event listeners to capture form data
    const inputForm = document.querySelector('form')

    inputForm.addEventListener('submit', (event) => 
    {
        // override form's default behavior
        event.preventDefault();
        //get the data user input onto form
        const input = document.querySelector('input#searchByID');

         // Fetch data
        fetch(`http://localhost:3000/movies/${input.value}`)

        //make data readable (.json file)
        .then(response => response.json())

        //display the data on page
        .then(data => 
        {
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');

            title.innerText = data.title;
            summary.innerText = data.summary;
        });
    });
   
}     

document.addEventListener('DOMContentLoaded', init);