export const getData = () => {
  const url =
    "https://zoeken.oba.nl/api/v1/search/?q=%22voeding%22&refine=true&authorization=16c19e6083308c984c452600134989ba&sort=act_dt_asc&output=json" //&branch=OBA%20geuzenveld'
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.results))
}
