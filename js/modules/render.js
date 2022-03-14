const container = document.querySelector(".item-container")

export function render(data) {
  const results = data.results

  results.forEach((item, i) => {
    const html = `
                <article>
                  <h2>${item.titles[0]}</h2>
                  <p>${
                    item.summaries ? item.summaries[0] : "Geen samenvatting"
                  }</p>
                  <img src="${
                    item.coverimages ? item.coverimages[1] : "Geen samenvatting"
                  }">
                </article>
              `
    container.insertAdjacentHTML("afterend", html)
  })
}
