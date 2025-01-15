import { useContext } from "react"
import { ThemeContext } from "../Context-Api/ThemeContext"

function BlogPage() {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"} px-[6rem] text-center pt-8`}>BlogPage</div>
  )
}

export default BlogPage