function getMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber - 1);
  return date.toLocaleString("en-US", { month: "long" });
}

const response = fetch(
  "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json"
)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      document
        .getElementById(`img${i}`)
        .setAttribute("src", data[i].featured_media);
      document.getElementById(`title${i}`).innerHTML = data[i].title.rendered;
      document
        .getElementById(`author${i}`)
        .setAttribute("href", data[i]._embedded.author[0].url);
      document.getElementById(`author${i}`).innerHTML =
        data[i]._embedded.author[0].name;
      var date = new Date(data[i].date);
      var currentDate = date.toLocaleString("en-GB", {
        year: "numeric",
        day: "numeric",
        month: "long",
      });
      document.getElementById(`date${i}`).innerHTML = currentDate;
      var title = data[i]._embedded["wp:term"].find(item=>item[0].id===data[i].topic[0])
      console.log(title);
    }
  });
