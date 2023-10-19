import React, { useState } from 'react'

const Faq = props => {
	const [refresh, setRefresh] = useState(false)

	const showAnswer = id => {
		const show = props.ask.find(item => item.id === id)
		// console.log(show)
		show.showqueston = !show.showqueston
		// console.log(show.showqueston)
		setRefresh(!refresh)
	}

	const question = props.ask.map(ask => {
		return (
			<div key={ask.id} className='queston' onClick={() => showAnswer(ask.id)}>
				<div className='one'>
					<h3>{ask.queston}</h3>
					<button>+</button>
				</div>
				{/* <p className={!ask.showqueston ? 'unvisible' : 'visible'}>{ask.answer}</p> */}
				{ask.showqueston && <p>{ask.answer}</p>}
			</div>
		)
	})

	return <div className='box'>{question}</div>
}

export default Faq
