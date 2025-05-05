import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Context-Api/AuthContext";
import { GrClose } from "react-icons/gr";
import { motion, AnimatePresence } from "framer-motion";

function WriteBlogSection() {
  const { showWriteBlogs, setShowWriteBlogs } = useContext(AuthContext);

  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState(null);

  const handleShowWriteBlogs = () => {
    setShowWriteBlogs(!showWriteBlogs);
  };

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (showWriteBlogs) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = previousOverflow || "auto";
    }
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [showWriteBlogs]);

  const handlePublish = async (e) => {
    e.preventDefault();

    if (!title || !content || !category || !coverImage) {
      alert("All fields are required!");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("category", category);
      formData.append("coverImage", coverImage); // this must match backend field name

      const response = await fetch("http://localhost:5000/Blog-post/newpost", {
        method: "POST",
        body: formData,
        credentials: "include", // in case cookies or session are needed
      });

      const data = await response.json();
      console.log("Blog post response:", data);

      if (response.ok) {
        alert("Blog posted successfully!");
        // Reset form after successful post
        setTitle("");
        setContent("");
        setCategory("");
        setCoverImage(null);
        setShowWriteBlogs(false);
      } else {
        alert(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error posting blog:", error);
      alert("Server error. Try again later.");
    }
  };
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Inside handlePublish
  setIsSubmitting(true);
  // After all logic
  setIsSubmitting(false);

  return (
    <AnimatePresence>
      {showWriteBlogs && (
        <motion.div
          className="fixed top-0 left-0 w-full min-h-screen bg-black bg-opacity-50 z-50 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.form
            className="w-[90%] md:w-[50%] h-[70%] md:h-[50%] px-[1rem] py-[1rem] bg-white p-4 flex flex-col gap-4 rounded border-[4px] border-blue-300"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onSubmit={handlePublish}
            method="POST"
          >
            <div className="flex justify-between items-center bg-white">
              <h2 className="text-2xl font-semibold">Write a blog -</h2>
              <GrClose
                onClick={handleShowWriteBlogs}
                className="cursor-pointer text-xl"
              />
            </div>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Enter blog category"
                className="p-2 text-[1.2rem] outline-none border-[2px] border-gray-300 rounded"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <div className="flex flex-col lg:flex-row justify-between lg:items-center lg:gap-4">
                <label htmlFor="coverImage" className="lg:text-[1.2rem]">
                  Upload cover image
                </label>
                <input
                  type="file"
                  id="coverImage"
                  name="coverImage"
                  accept="image/*"
                  className="p-auto text-[16px] lg:text-[1.2rem] outline-none border-[2px] border-gray-300 rounded"
                  onChange={(e) => setCoverImage(e.target.files[0])}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Enter blog title"
                className="p-2 text-[1.2rem] outline-none border-[2px] border-gray-300 rounded"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                placeholder="Write your blog content here..."
                className="p-2 text-[1.2rem] outline-none border-[2px] border-gray-300 rounded h-[200px]"
                name="content"
                rows="10"
                cols="50"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <button
              className="bg-blue-500 text-white p-2 rounded mt-4"
              type="submit"
              disabled={isSubmitting}
              style={{
                backgroundColor: isSubmitting ? "#ccc" : "#1068cc",
                cursor: isSubmitting ? "not-allowed" : "pointer",
              }}
            >
              {isSubmitting ? "Publishing..." : "Publish"}
              {/* <span className="loader"></span> */}
            </button>
          </motion.form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default WriteBlogSection;
