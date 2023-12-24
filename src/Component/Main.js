const address='Galle';

function Main(props) {

    const name = 'Gathsara';

    return (
        <div>
            This is main component  {props.name}
            <ul>
                <li>react js</li>
                <li>angular js</li>
                <li>vue js</li>
                <li>{name}</li>
                <li>{address}</li>
            </ul>
            {props.children}
        </div>
    );
}

export default Main;