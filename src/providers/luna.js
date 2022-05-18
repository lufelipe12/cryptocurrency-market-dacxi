import api from "../services/index.js"

function getTerraLuna() {
  const terraLuna = api
    .get("/coins/terra-luna")
    .then((res) => res.data)
    .catch((error) => console.log(error))

  return terraLuna
}
export default getTerraLuna
