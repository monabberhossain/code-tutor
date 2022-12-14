import React, { createContext, useEffect, useState } from "react";

export const CourseContext = createContext();

const CourseProvider = ({ children }) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch(`https://code-tutor-server-steel.vercel.app/courses`)
            .then((res) => res.json())
            .then((data) => setCourses(data));
    }, []);    

    const courseInfo = {
        courses
    };
    return (
        <CourseContext.Provider value={courseInfo}>
            {children}
        </CourseContext.Provider>
    );
};

export default CourseProvider;