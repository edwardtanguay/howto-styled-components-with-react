import './App.scss';
import nouns from './data/germanNouns.json';

function App() {
	return (
		<div className="App">
			<h1>German Article Practice</h1>
			<div className="buttons">
				<button>der</button>
				<button>die</button>
				<button>das</button>
			</div>
			<div className="nouns">
				{nouns.map((noun, index) => {
					return <div className="noun">{noun.article} {noun.singular}</div>;
				})}
			</div>
		</div>
	);
}

export default App;
