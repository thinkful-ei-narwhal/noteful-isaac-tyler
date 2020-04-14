import React, { Component } from 'react';
import Note from './Note';

export class NoteList extends Component {
	render() {
		const { notes } = this.props.store;
		const { props } = this.props;

		const noteList = Object.keys(notes).map((e, index) => {
			return <Note store={notes[e]} key={index} props={props} />;
		});

		return (
			<div className='noteList'>
				{noteList}
				<button>Add Note</button>
			</div>
		);
	}
}

export default NoteList;
