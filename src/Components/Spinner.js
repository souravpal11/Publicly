import React from 'react'
import loading from "../assets/loading.json"
import Lottie from 'lottie-react'

const Spinner = () => {
  return (
    <div className="text-center d-flex align-item-center justify-content-center">
      {/* <div className="spinner-border text-dark mt-2" role="status">
      </div> */}
      <Lottie animationData={loading} loop={true} style={{height:"100px",width:"100px"}}/>

    </div>
  );
};

export default Spinner
