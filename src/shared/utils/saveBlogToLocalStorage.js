import toast from "react-hot-toast"
import { getBlogs } from "./getBlogsFromLocalStorage"

export const saveBlog = (blog) => {
    let blogs = getBlogs()
    const isExist = blogs.find(b => b.id === blog.id)
    if (isExist) {
        return toast.error("Already Bookmarked")
    }
    blogs.push(blog)
    localStorage.setItem("blogs", JSON.stringify(blogs))
    toast.success("Blog bookmarked successfully")
}