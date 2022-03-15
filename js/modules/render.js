export const render = (data, id) => {
  if (!id) {
    collection(data)
  } else {
    item(data, id)
  }
}

export function collection(data) {
  const container = document.querySelector(".item-container")
  container.innerHTML = ""

  const results = data.results

  results.forEach((item) => {
    const html = `
                 <article>
                 <a href="#boek/${item.id}">
                  <div>
                    <h2>${item.titles[0]}</h2>
                    <p><b>${item.authors[0]}</b></p>
                    <p>${
                      item.summaries
                        ? item.summaries[0].length > 150
                          ? item.summaries[0].substring(0, 150) + ".."
                          : item.summaries[0]
                        : "Geen samenvatting"
                    }</p>
                  </div>
                  <img width="50%" src="${item.coverimages[1]}"/>
                  </a>
                 </article>
               `
    container.insertAdjacentHTML("afterbegin", html)
  })
}

const item = (data, id) => {
  const result = data.results.filter((item) => item.id === id)

  const main = document.querySelector("main")
  main.innerHTML = ""

  console.log(result)

  const html = `
                 <div>
                    <h2>${result[0].titles[0]}</h2>
                 </div>
               `
  main.insertAdjacentHTML("afterbegin", html)
}
