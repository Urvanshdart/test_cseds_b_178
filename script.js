document.querySelector('.b2').addEventListener('click', generateJoke);
document.querySelector('.b1').addEventListener('click', clearJoke);

async function generateJoke() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any');
        const data = await response.json();
        console.log(data);
        if(data.type=="single"){
            document.querySelector('.k').innerText = data.joke; 
        }
        
    } catch (error) {
        console.error('Error fetching joke:', error);
    }
}

function clearJoke() {
    document.getElementById('jokeDisplay').innerText = '';
}
