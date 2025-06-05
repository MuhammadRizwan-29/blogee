export default function Newsletter() {
  return (
    <section className="flex items-center justify-center flex-col text-center space-y-2 my-32">
      <h1 className="md:text-4xl text-2xl font-semibold">Never Miss a Blog!</h1>
      <p className="md:text-lg text-gray-500/70 pb-8">
        Subscribe to get the latest blog, new tech, and exclusive news.
      </p>
      <form className="flex items-center justify-center max-w-2xl w-full md:h-13 h-12">
        <input
          className="w-full h-full px-3 text-gray-500 border border-gray-300 border-r-0 outline-none rounded-md rounded-r-none "
          type="text"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="h-full text-white cursor-pointer md:px-12 px-8 bg-primary/80 hover:bg-primary transition-all rounded-md rounded-l-none"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
