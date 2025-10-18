import toast from "react-hot-toast"
import { getBlogs } from "./getBlogsFromLocalStorage"

export const deleteBlog = (id) => {
    let blogs = getBlogs()
    const remaining = blogs.filter(b => b.id !== id)
    localStorage.setItem("blogs", JSON.stringify(remaining))
    toast.success("Blog removed from bookmarked")
}