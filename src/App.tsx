import s from './App.module.css'
import { Sidebar } from "@components/Sidebar/Sidebar.tsx";
import { Content } from "@components/Content/Content.tsx";
import { useCallback, useEffect, useState } from "react";
import { coursesApi } from "@/api/courses.ts";
import { contextType } from "@/types.ts";
import { CoursesContext } from './CoursesContext';


export const App: React.FC = () => {
    const [ data, setData ] = useState<contextType>( null )
    console.log('Сделать адаптацию')
    console.log('Выложить на гитхаб')
    useEffect( () => {
        coursesApi.getCourses().then( ( data ) => {
            setData( { courses: data, activeTag: 'Все темы' } )
        } )
    }, [] )

    const changeActiveTag = useCallback( ( tag: string ) => {
        if ( data ) {
            setData( { courses: [ ...data.courses ], activeTag: tag } )
        }
    }, [ data ] )

    if ( data && data.courses ) {
        const tags: string[] = []
        data.courses.forEach( course => {
            tags.push( ...course.tags )
        } )
        tags.unshift( 'Все темы' )
        const sortedTags = Array.from( new Set( tags ) )

        return <CoursesContext.Provider value={ data }>
            <div className={ s.appFirstWrapper }>
                <div className={ s.appSecondWrapper }>
                    <div className={ s.app }>
                        <Sidebar tags={ sortedTags } changeActiveTag={ changeActiveTag }/>
                        <Content/>
                    </div>
                </div>
            </div>
        </CoursesContext.Provider>
    }
}