import { useEffect } from "react";
import  Test from "./Test"
import styles from "./App.module.css"
import { Title } from "./Components";
import Bootstrap from "./Bootstrap";

import './tailwind.css';
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
      <Title> Enviroment : <b>{process.env.NODE_ENV}</b> </Title>

      {process.env.NODE_ENV === "production" && (
        <>
          <img src="/logo192.png" alt=""/>
        </>
      )}

      <Title>
        {process.env.REACT_APP_API_URL}
      </Title>

      <Title theme="dark">
        {process.env.REACT_APP_API_URL}
      </Title>

      <Test/>

      <Bootstrap/>

      <Tailwind/>

    </div>
  );
}

export default App;
