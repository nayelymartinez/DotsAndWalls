var SetupScreen = React.createClass({
	handleClick: function() {
		var lorem_message = ["Test. Delete this eventually."];
	},

	render: function() {
		console.log("Hi");
		return (
			<div>
				<p> Enter a board size (>2):</p>
				<form>
					<input type='text' name='board_size' value="" />
					<br /><input type='submit' value='Submit' onClick={ this.handleClick } />
				</form>
			</div>
		);
	}
});

ReactDOM.render(
	<SetupScreen />, document.getElementById('root')
);