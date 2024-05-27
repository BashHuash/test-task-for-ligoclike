import s from './Content.module.css'
import { useContext } from "react";
import { CoursesContext } from "@/CoursesContext.ts";
import { course } from "@/types.ts";
import { CourseCard } from "@components/CourseCard/CourseCard.tsx";

export const Content: React.FC = () => {
    const context = useContext( CoursesContext )

    let courses: JSX.Element[] | string = 'Курсов не найдено'
    let sortedCourses: course[] | undefined = context?.courses

    if ( context?.activeTag !== 'Все темы' ) {
        sortedCourses = context?.courses.filter( course => course.tags.includes( context.activeTag ) )
    }

    if ( sortedCourses ) {
        courses = sortedCourses.map( course => <CourseCard key={ course.id } course={ course }/> )
    }


    return <div className={ s.content }>
        { courses }
    </div>
}