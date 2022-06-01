import { useState } from 'react';
import './App.scss';
import nouns from './data/germanNouns.json';

function App() {
	const [article, setArticle] = useState('');
	return (
		<div className="App">
			<h1>German Article Practice</h1>
			<div className="buttons">
				<button onClick={() => setArticle('der')}>der</button>
				<button onClick={() => setArticle('die')}>die</button>
				<button onClick={() => setArticle('das')}>das</button>
				<button onClick={() => setArticle('')}>reset</button>
			</div>
			<div>{article}</div>
			<div className="nouns">
				{nouns.map((noun, index) => {
					return <div className="noun">{noun.article} {noun.singular}</div>;
				})}
			</div>
		</div>
	);
}

export default App;
