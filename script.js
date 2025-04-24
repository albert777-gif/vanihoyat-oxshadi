const hh = prompt("Ismingizni kiriting:");

const h1 = document.createElement('h1');
h1.textContent = `${hh}`;

h1.classList.add('text-black',  'text-[40px]', 'font-bold');


document.body.appendChild(h1);
