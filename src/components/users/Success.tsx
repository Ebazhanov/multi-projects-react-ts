import React from "react";

interface Props {
  count: any;
}

export const Success = ({ count }: Props) => {
  return (
    <div className="success-block">
      <img src="/src/assets/success.svg" alt="Success" />
      <h3>Successful!</h3>
      <p>We have sent invitation for all {count} users sent.</p>
      <button className="send-invite-btn">Go Back</button>
    </div>
  );
};
