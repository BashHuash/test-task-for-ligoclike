import axios from "axios";
import { course } from "@/types.ts";

export const coursesApi = {
    getCourses: () => axios
        .get<course[]>( 'https://logiclike.com/docs/courses.json' )
        .then( ( { data } ) => data )
}