import React, { useState } from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import Moment from "react-moment";
import { useTranslation } from "react-i18next";

const SubTasksSection = ({ user, stringId, completedCheckbox, trashIcon }) => {
  const [value] = useDocument(doc(db, user.uid, stringId));
  const [showAddNewTask, setshowAddNewTask] = useState(false);
  const [subTitle, setsubTitle] = useState("");
  const { t, i18n } = useTranslation();
  if (value) {
    return (
      <section className="sub-task mtt">
        <div className="parent-time">
      
          <div>
            <input
              onChange={async (eo) => {
                completedCheckbox(eo);
              }}
              checked={value.data().completed}
              id="checkbox"
              type="checkbox"
            />
            <label htmlFor="checkbox">{t("Completed")} </label>
          </div>
        </div>

        <ul >
          {value.data().details.map((item) => {
            return (
              <li key={item} className="card-task flex">
                <p> {item} </p>
                <i
                  onClick={() => {
                    trashIcon(item);
                  }}
                  className="fa-solid fa-trash"
                ></i>
              </li>
            );
          })}
        </ul>

        {showAddNewTask && (
          <form style={{flexDirection: "row"}} className="add-new-task flex">
            <input
placeholder="Add New Task"
            style={{backgroundColor:"white"}}
              value={subTitle}
              onChange={(eo) => {
                // @ts-ignore
              
                  setsubTitle(eo.target.value);
                }
            
              }
              className="add-task"
              type="text"
            />

            <button
              onClick={async (eo) => {
                eo.preventDefault()
                setsubTitle("");
                if (!subTitle=="") {
                await updateDoc(doc(db, user.uid, stringId), {
                
                  details: arrayUnion(subTitle),
                

                  
                });
              }
              
              }}
              className="add"
            >
              {t("Add")}
            </button>

            <button
              onClick={(eo) => {
                eo.preventDefault()
                setshowAddNewTask(false);
              }}
              className="cancel"
            >
              {t("Cancel")}
            </button>
          </form>
        )}

        <div className="center mttt">
          <button
            onClick={() => {
              setshowAddNewTask(true);
            }}
            className="add-more-btn"
          >
            {t("Add more")} <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </section>
    );
  }
};

export default SubTasksSection;
