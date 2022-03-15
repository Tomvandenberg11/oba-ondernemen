export function render(data) {
  const container = document.querySelector(".item-container")

  const results = data.results

  results.forEach((item) => {
    console.log(item)

    const html = `
                 <article>
                  <div>
                    <h2>${item.titles[0]}</h2>
                    <p>${
                      item.summaries
                        ? item.summaries[0].length > 150
                          ? item.summaries[0].substring(0, 150) + ".."
                          : item.summaries[0]
                        : "Geen samenvatting"
                    }</p>
                  </div>
                  <img width="50%" src="${item.coverimages[1]}"/>
                 </article>
               `
    if (item.formats[0].text === "Boek") {
      container.insertAdjacentHTML("afterbegin", html)
    }
  })
}
