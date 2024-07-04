/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  useDeleteProductMutation,
  useGetProductQuery,
} from "../redux/features/product/productApi";
import { BsThreeDotsVertical } from "react-icons/bs";
import DetailsModal from "../components/Modal/DetailsModal";

import UpdateModal from "../components/Modal/UpdateModal";
import DuplicateModal from "../components/Modal/DuplicateModal";

function AllProject() {
  const [modelData, setModelData] = useState();

  const [deleteProduct, { error }] = useDeleteProductMutation();

  const { data, isLoading, isError } = useGetProductQuery(undefined);

  const productData = data?.data;
  console.log({ isError }, { error });
  if (isLoading) {
    return (
      <div className="flex items-center h-screen justify-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-8">
        {productData?.map((p: any) => (
          <div
            className="border rounded-lg hover:border-orange-300  p-3"
            key={p._id}
          >
            <div className="dropdown dropdown-bottom flex justify-end">
              <div tabIndex={0} role="button" className="pl-3">
                <BsThreeDotsVertical />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-orange-100 rounded-box w-52"
              >
                <li>
                  <label
                    onClick={() => setModelData(p)}
                    htmlFor="updated-modal"
                  >
                    Edit project
                  </label>
                </li>

                <li>
                  <label onClick={() => deleteProduct(p._id)}>
                    Delete project
                  </label>
                </li>
              </ul>
            </div>
            <div className=" grid grid-cols-2 ">
              <img className="size-40" src={p.img01} alt={p.projectName} />
              <div>
                <h3 className="text-xl ">
                  Project name: <br />{" "}
                  <span className="font-bold"> {p.projectName}</span>
                </h3>
                <p className="text-2xl">
                  Type: <br /> <span className="font-bold"> {p.type}</span>
                </p>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-end">
              <label
                onClick={() => setModelData(p)}
                htmlFor="details-modal"
                className="btn btn-outline btn-sm btn-primary px-8 text-xl font-bold rounded-full"
              >
                Details
              </label>
            </div>
          </div>
        ))}

        <DetailsModal modelData={modelData} />
        <UpdateModal modelData={modelData} />
        <DuplicateModal modelData={modelData} />
      </div>
    </div>
  );
}

export default AllProject;
