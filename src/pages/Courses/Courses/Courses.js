import React from "react";
import { Row } from "react-bootstrap";
import CourseCard from "../../Shared/CourseCard/CourseCard";

const CourseSummary = () => {
    return (
        <Row xs={1} md={2} lg={3} className="g-4 mt-5">
            <CourseCard></CourseCard>
            <CourseCard></CourseCard>
            <CourseCard></CourseCard>
            <CourseCard></CourseCard>
            <CourseCard></CourseCard>
            <CourseCard></CourseCard>
        </Row>
    );
};

export default CourseSummary;
