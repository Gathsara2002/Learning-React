function Main(props) {
    return (
        <div>
            This is main component  {props.name}
            <ul>
                <li>react js</li>
                <li>angular js</li>
                <li>vue js</li>
            </ul>
            {props.children}
        </div>
        );
}

export default Main;