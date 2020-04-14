import React from 'react';
import store from './Store';
import { BrowserRouter, Route } from 'react-router-dom';

import FolderList from './components/FolderList';
import Header from './components/Header';
import NoteList from './components/NoteList';

import './App.css';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Header />
				<main className='main'>
					<FolderList store={store} />
					<Route
						path='/folders/:folderId'
						render={(props) => {
							return <NoteList store={store} props={props} />;
						}}
					/>
				</main>
			</BrowserRouter>
		</div>
	);
}

export default App;
