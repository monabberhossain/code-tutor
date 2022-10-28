import React, { useEffect, useState } from "react";

const RightNav = () => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch(`https://code-tutor-server-steel.vercel.app/courses`)
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

export default RightNav;
