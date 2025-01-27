import "../modules/search.js"
import { searchError } from "./searchError.js"

export const render = (data, id) => {
  if (!window.location.hash) {
    collection(data)
  } else {
    item(data, id)
  }
}

const collection = (data) => {
  const container = document.querySelector(".item-container")
  container.innerHTML = ""

  const results = data.results.reverse()

  results.sort((a, b) => (a.year > b.year ? 1 : -1))

  searchError(data)

  results.map((item) => {
    const html = `
                 <article>
                  <a href="#boek/${item.id}">
                    <div>
                      <h2>${item.titles[0]}</h2>
                      ${
                        item.year
                          ? "<p>Jaar van uitgave: " +
                            item.year +
                            "</br></br></p>"
                          : ""
                      }
                      <p>${
                        item.summaries
                          ? item.summaries[0].length > 100
                            ? item.summaries[0].substring(0, 100) +
                              ".. <u>lees verder</u>"
                            : item.summaries[0]
                          : "Geen samenvatting"
                      }</p>
                    </div>
                    ${
                      item.coverimages
                        ? `<img width="50%" src="${item.coverimages[1]}"/>`
                        : ``
                    }
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

  const linkie = window.location.origin + window.location.pathname

  const html = `
                 <div class="single-container">
                    <img width="300vw" src="${result[0].coverimages[1]}"/>
                    <div>
                      <a href="${linkie}">Terug naar overzicht</a>
                      <h2>${result[0].titles[0]}</h2>
                      ${
                        result[0].authors[0]
                          ? `<p><b>${result[0].authors[0]}</b></p>`
                          : `<p>Geen schrijver gevonden</p>`
                      }
                      ${
                        result[0].year &&
                        `<p><b>Jaar van uitgave:</b> ${result[0].year}</p>`
                      }
                      ${
                        result[0].authors[0]
                          ? `<p><b>Taal: </b>${result[0].languages[0]}</p>`
                          : `<p>Geen schrijver gevonden</p>`
                      }
                      <p>${
                        result[0].summaries
                          ? result[0].summaries[0]
                          : "Geen samenvatting van het boek gevonden"
                      }</p>
                      ${
                        result[0].detailLink[0]
                          ? `<a href="${result[0].detailLink}" target="_blanc"><b>Bekijk hier de beschikbaarheid van het boek.</b></a>`
                          : ``
                      }
                    </div>
                 </div>
               `
  main.insertAdjacentHTML("afterbegin", html)
}
