import Title from "./Title";
import { blogs } from "../assets/data";

const Blog = () => {
  return (
    <section className="max-padd-container py-16">
      <Title
        title1={"Notre"}
        title2={"Blog"}
        title3={" d'experts"}
        title1Styles={"pb-10"}
        paraStyles={"!block"}
      />
      {/* Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {blogs.map((blog) => (
          <div
            key={blog.title}
            className="rounded-3xl border-[11px] border-primary overflow-hidden relative"
          >
            <img src={blog.image} alt={blog.title} />
            {/* overlay */}
            <div className="absolute bottom-4 left-4 mr-4 text-white text-[15px] bg-tertiary/50 rounded-2xl p-2">
              {/* Info */}
              <div>
                <h3 className="font-semibold text-[16px] pr-4 leading-5">
                  {blog.title}
                </h3>
                <h4 className="medium-14 pb-3 pt-1">{blog.category}</h4>
                <span className="group">
                  <button className="btn-light !px-3 !py-0 group-hover:scale-105 cursor-pointer group-hover:!bg-white group-hover:text-tertiary transition-all duration-500">
                    Lire la suite
                  </button>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
