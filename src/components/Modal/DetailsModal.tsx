/* eslint-disable @typescript-eslint/no-explicit-any */
function DetailsModal({ modelData }: { modelData: any }) {
  return (
    <>
      <input type="checkbox" id="details-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="details-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <img
            className="size-52 justify-self-center"
            src={modelData?.img01}
            alt={modelData?.projectName}
          />
          <h4 className="text-2xl font-bold text-center my-3">
            Project details:
          </h4>
          <section className="grid grid-cols-1 lg:grid-cols-2">
            {/* left side */}
            <div>
              <p className="text-lg  mb-2">
                Name:{" "}
                <span className="font-bold">{modelData?.projectName}</span>
              </p>
              <p className="text-lg mb-2">
                Type: <span className="font-bold">{modelData?.type}</span>
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default DetailsModal;
