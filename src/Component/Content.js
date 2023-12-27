import { Fragment } from "react";

function Content({name, city, salary}) {
    return (

        <div>
            <img src="https://staticg.sportskeeda.com/editor/2023/12/8d5c2-17017220521069-1920.jpg?w=840" alt="img" />
            <div className="info">
                <h3>{name}</h3>
                <p>
                    <span>{city}</span>
                    <span>{salary}</span>
                </p>
            </div>
        </div>
    );

}

export default Content;