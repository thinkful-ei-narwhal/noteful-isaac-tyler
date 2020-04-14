import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Folder extends Component {
	render() {
		const { id, name } = this.props.store;
		return (
			<NavLink to={`/folders/${this.props.folderId}`}>
				<div key={id} id={id} className='folder'>
					<h3>{name}</h3>
				</div>
			</NavLink>
		);
	}
}

export default Folder;
