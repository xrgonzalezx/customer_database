for(i = 0; i < customers.results.length; i++){
const custData = `
  <div>
    <img src=${customers.results[i].picture.large}>
    <h2 class="Names">  ${customers.results[i].name.first} ${customers.results[i].name.last}</h2>
    <a href="email">${customers.results[i].email}</a>

    <div class = "info">
      <div> ${customers.results[i].location.street}</div>
      <div>  ${customers.results[i].location.city}, ${customers.results[i].location.state} ${customers.results[i].location.postcode}</div>
      <div>  ${customers.results[i].phone}</div>
    </div>

    <div class="social"> ${customers.results[i].id.value}</div>
  </div>
  `;

 document.querySelector('.container').innerHTML += custData;
    console.log(customers.results[i]);
}

// customers.results.forEach(function(data){
//   console.log(data.name.first)
// })

// const template = `
//   <article>
//     <h2>${blogPost.title}</h2>
//     <div class="meta">
//       <span class="date">Written on ${blogPost.meta.date}</span>
//     </div>
//     <div class="post">
//       <img src="${blogPost.post.image}">
//       ${blogPost.post.content}
//     </div>
//     <div class="site">
//       Part of this content was pulled from <a href="${blogPost.site.url}">${blogPost.site.name}</a>
//     </div>
//   </article>
// `;
