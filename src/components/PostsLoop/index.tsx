import useGlobalData from "@docusaurus/useGlobalData";

const posts = [];

const PostsLoop = ({ count }) => {
  return (
    <>
      {posts.map((post) => (
        <div
          className="relative border border-transparent border-dashed cursor-pointer p-7 group rounded-2xl"
          onClick={() => {
            location.href = "${post.link}";
          }}
        >
          <div className="absolute inset-0 z-20 w-full h-full duration-300 ease-out bg-white border border-dashed dark:bg-neutral-950 rounded-2xl border-neutral-300 dark:border-neutral-600 group-hover:-translate-x-1 group-hover:-translate-y-1" />
          <div className="absolute inset-0 z-10 w-full h-full duration-300 ease-out border border-dashed rounded-2xl border-neutral-300 dark:border-neutral-600 group-hover:translate-x-1 group-hover:translate-y-1" />
          <div className="relative z-30 duration-300 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1">
            <h2 className="flex items-center mb-3">
              <a
                href={post.link}
                className="text-xl font-bold leading-tight tracking-tight sm:text-2xl dark:text-neutral-100"
              >
                {post.title}
              </a>
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              <span>{post.description}</span>
            </p>
            <div className="mt-2.5 text-xs font-medium text-neutral-800 dark:text-neutral-300">
              Posted on {post.dateFormatted}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PostsLoop;
