import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, blog_data, comments_data } from "../assets/assets";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Moment from "moment";
import Loader from "../components/Loader";

export default function Blog() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [comments, setComments] = useState(null);

  // Add Comment Form
  const [name, setName] = useState("");
  const [messageContent, setMessageContent] = useState("");

  const fetchBlog = async () => {
    const data = blog_data.find((item) => item._id === id);
    setData(data);
  };

  const fetchComments = async () => {
    setComments(comments_data);
  };

  const addComment = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    fetchBlog();
    fetchComments();
  }, []);

  return data ? (
    <>
      <main className="relative">
        <img
          src={assets.gradientBackground}
          alt="Background Image"
          className="absolute -top-50 -z-1 opacity-50"
        />

        <Navbar />
        <section className="text-center text-gray-600 mt-20">
          <p className="text-primary py-4 font-medium">
            Pusblished on {Moment(data.createdAt).format("MMMM Do YYYY")}
          </p>
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800">
            {data.title}
          </h1>
          <h2 className="mx-auto truncate my-5 max-w-lg">{data.subTitle}</h2>
          <p className="inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary">
            Muhammad R
          </p>
        </section>
        <section className="mx-5 max-w-5xl md:mx-auto my-10 mt-6">
          <img src={data.image} alt="Image" className="rounded-3xl mb-5" />
          <div
            className="rich-text max-w-3xl mx-auto"
            dangerouslySetInnerHTML={{ __html: data.description }}
          ></div>
          {/* Comments */}
          <div className="mx-auto mt-14 mb-10 max-w-3xl">
            <h2 className="font-semibold mb-4">Comments ({comments.length})</h2>
            <div className="flex flex-col gap-4">
              {comments.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="relative bg-primary/2 border border-primary/5 max-w-xl p-4 rounded text-gray-600"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <img src={assets.user_icon} alt="" className="w-6" />
                      <p className="font-medium">{item.name}</p>
                    </div>
                    <p className="text-sm max-w-md ml-8">{item.content}</p>
                    <div className="absolute right-4 bottom-3 flex items-center">
                      {Moment(item.createdAt).fromNow()}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Comment Box */}
          <div className="max-w-3xl mx-auto">
            <p className="font-medium mb-4">Add your comment</p>
            <form
              onSubmit={addComment}
              className="flex flex-col items-start gap-4 max-w-lg"
            >
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Name"
                required
                className="w-full p-2 border border-gray-300 rounded outline-none"
              />

              <textarea
                onChange={(e) => setMessageContent(e.target.value)}
                value={messageContent}
                placeholder="Comment"
                required
                className="w-full p-2 border border-gray-300 rounded outline-none h-48"
              ></textarea>

              <button
                type="submit"
                className="bg-primary text-white rounded p-2 px-8 hover:scale-102 transition-all cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>
          {/* Social Icons */}
          <div className="max-w-3xl mx-auto">
            <p className="font-medium my-4">
              Share this article on social media
            </p>
            <div className="flex">
              <img src={assets.facebook_icon} width={50} alt="" />
              <img src={assets.twitter_icon} width={50} alt="" />
              <img src={assets.googleplus_icon} width={50} alt="" />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  ) : (
    <Loader />
  );
}
