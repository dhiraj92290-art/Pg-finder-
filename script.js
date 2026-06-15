const pgs=[
{name:"Royal PG",rent:"7000"},
{name:"Comfort PG",rent:"8500"},
{name:"Star PG",rent:"9000"},
{name:"Green PG",rent:"7500"},
{name:"Delhi Stay PG",rent:"8000"},
{name:"Happy Home PG",rent:"6500"},
{name:"Metro PG",rent:"9500"},
{name:"Elite PG",rent:"10000"},
{name:"Student PG",rent:"7200"},
{name:"Budget PG",rent:"6000"}
];

const pgList=document.getElementById("pgList");

function displayPGs(items){
pgList.innerHTML="";
items.forEach(pg=>{
pgList.innerHTML+=`<div class="card"><h3>${pg.name}</h3><p>Rent: ₹${pg.rent}/month</p><a class="btn" href="https://wa.me/919229091276">WhatsApp</a></div>`;
});
}
displayPGs(pgs);

document.getElementById("searchInput").addEventListener("keyup",e=>{
const value=e.target.value.toLowerCase();
displayPGs(pgs.filter(pg=>pg.name.toLowerCase().includes(value)));
});