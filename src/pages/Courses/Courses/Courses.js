import React from "react";
import { Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../../Shared/CourseCard/CourseCard";

const Courses = () => {
    const courses = useLoaderData();
    return (
        <Row xs={1} md={2} lg={3} className="g-4 mt-5">
            {courses.map((course) => (
                <CourseCard key={course.id} course={course}></CourseCard>
            ))}
        </Row>
    );
};

export default Courses;
