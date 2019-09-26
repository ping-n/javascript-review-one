document.body.style.fontFamily = "sans-serif";

const h1 = `<h1 style="color: red;">Coder Academy</h1>`
const p = `<p>We learn Ruby and JavaScript</p>`
const img = `<img src="https://pbs.twimg.com/profile_images/872618954807590912/PUHHM6hV_400x400.jpg"></img>`

document.body.insertAdjacentHTML('beforeend', h1);
document.body.insertAdjacentHTML('beforeend', p);
document.body.insertAdjacentHTML('beforeend', img);