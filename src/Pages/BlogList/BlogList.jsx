import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import ListedBlogs from "./ListedBlogs";

const BlogList = () => {
  return (
    <>
      <div className="bg-[url('/photo/bg3-1.jpg')] bg-center py-20 lg:py-44 bg-cover text-center">
        <div className="text-white Container">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            Blog List
          </h1>
          <Breadcrumb text="Blog List" />
        </div>
      </div>
      <ListedBlogs />
    </>
  );
};

export default BlogList;
