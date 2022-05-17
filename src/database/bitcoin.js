import api from "../services/index.js"

function getBitcoin() {
  const bitcoin = api
    .get("/coins/bitcoin")
    .then((res) => res.data)
    .catch((error) => console.log(error))

  return bitcoin
}
export const bitcoinInfos = await getBitcoin()

const bitcoin = {
  name: bitcoinInfos.name,
  description: bitcoinInfos.description.en,
  price: bitcoinInfos.market_data.current_price.usd,
  marketCap: bitcoinInfos.market_data.market_cap.usd,
  image: bitcoinInfos.image.small,
}

export default bitcoin
