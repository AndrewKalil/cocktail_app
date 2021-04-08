import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'

// import components
import Navbar from './components/Navbar'

function App() {
	return (
		<Router>
			<Navbar/>
			<Switch>
				<Route exact path='/cocktail_app'>
					<Home/>
				</Route>
				<Route path='/cocktail_app/about'>
					<About/>
				</Route>
				<Route path='/cocktail_app/cocktail/:id'>
					<SingleCocktail/>
				</Route>
				<Route path='*'>
					<Error/>
				</Route>
			</Switch>
		</Router>
	)
}

export default App
