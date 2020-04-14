import React, { Component } from 'react';
import Folder from './Folder';

export class FolderList extends Component {
	render() {
		const { folders } = this.props.store;

		const folderList = Object.keys(folders).map((e, index) => {
			return <Folder store={folders[e]} key={index} folderId={folders[e].id} />;
		});

		return (
			<div className='folderList'>
				<h2>List of Folders</h2>
				{folderList}
				<button>Add Folder</button>
			</div>
		);
	}
}

export default FolderList;
