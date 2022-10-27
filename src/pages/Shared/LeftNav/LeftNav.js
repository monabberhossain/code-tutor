import React, { useEffect, useState } from "react";

const LeftNav = () => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/courses`)
            .then((res) => res.json())
            .then((data) => setData(data));
        console.log(data);
    }, []);

    return (
        <div>
            <h3>Right Navigation</h3>
        </div>
    );
};

export default LeftNav;
