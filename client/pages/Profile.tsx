import Image from "next/image";
function Profile() {
  return (
    <div >
<div className="wrapper">
  <div className="top-icons">
    <i className="fas fa-long-arrow-alt-left"></i>
    <i className="fas fa-ellipsis-v"></i>
    <i className="far fa-heart"></i>
  </div>
  
  <div className="profile">
    <img src="https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w" className="thumbnail"></img>
    <div className="check"><i className="fas fa-check"></i></div>
    <h3 className="name">name</h3>
    <p className="title">EMAIL</p>
    <p className="description"></p>
    <button type="button" className="btn">Update</button>
  </div>
  
  <div className="social-icons">
    hello there! we hope that you liked our app so 
    feel free if you want to update your account


  
</div>
<div id="container">
  <button className="face-button">
    <span className="face-container">
      <span className="eye left"></span>
      <span className="eye right"></span>
      <span className="mouth"></span>
    </span>
  </button>
  </div>
</div>


    </div>
  );
}
export default Profile;
