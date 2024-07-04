/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useUpdatedProjectMutation } from "../../redux/features/product/productApi";

function UpdateModal({ modelData }: { modelData: any }) {
  const [updatedProject, { error }] = useUpdatedProjectMutation();
  console.log(error);
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

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormData>();

  const handUpdateProject = async (data: IFormData) => {
    const updatedData = {
      id: modelData?._id,
      productData: {
        projectName: data.projectName || modelData?.projectName,
        type: data.type || modelData?.type,
        img01: data.img01 || modelData?.img01,
        img02: data.img02 || modelData?.img02,
        img03: data.img03 || modelData?.img03,
        img04: data.img04 || modelData?.img04,
        details: data.details || modelData?.details,
        liveUrl: data.liveUrl || modelData?.liveUrl,
        clientCode: data.clientCode || modelData?.clientCode,
        serverCode: data.serverCode || modelData?.serverCode,
        technology: data.technology || modelData?.technology,
      },
    };

    console.log(updatedData);
    const res: any = await updatedProject(updatedData);
    console.log(res);
    if (res?.data?.success) {
      toast.success("project updated successfully");
    } else {
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <input type="checkbox" id="updated-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="updated-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <form onSubmit={handleSubmit(handUpdateProject)} method="dialog">
            <section className="grid grid-cols-1 lg:grid-cols-2  lg:gap-9">
              <div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Project Name</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={modelData?.projectName}
                    placeholder="Product Name"
                    {...register("projectName")}
                    className="input input-bordered w-full max-w-xs"
                  />
                  {errors.projectName && (
                    <p className="text-red-600">
                      {errors.projectName?.message}
                    </p>
                  )}
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Project Type</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={modelData?.type}
                    placeholder="Project Type"
                    {...register("type")}
                    className="input input-bordered w-full max-w-xs"
                  />
                  {errors.type && (
                    <p className="text-red-600">{errors.type?.message}</p>
                  )}
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Project Image Url 01</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={modelData?.img01}
                    placeholder="Project Image Url 01"
                    {...register("img01")}
                    className="input input-bordered w-full max-w-xs"
                  />
                  {errors.img01 && (
                    <p className="text-red-600">{errors.img01?.message}</p>
                  )}
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Project Image Url 02</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Project Image Url 02"
                    defaultValue={modelData?.img02}
                    {...register("img02")}
                    className="input input-bordered w-full max-w-xs"
                  />
                  {errors.img02 && (
                    <p className="text-red-600">{errors.img02?.message}</p>
                  )}
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Project Image Url 03</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Project Image Url 03"
                    defaultValue={modelData?.img03}
                    {...register("img03")}
                    className="input input-bordered w-full max-w-xs"
                  />
                  {errors.img03 && (
                    <p className="text-red-600">{errors.img03?.message}</p>
                  )}
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Project Image Url 04</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Project Image Url 04"
                    defaultValue={modelData?.img04}
                    {...register("img04")}
                    className="input input-bordered w-full max-w-xs"
                  />
                  {errors.img04 && (
                    <p className="text-red-600">{errors.img04?.message}</p>
                  )}
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Details</span>
                  </label>
                  <input
                    type="text"
                    placeholder="details"
                    defaultValue={modelData?.details}
                    {...register("details")}
                    className="input input-bordered w-full max-w-xs"
                  />
                  {errors.details && (
                    <p className="text-red-600">{errors.details?.message}</p>
                  )}
                </div>
              </div>
              <div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Live Url</span>
                  </label>
                  <input
                    type="text"
                    placeholder="liveUrl"
                    defaultValue={modelData?.liveUrl}
                    {...register("liveUrl")}
                    className="input input-bordered w-full max-w-xs"
                  />
                  {errors.liveUrl && (
                    <p className="text-red-600">{errors.liveUrl?.message}</p>
                  )}
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">clientCode</span>
                  </label>
                  <input
                    type="text"
                    placeholder="ClientCode"
                    defaultValue={modelData?.clientCode}
                    {...register("clientCode")}
                    className="input input-bordered w-full max-w-xs"
                  />
                  {errors.clientCode && (
                    <p className="text-red-600">{errors.clientCode?.message}</p>
                  )}
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">serverCode</span>
                  </label>
                  <input
                    type="text"
                    placeholder="serverCode"
                    defaultValue={modelData?.serverCode}
                    {...register("serverCode")}
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
                    defaultValue={modelData?.technology}
                    {...register("technology")}
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
                value="Updated"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateModal;
