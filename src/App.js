import React, { useState } from 'react'
import './App.css'

import Faq from './components/Faq'

const App = () => {
	const [ask, setAsk] = useState([
		{
			id: 0,
			queston: 'Co to jest komputer?',
			answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga libero soluta ipsa odit, dolore nam!',
			showqueston: false,
		},
		{
			id: 1,
			queston: 'Czym jest desktop?',
			answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga libero soluta ipsa odit, dolore nam!',
			showqueston: false,
		},
		{
			id: 2,
			queston: 'Jak wygląda klawiatura?',
			answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga libero soluta ipsa odit, dolore nam!',
			showqueston: false,
		},
		{
			id: 3,
			queston: 'Czym jest myszka?',
			answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga libero soluta ipsa odit, dolore nam!',
			showqueston: false,
		},
		{
			id: 4,
			queston: 'Czy potrzeba dużego serwera?',
			answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga libero soluta ipsa odit, dolore nam!',
			showqueston: false,
		},
	])

	return (
		<div className='App'>
			<h1 className='heading'>Accordion</h1>
			<Faq ask={ask} />
		</div>
	)
}

export default App
