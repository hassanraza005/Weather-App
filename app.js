

const input = document.querySelector('input');
const form = document.querySelector('form');

const div = document.querySelector('.form-cards')

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    axios(`https://api.weatherapi.com/v1/current.json?key=b90421cd7596432bbb2144327241406&q=${input.value}&aqi=no`)
   .then((res)=>{
    console.log(res.data)
    const weatherCard = `
        <div class="card text-center form-cards-js text-dark mt-4" style="width: 50rem;">
            <div class="card-body">
              <h5 class="card-title">${res.data.location.name}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">${res.data.location.localtime} , ${res.data.location.country} , ${res.data.location.region}</h6>
              <h3 class="card-title mt-3">${res.data.current.condition.text}</h3>
              <img width="160px" src=${res.data.current.condition.icon} alt='weatherImg' />
              <h3 class="card-title text-white">${res.data.current.temp_c} <sup>o</sup>C</h3>
            </div>
          </div>
    `;
    div.innerHTML = weatherCard + div.innerHTML;
    input.value = '';
    })
   .catch((error)=>{
    console.log(error)
    })
})
