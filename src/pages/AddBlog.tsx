/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { useAddBlogMutation } from "../redux/features/sales/saleApi";

function AddBlog() {
  const [content, setContent] = useState("");
  interface IFormData {
    title: string;
    img: string;
    content: string;
  }
  const [addBlog, { error }] = useAddBlogMutation();
  console.log({ error });
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormData>();

  const handleAddBlog = async (data: IFormData) => {
    //product data
    const project = {
      title: data.title,
      content: content,
      img: data.img,
    };
    console.log({ project });
    const res: any = await addBlog(project);
    console.log(res);
    if (res?.data?.success) {
      toast.success("project added successfully");
      reset();
      setContent(" ");
    } else {
      toast.error("Something went wrong");
    }
  };
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "list",
    "bullet",
    "link",
    "image",
    "video",
    "color",
    "font",
    "align",
  ];

  return (
    <div className="  flex justify-center items-center">
      <div className="w-full p-7 grid items-center justify-items-center">
        <h2 className="text-4xl mb-4 text-center font-bold"> Add A Blog </h2>
        <form onSubmit={handleSubmit(handleAddBlog)}>
          <section>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Blog Title</span>
              </label>
              <input
                type="text"
                placeholder="Blog Title"
                {...register("title", {
                  required: "title is required",
                })}
                className="input input-bordered  w-full lg:w-[800px] "
              />
              {errors.title && (
                <p className="text-red-600">{errors.title?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="text"
                placeholder="Image URL"
                {...register("img", { required: "img is required" })}
                className="input input-bordered w-full lg:w-[800px]"
              />
              {errors.img && (
                <p className="text-red-600">{errors.img?.message}</p>
              )}
            </div>
            <div className="form-control w-full  lg:w-[800px]">
              <label className="label">
                <span className="label-text"> content </span>
              </label>

              <ReactQuill
                modules={modules}
                formats={formats}
                onChange={setContent}
                placeholder="Write your story here..."
                theme="snow"
                style={{ height: "300px" }}
                bounds=".app"
              />
            </div>
          </section>
          <div className="flex justify-end items-center mt-24">
            <input
              className="btn btn-accent  text-xl w-72  "
              value="Add Blog"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBlog;
