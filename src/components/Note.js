import React, { Component } from 'react';

export class Note extends Component {
	state = {
		show: false,
	};

	handleClick = () => {
		if (this.state.show) {
			this.setState({
				show: false,
			});
		} else {
			this.setState({
				show: true,
			});
		}
	};

	render() {
		const { id, modified, content, name, folderId } = this.props.store;

		if (folderId === this.props.props.match.params.folderId) {
			return (
				<div onClick={this.handleClick} key={id} id={id}>
					<h2>{name}</h2>
					<p>{modified}</p>
					<button>Delete</button>
					{this.state.show ? <p>{content}</p> : ''}
				</div>
			);
		}
		return <div></div>;
	}
}

export default Note;
