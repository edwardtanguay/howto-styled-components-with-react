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

const Noun = styled.div`
	background-color: ${(props) =>
		props.mode === 'selected' ? 'green' : '#444'};
	color: ${(props) =>
		props.mode === 'selected' ? 'white' : '#777'};
	padding: 5px;
`;

function App() {
	const [choice, setChoice] = useState('hide');
	return (
		<div className="App">
			<h1>German Article Practice</h1>
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
					onClick={() => setChoice('hide')}
					mode={choice === 'hide' ? 'selected' : 'unselected'}
				>
					hide
				</Button>
			</div>
			<div className="nouns">
				{nouns.map((noun, index) => {
					return (
						<Noun mode={choice === noun.article ? 'selected' : 'unselected'}>
							{choice === noun.article && <>{noun.article}</>}{' '}
							{noun.singular}
						</Noun>
					);
				})}
			</div>
		</div>
	);
}

export default App;
