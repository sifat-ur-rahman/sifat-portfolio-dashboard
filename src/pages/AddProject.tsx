/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAddProjectMutation } from "../redux/features/product/productApi";

function AddProject() {
  interface IFormData {
    projectName: string;

    type: string;
    img01: string;
    img02: string;
    img03: string;
    img04: string;
    details: string;
    liveUrl: string;
    clientCode: string;
    serverCode: string;
    technology: string;
  }
  const [addProject, { error }] = useAddProjectMutation();
  console.log({ error });
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormData>();

  const handleAddProduct = async (data: IFormData) => {
    //product data
    const project = {
      projectName: data.projectName,
      type: data.type,
      img01: data.img01,
      img02: data.img02,
      img03: data.img03,
      img04: data.img04,
      details: data.details,
      liveUrl: data.liveUrl,
      clientCode: data.clientCode,
      serverCode: data.serverCode,
      technology: data.technology,
    };
    console.log({ project });
    const res: any = await addProject(project);
    console.log(res);
    if (res?.data?.success) {
      toast.success("project added successfully");
      reset();
    } else {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="  flex justify-center items-center">
      <div className="w-full p-7 grid items-center justify-items-center">
        <h2 className="text-4xl mb-4 text-center font-bold"> Add A Project </h2>
        <form onSubmit={handleSubmit(handleAddProduct)}>
          <section className="grid grid-cols-1 lg:grid-cols-2  lg:gap-9">
            <div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Project Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Product Name"
                  {...register("projectName", {
                    required: "project name is required",
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.projectName && (
                  <p className="text-red-600">{errors.projectName?.message}</p>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Project type</span>
                </label>
                <input
                  type="text"
                  placeholder="Product type"
                  {...register("type", { required: "type is required" })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.type && (
                  <p className="text-red-600">{errors.type?.message}</p>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Image URL 01</span>
                </label>
                <input
                  type="text"
                  placeholder="img01"
                  {...register("img01", {
                    required: "img01 is required",
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.img01 && (
                  <p className="text-red-600">{errors.img01?.message}</p>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Image URL 02</span>
                </label>
                <input
                  type="text"
                  placeholder="img02"
                  {...register("img02", {
                    required: "img02 is required",
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.img02 && (
                  <p className="text-red-600">{errors.img02?.message}</p>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Image URL 03</span>
                </label>
                <input
                  type="text"
                  placeholder="img03"
                  {...register("img03", {
                    required: "img03  is required",
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.img03 && (
                  <p className="text-red-600">{errors.img03?.message}</p>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Image URL 04</span>
                </label>
                <input
                  type="text"
                  placeholder="img04"
                  {...register("img04", {
                    required: "img04 is required",
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.img04 && (
                  <p className="text-red-600">{errors.img04?.message}</p>
                )}
              </div>
            </div>

            <div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">details</span>
                </label>
                <input
                  type="text"
                  placeholder="details"
                  {...register("details", {
                    required: "details is required",
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.details && (
                  <p className="text-red-600">{errors.details?.message}</p>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Live Url</span>
                </label>
                <input
                  type="text"
                  placeholder="liveUrl"
                  {...register("liveUrl", {
                    required: "liveUrl is required",
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.liveUrl && (
                  <p className="text-red-600">{errors.liveUrl?.message}</p>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Client Code</span>
                </label>
                <input
                  type="text"
                  placeholder="clientCode"
                  {...register("clientCode", {
                    required: "clientCode is required",
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.clientCode && (
                  <p className="text-red-600">{errors.clientCode?.message}</p>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Server Code</span>
                </label>
                <input
                  type="text"
                  placeholder="serverCode"
                  {...register("serverCode", {
                    required: "serverCode is required",
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.serverCode && (
                  <p className="text-red-600">{errors.serverCode?.message}</p>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Technology</span>
                </label>
                <input
                  type="text"
                  placeholder="technology"
                  {...register("technology", {
                    required: "technology is required",
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.technology && (
                  <p className="text-red-600">{errors.technology?.message}</p>
                )}
              </div>
            </div>
          </section>
          <div className="flex justify-end items-center">
            <input
              className="btn btn-accent  text-xl w-72  mt-5"
              value="Add Project"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProject;
