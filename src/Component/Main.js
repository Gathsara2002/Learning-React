function Main(props) {
    return (
        <div>
            This is main component  {props.name}
            <ul>
                <li>react js</li>
                <li>angular js</li>
                <li>vuej s</li>
            </ul>
            {props.children}
        </div>
        );
}

export default Main;