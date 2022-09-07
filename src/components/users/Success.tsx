import React from "react";
import success from "../../assets/success.svg";

interface Props {
  count: any;
}

export const Success = ({ count }: Props) => {
  return (
    <div className="success-block">
      <img src={success} alt="Success" />
      <h3>Successful!</h3>
      <p>We have sent {count} invitation</p>
      <button
        onClick={() => window.location.reload()}
        className="send-invite-btn"
      >
        Go Back
      </button>
    </div>
  );
};
