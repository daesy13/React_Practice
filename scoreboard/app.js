const Header = (props) => {
    return (
        <header>
            <h1>{ props.title }</h1>
            <span className="stats">Players: { props.totalPlayers }</span>
        </header>
    );
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>✖</button>
                {props.name}
            </span>
            <Counter />
        </div>
    );
}

// *** IN ORDER TO USE AN STATE WE NEED TO CONVERT OUR COMPONENT INTO A CLASS ***

class Counter extends React.Component {
    state = {
        score: 0
    };

    incrementScore= () => {
        // setState will update the value and tell react to render the method
        this.setState( prevState => ({
            score: this.state.score + 1
        }));
    }

    decrementScore = () => {
        this.setState( prevState => ({
            score: this.state.score - 1
        }));
    }

    render() {
        return (
            <div className="counter">
            {/* YOU CAN USE AN ARROW FUNCTION OR BIND FOR INCREMENT OR DECREMENT*/}
                <button className="counter-action decrement" onClick={ this.decrementScore }> - </button>
                <span className="counter-score">{ this.state.score }</span>
                <button className="counter-action increment" onClick={ this.incrementScore }> + </button>
            </div>
        );
    }
}


// THIS IS A COMPONENT
// *** IN ORDER TO USE AN STATE WE NEED TO CONVERT OUR COMPONENT INTO A CLASS ***

class App extends React.Component {
    state = {
        players: [
            {
                name: "Daesy",
                id: 1
            },
            {
                name: "Sue",
                id: 2
            },
            {
                name: "Ann",
                id: 3
            },
            {
                name: "Tina",
                id: 4
            }
        ]
    }

    handleRemovePlayer = (id) => {
        this.setState ( prevState => {
            return {    
                // return all players whos id doesn't match the one clicked
                players: this.state.players.filter( p => p.id !== id )
            }
        });
    }

    render(){
        return (
            <div className="scoreboard">
                <Header
                title="Scoreboard"
                totalPlayers={this.state.players.length}
                />

                {/* Players list */}
                {this.state.players.map( player =>
                    <Player
                        name={player.name}
                        id={player.id}
                        key={player.id.toString()}
                        removePlayer={this.handleRemovePlayer}
                    />
                )}
            </div>
        );
    }
}


ReactDOM.render(
    // the closing tag close that way when it doesn't have children & req the extra space
    <App />,
    document.getElementById('root')
);
