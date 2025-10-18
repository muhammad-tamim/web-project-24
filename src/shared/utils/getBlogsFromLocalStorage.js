export const getBlogs = () => {
    let blogs = []
    const storedBlogs = localStorage.getItem('blogs')
    if (storedBlogs) {
        blogs = JSON.parse(storedBlogs)
    }

    return blogs
}