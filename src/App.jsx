import { useState } from 'react';
import './App.scss';
import nouns from './data/germanNouns.json';
import styled from 'styled-components';
import * as qstr from './qstr';

qstr.randomize(nouns);
const Button = styled.button`
	background-color: ${(props) =>
		props.mode === 'selected' ? 'green' : '#eee'};
`;

function App() {
	const [choice, setChoice] = useState('hide');
	return (
		<div className="App">
			<h1>German choice Practice</h1>
			<div className="buttons">
				<Button
					onClick={() => setChoice('der')}
					mode={choice === 'der' ? 'selected' : 'unselected'}
				>
					der
				</Button>
				<Button
					onClick={() => setChoice('die')}
					mode={choice === 'die' ? 'selected' : 'unselected'}
				>
					die
				</Button>
				<Button
					onClick={() => setChoice('das')}
					mode={choice === 'das' ? 'selected' : 'unselected'}
				>
					das
				</Button>
				<Button
					onClick={() => setChoice('')}
					mode={choice === '' ? 'selected' : 'unselected'}
				>
					hide
				</Button>
			</div>
			<div className="nouns">
				{nouns.map((noun, index) => {
					return (
						<div className="noun">
							{choice === noun.article && <>{noun.article}</>}{' '}
							{noun.singular}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
