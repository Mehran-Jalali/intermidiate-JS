const container = document.querySelector(`.container`);
const title = document.querySelector(`.title`);
const btn = document.getElementById(`btn`);

const url = "https://jsonplaceholder.typicode.com/posts";

// fetch(url)
//   .then((res) => {
//     res
//       .json()
//       .then((data) => {
//         for (let i = 0; i < 5; i++) {
//           console.log(data[i].title);
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const fetchPosts = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    //display to DOM
    const result = data.map((post) => {
      return `
        <div class="card">
          <div class="card-title">
          <h2>${post.title}</h2>
        </div>
            <div class="card-body">
                <p>${post.body}</p>
            </div>
        </div>
        `;
    });
    container.innerHTML = result.join("");
  } catch (error) {}
};
btn.addEventListener(`click`, () => {
  fetchPosts();
});
