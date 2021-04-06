import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition,setBallPosition] = useState({
    left: "0px",
    top: "0px",
    position:"absolute"
  });

  useEffect(()=>{
    const keyListener = document.addEventListener("keydown",(event)=>{
        // console.log(event.keyCode);
        switch(event.keyCode){
            case 39:
                setBallPosition((ballPosition) => {
                  return {  left: ballPosition.left+5+"px",
                    top: ballPosition.top+"px",
                  }

                });
                break;
                case 40:
                    setBallPosition((ballPosition) => {
                        return {   left: ballPosition.left+"px",
                        top: ballPosition.top+5+"px",
                        }
                    });
                    break;
                    case 37:
                        setBallPosition((ballPosition) => {
                            return {    left: ballPosition.left-5+"px",
                            top: ballPosition.top+"px",
                            }
                        });
                        break;
                        case 38:
                            setBallPosition((ballPosition) => {
                              return { left: ballPosition.left+"px",
                                top: ballPosition.top-5+"px",
                              }
                            })
                            break;
        }
    });
    //cleanup function
    //it will remove the previous event listener
    return () => document.removeEventListener("keydown", keyListener);

},[]);

  const reset = () => {};
  const renderChoice = () => {};
  const renderBallOrButton = () =>{
    if(renderBall){
      return( 
      <div className="ball"
      style={{
        left: ballPosition.left,
        top: ballPosition.top,
        position: "absolute"
      }}></div>)
    }
    else{
      return <button onClick={start} className="start">
      Start
    </button>
    }
  }
  const start =()=>{
    setRenderBall(true);
  }
  const reset =() => {
    setRenderBall(false);
    setBallPosition({
      left: "0px",
    top: "0px",
    position:"absolute"
    })
  }

  return (
    <div className="playground">
      <div className="playground">
        {renderBallOrButton()}
      </div>
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
