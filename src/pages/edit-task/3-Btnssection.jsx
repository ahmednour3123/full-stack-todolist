import React, { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useTranslation } from "react-i18next";
import Snack from "shared/Snack";

const Btnssection = ({ user, stringId, deleteBTN}) => {

  const [value] = useCollection(collection(db, user.uid));
  const { t, i18n } = useTranslation();
if (value) {
  return (
    <section className="center ">
    
      <div>
        <button
  
          onClick={() => {
            deleteBTN();
        

          }}
          className="delete"
        > 
        {t("Delete task")}
        </button>
      </div>

    </section>
  );
}
};

export default Btnssection;
