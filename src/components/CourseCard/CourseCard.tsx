import s from './CourseCard.module.css'
import { course } from "@/types.ts";
import { memo } from "react";

type courseCard = {
    course: course
}

export const CourseCard: React.FC<courseCard> = memo(( { course } ) => {
    return <div className={ s.courseCard }>
        <div>
            <img
                src={ course.image }
                alt="Картинка курса"/>
        </div>
        <h1>{ course.name }</h1>
    </div>
})