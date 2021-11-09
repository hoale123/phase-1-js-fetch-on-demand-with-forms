// target the DOM element we want;form

const init = () => {
    const inputForm = document.querySelector('form');

  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // console.log(event);
    //event.target is in the 
    // event.target => <form>..</form>
    // event.target.children[1] => second element
    // event.target.children[1].value => input value
    // event.target.children[1].value
    // get the query #searchById because were trying to make the submit button submit whats in the enter id here
    const input = document.querySelector('input#searchByID')

    // console.log(input.value);
                                            // We need to modify the URL we pass to our fetch function based on the input typed into the HTML form
    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(response => response.json())
    .then(data => {
        //replace Title and Summary with data we retrieved from our server.
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');
        // change the contents of title and summary element based on the data retrieved.
        title.innerText = data.title;
        summary.innerText = data.summary;

    //   console.log(data);
      // LOG: (3) [{…}, {…}, {…}]
    });  
  });
}

document.addEventListener('DOMContentLoaded', init)