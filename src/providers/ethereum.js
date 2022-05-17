import api from "../services/index.js"

function getEthereum() {
  const ethereum = api
    .get("/coins/ethereum")
    .then((res) => res.data)
    .catch((error) => console.log(error))

  return ethereum
}
export default getEthereum
