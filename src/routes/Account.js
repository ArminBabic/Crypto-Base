import React from "react";
import SavedCoin from "../components/SavedCoin";
import { UserAuth } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

function Account() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  if (user) {
    return (
      <section className="py-12 max-w-[1140px] mx-auto">
        <header className="rounded-div flex justify-between py-8">
          <div>
            <h3 className="text-2xl font-bold">Account</h3>
            <p>Welcome,{user?.email}</p>
          </div>

          <button
            onClick={logoutHandler}
            className=" text-primary border border-button px-8 w-[150px] rounded-2xl shadow-lg hover:shadow-2xl"
          >
            Sign out
          </button>
        </header>
        <main className="rounded-div mt-12 py-8 min-h-[300px]">
          <h1 className="text-2xl font-bold">Watch List</h1>
          {<SavedCoin />}
        </main>
      </section>
    );
  } else {
    return <Navigate to="/SignIn" />;
  }
}

export default Account;
