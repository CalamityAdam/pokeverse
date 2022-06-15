# Pokeverse

Pokemon Wiki

## Built With
- ⚛️  [React](https://reactjs.org/)
- 📦  [Parel](https://parceljs.org/)
- 🧪  [Jest](https://jestjs.io/)
- 🧪⚛️  [Testing Library / React](https://testing-library.com/docs/react-testing-library/setup)
- 🐱 [PokeApi](https://pokeapi.co/)

## Getting Started

- Fork this repo, clone to your desktop, and install dependencies:
  ```sh
  npm install
  ```
- Start the server, and navigate to `localhost:1234`
  ```sh
  npm run start
  ```
- Run the test suite
  ```sh
  npm run test
  ```
- Lint `.js` and `.jsx` files
  ```sh
  npm run lint
  ```

## Adding React Router Instructions

1. Install [react-router v6](https://reactrouter.com/docs/en/v6/getting-started/tutorial#installation)
    ```sh
    npm install react-router-dom@6
    ```
1. Create a new directory `src/routes/` and in it reate a file called `Home.js`
    ```sh
    mkdir src/routes/
    touch src/routes/Home.js
    ```
1. Move _almost everything_ out of `App.js` into `routes/Home.js` **EXCEPT**:
    1. the initial `useEffect` that fetches all of the pokemon
    1. the `pokemonList` state
    1. the container `div` and `<Navigation />`
1. `Home` should expect the `pokemonList` array as a prop - and will handle the searching and filtering of the `filteredPokemon` array. You can copy-and-paste almost everything out of App into Home, leaving just the fetch and original pokemonList array in App.
1. Create a new file `src/components/PokemonCard.js` that expects 2 props: `url` and `name`. This component will display all of the pokemon's stats! We'll come back to this component later!
1. In App set up a `BrowserRouter` that wraps everything that's left in the component.
1. Inside of the `<BrowserRouter>`, below `<Navigation />`, add a `<Routes>` component
1. Inside of `Routes`, add 2 routes:
    1. One with a path of `"/"` that renders the newly crated `Home` component and passes `pokemonList` to it
    1. The other with a path of `"/:name"` that renders the newly created `PokemonCard` component
       - notice the `:` before `name`, this is a special syntax for URL params, we'll be able to access the value of `name` later!
1. Inside of the `PokemonCard` component:
    1. add a new state of `pokemon` with initial value of `null`
    1. Import and call `useParams`. This is how we'll access that `name` param we added earlier!
        ```js
        const params = useParams();
        ```;
    1. Inside of a `useEffect`, fetch all of the details about this pokemon using the name from the params and then `setPokemon` with the fetched data. (remember to console.log your results if you're not sure what data is being returned!)
        ```
        https://pokeapi.co/api/v2/pokemon/${params.name}
        ```
    1. Since we'll be waiting for data to be fetched, we can conditionally render the page! To do this we can add 2 separate `return` statements. The first will be wrapped in an `if` statement:
        ```js
        if (!pokemon) {
          return <>loading...</>;
        }

        return (
          // ... the rest of the component here
        )
        ```
    1. Now let's add all of the stats about the pokemon like such:
        - `height: {pokemon.height}`
        - `weight: {pokemon.weight}`
        - abilities: iterate over `pokemon.abilities`, and for each `ability` render the `ability.ability.name`
        - types: iterate over `pokemon.types` and for each `type` render the `type.type.name`
        - stats: iterate over `pokemon.stats` and for each `stat` render the `stat.state.name` and `stat.base_stat`
1. Lastly, let's link to the newly created route and component! In `PokemonCard.js`, wrap the `{name}` of the Pokemon with a `<Link>` with a `to` value of `/${name}`
    ```jsx
    <Link to={`/${name}`}>
      {name}
    </Link>
    ```

### BONUS

- Make the Nav Link of `All Pokemon` render a `<Link>` to `"/"`
- Include a bigger, HD image on the PokemonDetails page. Try this out:
    ```jsx
    <img width="300" height="300" src={`https://img.pokemondb.net/artwork/large/${params.name}.jpg`} />
    ```
---

> Made with ♥️
