import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import SingleBlog from "../BlogList/SingleBlog";

const BlogGrid = () => {
  return (
    <>
      <div className="bg-[url('/photo/bg3-1.jpg')] bg-center py-20 lg:py-44 bg-cover text-center">
        <div className="text-white Container">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            Blog Grid
          </h1>
          <Breadcrumb text="Blog Grid" />
        </div>
      </div>

      <div className="Container grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 py-10 lg:py-20 gap-6">
        <SingleBlog />
      </div>
    </>
  );
};

export default BlogGrid;
