import React from "react";
import "./Styles.css";
import Img from 'E:/Deva/Popup/src/images/husky1.jpeg'; 
import Img1 from 'E:/Deva/Popup/src/images/husky2.jpeg'; 
import Img2 from 'E:/Deva/Popup/src/images/husky3.jpeg'; 
export default class ImageComponent extends React.Component {
  state = { isOpen: false,isOpen1: false };
  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("cliked");
  };
  handleShowDialog1 = () => {
    this.setState({ isOpen1: !this.state.isOpen1 });
    console.log("cliked");
  };
  render() {
    return (
        <>
      <div>
        <img src={Img}
          onClick={this.handleShowDialog}
          alt="Image"
        />
         
        {this.state.isOpen && (
          <dialog
            className="dialog"
            style={{ position: "absolute" }}
            open onClick={this.handleShowDialog}
          >
            <img src={Img}
              onClick={this.handleShowDialog}
              alt="Image"
              width={"400px"}
              height={"300px"}
            
            />
          </dialog>
        )}
         <img src={Img1}
          onClick={this.handleShowDialog1}
          alt="Image"
          
        />
            {this.state.isOpen1 && (
          <dialog
            className="dialog"
            style={{ position: "absolute" }}
            open onClick={this.handleShowDialog1}
          >
            <img src={Img1}
              onClick={this.handleShowDialog1}
              alt="Image"
              width={"400px"}
              height={"300px"}
            />
          </dialog>
        )}
      </div>

      
     </>
    );
  }
}
