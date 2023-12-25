const address = 'Galle';

const myObj = {
    salary: 1000000000
}

function Main(props) {

    const name = 'Gathsara';

    const { salary } = myObj;

    return (
        <div>
            This is main component  {props.name}
            <ul>
                <li>react js</li>
                <li>angular js</li>
                <li>vue js</li>
                <li>next js</li>
                <li>{name}</li>
                <li>{address}</li>
                <li>{salary}</li>
            </ul>
            {props.children}
        </div>
    );
}

export default Main;