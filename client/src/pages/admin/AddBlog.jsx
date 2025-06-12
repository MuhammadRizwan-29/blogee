import { useEffect, useRef, useState } from "react";
import { assets, blogCategories } from "../../assets/assets";
import Quill from "quill";

export default function AddBlog() {
  const editorRef = useRef(null);
  const quillRef = useRef(null);
  const [image, setImage] = useState(false);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [category, setCategory] = useState("Startup");
  const [isPublished, setIsPublished] = useState(false);

  const generateAiDescription = () => {};

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: "snow" });
    }
  }, []);
  return (
    <section className="flex-1 bg-blue-50/50 text-gray-600 ">
      <form className="h-full overflow-scroll" onSubmit={onSubmitHandler}>
        <div className="bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded">
          <p>Upload thumbnail</p>
          <label htmlFor="image">
            <img
              src={!image ? assets.upload_area : URL.createObjectURL(image)}
              alt=""
              className="mt-2 h-16 rounded cursor-pointer"
            />
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              name="image"
              id="image"
              hidden
              required
            />
          </label>

          <p className="mt-4">Blog Title</p>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded"
          />

          <p className="mt-4">Sub Title</p>
          <input
            type="text"
            onChange={(e) => setSubTitle(e.target.value)}
            value={subTitle}
            className="w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded"
          />

          <p className="mt-4">Blog Description</p>
          <div className="relative max-w-lg h-74 pb-16 sm:pb-10 pt-2">
            <div ref={editorRef}></div>
            <button
              className="absolute bottom-1 right-2 ml-2 text-xs text-white bg-black/70 px-4 py-1.5 rounded hover:underline cursor-pointer"
              type="button"
              onClick={() => generateAiDescription}
            >
              Generate AI Description
            </button>
          </div>
          <p className="mt-4">Choose Blog Category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            name="category"
            className="mt-2 px-3 py-2 border text-gray-500 border-gray-300 outline-none rounded"
          >
            <option value="">Select category</option>
            {blogCategories.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>

          <div className="flex gap-2 mt-4">
            <p>Publish Now</p>
            <input
              type="checkbox"
              checked={isPublished}
              className="scale-125 cursor-pointer"
              onChange={(e) => setIsPublished(e.target.checked)}
            />
          </div>

          <button
            type="submit"
            className="mt-8 w-40 h-10 bg-primary text-white rounded cursor-pointer text-sm"
          >
            Add Blog
          </button>
        </div>
      </form>
    </section>
  );
}
