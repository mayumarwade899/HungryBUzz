import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);

    return (
        <div>
            <h1>Oopss....😬</h1><br></br>
            <h3 style={{color: "red"}}>Something went wrong!!!🤦‍♂️</h3><br></br>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    )
}

export default Error;