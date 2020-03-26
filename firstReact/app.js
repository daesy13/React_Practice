const desc = 'I just learned how to create a React node and render it into the DOM';
const myTitleId = 'main-title'
const name = 'Daesy'

const header = (
    <header>
        {/* jsx expression */}
        <h1 id={ myTitleId }>{ name }'s First React Element!</h1>
        <p className="main-desc">{ desc }</p>
        {/* now doing JavaScript */}
        <input value={10*20}/>
    </header>
);

ReactDOM.render(
    header,
    document.getElementById('root')
);
