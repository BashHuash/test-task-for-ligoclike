import s from './Sidebar.module.css'
import { memo, useContext, useState } from "react";
import { CoursesContext } from "@/CoursesContext.ts";

type sidebarProps = {
    tags: string[]
    changeActiveTag: ( tag: string ) => void
}

export const Sidebar: React.FC<sidebarProps> = memo( ( { tags, changeActiveTag } ) => {
    const context = useContext( CoursesContext )
    const [ active, setActive ] = useState( context?.activeTag )

    const onChangeHandler = ( tag: string ) => {
        setActive( tag )
        changeActiveTag( tag )
    }

    const navItems = tags.map( item => <span key={ item }
                                             onClick={ ( e ) => {
                                                 const span = e.target as HTMLSpanElement
                                                 return onChangeHandler( span.innerText )
                                             } }
                                             className={ active === item ? s.active : undefined }>{ item }</span> )

    return <nav className={ s.sidebar }>
        { navItems }
    </nav>
} )