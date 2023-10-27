import React from "react";
import ReactLoading from "react-loading";
import Modal from "shared/Modal";

const HomeModal = ({
  closeModal,
  titleInput,
  detailsInput,
  addBTN,
  submitBTN,
  taskTitle,
  subTask,
  array,
  showLoading,
}) => {
  return (
    <Modal closeModal={closeModal}>
      <div className="model-content">
        <input
        style={{color:"black"}}
          value={taskTitle}
          onChange={(eo) => {
            titleInput(eo);
          }}
          required
          placeholder=" Add title : "
          type="text"
        />

        <div>
          <input
            style={{color:"black"}}
            onChange={(eo) => {
              detailsInput(eo);
            }}
            placeholder=" details : "
            type="text"
            value={subTask}
          />

          <button
          style={{marginLeft:"5px"}}
            onClick={(eo) => {
              addBTN(eo);
            }}
          >
            Add
          </button>
        </div>

        <ul>
          {array.map((item) => (
            <li  style={{fontSize:"17px"}} key={item}>{item}</li>
          ))}
        </ul>

        <button
          style={{ marginBottom: "33px" }}
          onClick={async (eo) => {
            submitBTN(eo);
          }}
        >
          {showLoading ? (
            <ReactLoading
              type={"spin"}
              color={"white"}
              height={20}
              width={20}
            />
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </Modal>
  );
};

export default HomeModal;
