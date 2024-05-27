export type course = {
    name: string
    id: string
    image: string
    bgColor: string
    tags: string[]
}

export type contextType = {
    courses: course[]
    activeTag: string
} | null