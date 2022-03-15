export function render(data) {
  const container = document.querySelector(".item-container")

  const results = data.results

  results.forEach((item) => {
    const html = `
                 <article>
                   <h2>${item.titles[0]}</h2>
                   <p>${
                     item.summaries ? item.summaries[0] : "Geen samenvatting"
                   }</p>
                 </article>
               `
    container.insertAdjacentHTML("afterbegin", html)
  })
}
