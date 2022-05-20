# Cryptocurrency Dacxi Wallet

### In this project i used Vue3, Vite for development axios and animate.css as main tecnologies.

This is my first project in Vue3, a lot of work has been done. I appreciate the opportunity to learn new tecnologies everyday and that's kind of challenge to me. 

This app depends on https://www.coingecko.com/en/api/ to work so if it's down problably it won't work, please check api status on https://www.coingecko.com/en/api/documentation.

The code decisios was made to make easy to understand the files and to locate easily what something does and where the functionality is.
I use a lot of setInterval to control requisitions and responses. It's not the best solution but i tried to make a functionality work.

### ✅ Features

- Updated Bitcoin, Ethereum, Cosmos, terra-luna and Dacxi prices
- You can select date and time to show past prices.
- The price update without refreshing the page in 20 seconds depending on API.
- If the price goes down compared to the last displayed price it turns red for a second or turns green if it goes up.
- Use localStorage to store the past price to compare with updated price.

### Landing page:

<div align='center'>
<img src='https://user-images.githubusercontent.com/90461911/169515559-176f48f9-e228-43cf-a13b-1eab90767158.png'/>
</div>

### Selecting date and time: 

<div align='center'>
<img src='https://user-images.githubusercontent.com/90461911/169516890-cb85240f-48a2-46a1-9e5b-d084a0688759.png'/>
</div>

### When price is out of date after select a date and time:

<div align='center'>
<img src='https://user-images.githubusercontent.com/90461911/169517708-98792471-e509-4df9-9f9c-46ca8e913cf8.png'/>
</div>

### Vercel app: https://cryptocurrency-market-daxci-lufelipe12.vercel.app/

### Github Pages: 

This template should help get you started developing with Vue 3.

## After cloning the project:
## Project Setup

```sh
type on cli -->

npm install

or

yarn
```

### After all instalations finish, compile and hot-reload for Development

```sh
type on cli --> 

npm run dev

or 

yarn dev
```

### If you want to compile and minify for production

```sh
type on cli --> 

npm run build

or

yarn build
```
