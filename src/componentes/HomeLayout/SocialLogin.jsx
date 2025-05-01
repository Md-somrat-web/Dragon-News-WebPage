import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold">Login with</h2>
      <div className="space-y-5">
        <button className=" btn w-full btn-outline btn-secondary">
          <FcGoogle size={25} />
          Login with Google
        </button>
        <button className=" btn w-full btn-outline btn-primary">
          <FaGithub size={25} />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
