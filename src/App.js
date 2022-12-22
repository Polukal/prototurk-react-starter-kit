import { useEffect } from "react";
import  Test from "./Test"
import styles from "./App.module.css"



//import './tailwind.css';
import './style.scss'
import Tailwind from "./Tailwind";


function App() {
  console.log(styles)
    useEffect(() => {
      if(process.env.NODE_ENV === "production"){
        //inform analytics
      }
    },[])



  return (
    <div className={styles.App}>
      test
      <img src="/logo192.png" alt=""></img>
      <h1> Enviroment : <b>{process.env.NODE_ENV}</b> </h1>

      <p className="env">
        {process.env.REACT_APP_API_URL}
        <span>test</span>
      </p>

      {process.env.NODE_ENV === "production" && (
        <>
          <img src="/logo192.png" alt=""/>
        </>
      )}

      

      <Test/>

      

      <Tailwind/> 

    </div>
  );
}

export default App;
