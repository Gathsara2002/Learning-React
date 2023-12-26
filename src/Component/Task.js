function Task(props) {
    return (
        <div>
            <h3>This is for learn loop </h3>
            <ul>
                <li>{props.name}</li>
                <li>{props.city}</li>
                <li>{props.salary}</li>
            </ul>
        </div>
    );

}

export default Task;