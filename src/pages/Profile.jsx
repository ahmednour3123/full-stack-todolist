import Header from "../comp/header";
import Footer from "../comp/Footer";
import Loading from "../comp/Loading";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import Moment from "react-moment";
import { deleteUser } from "firebase/auth";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const [user, loading, error] = useAuthState(auth);


  const { t, i18n } = useTranslation();









  const navigate = useNavigate();
  useEffect(() => {
    if (!user && !loading) {
      navigate("/");
    }

    if (user) {
      if (!user.emailVerified) {
        navigate("/");
      }
    }
  });

  const DeleteBTN = () => {
    deleteUser(user)
      .then(() => {
        //
        console.log("User deleted.");
      })
      .catch((error) => {
        // An error ocurred
        console.log(error.message);
      });
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (user) {
    return (
      <>
        <Helmet>
          <title>{t("Profile")}</title>

          <style type="text/css">{` 
        main{
          flex-direction: column;
          align-items: flex-start;
  
    width: fit-content;
    margin: auto;
        }


        
        `}</style>
        </Helmet>
        <Header />

        <main>
          <h6>Email : {user.email}</h6>
          <h6>User Name : {user.displayName}</h6>

          <h6>
            Last Sign in :{" "}
            <Moment fromNow date={user.metadata.lastSignInTime} />{" "}
          </h6>

          <h6>
            Account Created :{" "}
            <Moment fromNow date={user.metadata.creationTime} />
          </h6>
          <button
            onClick={() => {
              DeleteBTN();
            }}
            className="delete"
          >
          {t("Delete Account")}
          </button>
        </main>
        <Footer />
      </>
    );
  }
};

export default Profile;

 
