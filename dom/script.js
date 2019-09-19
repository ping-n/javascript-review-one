document.body.style.fontFamily = "sans-serif"; 

const h1 = `
<h1 style="color: red";>Coder Academy</h1>
`
const p = `<p>We learn Ruby and JavaScript.</p>`
const img = `<img width="500" src="https://miro.medium.com/max/2400/1*LtKqBegNYF21mrEWXAvDUw.png">`

document.body.insertAdjacentHTML('beforeend', h1);
document.body.insertAdjacentHTML('beforeend', p);
document.body.insertAdjacentHTML('beforeend', img);