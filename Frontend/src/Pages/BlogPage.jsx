import { useContext } from "react"
import { AuthContext } from "../Context-Api/AuthContext"

function BlogPage() {
  const {theme} = useContext(AuthContext);
  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"} px-[6rem] text-center pt-8`}>BlogPage</div>
  )
}

export default BlogPage