import { Fragment } from "react";

function Content(name,city,position) {
    return (

        <Fragment>
            <img src="https://staticg.sportskeeda.com/editor/2023/12/8d5c2-17017220521069-1920.jpg?w=840" alt="img" />
            <div>
                <h3>{name}</h3>
                <p>
<span>{city}</span>
                
<span>{position}</span>
                </p>
            </div>
        </Fragment>
    );

}

export default Content;