fetch('data/products.json')
.then(res=>res.json())
.then(products=>{
  const c=document.getElementById('circleProducts');
  const l=document.getElementById('productList');
  products.forEach(p=>{
    c.innerHTML+=`<div class="circle"><img src="${p.image}"><p>${p.name}</p></div>`;
    l.innerHTML+=`<div class="card"><img src="${p.image}"><h4>${p.name}</h4><p>${p.price}</p></div>`;
  });
});
