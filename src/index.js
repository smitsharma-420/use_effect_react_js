import React from 'react';
import ReactDom from "react-dom"
import DynamicData from './Components/DynamicData';
import "./App.css"
// import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDom.render(
  <>
    <div className="cards">
      <DynamicData
        imgSrc="https://occ-0-3776-2164.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABcICtm-83lqIApMjAA1zyFZ3lYGiiJa8_SMHAUnzYXrzX4LPALBjX3iwyc7ZqaQDeyKTgZaZwW7n0Y7kV30hHJRH2q7l7nOjtoCh.webp?r=611"
        title="STRANGER THINGS"
        decription="When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl."
        link="https://www.netflix.com/in/title/80057281"
      />
      <DynamicData
        imgSrc="https://occ-0-3776-2164.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABTUUJHSpAskA4xuGqs34K8Gmr811TPAEGwCr6ivH2KOqEg_34M4SbOZOgOICgU4yh47K5bgWwFsrp_Hap0VJPBjEY4R8Ttc8L3UG.webp?r=104"
        title="THE PERFECT COUPLE"
        decription="Amelia is about to marry into one of the wealthiest families on Nantucket, until a shocking death derails the wedding — and turns everyone into a suspect."
        link="https://www.netflix.com/in/title/81474158"
      />
      <DynamicData
        imgSrc="https://occ-0-3776-2164.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABU36KripM5_CpScfw0TVc4NG4RmAeBtdIji7JYq7x-IG1uxjuwxvzmNPmFfshZvJFWGDaCvSYAO8hzsn0OsZGVaqgFnEBoB6FRLv.webp?r=71c"
        title="THE GREAT INDIAN KAPIL SHOW"
        decription="Comedian Kapil Sharma hosts this laugh-out-loud variety talk show with celebrity guests, hilarious antics and his signature supporting cast."
        link="https://www.netflix.com/in/title/81737430"
      />
      <DynamicData
        imgSrc="https://occ-0-3776-2164.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABUhu7FG_4UAmKdmAWoDCkw01pwtj-2vMRoEltidccBbHKPuaoCZJcsQJ88P4zpZkef-2pgCF742yTKj_B_fvPBTpSO73ggBS5lRV.webp?r=b39"
        title="Kalki 2898-A.D"
        decription="The future of those in the dystopian city of Kasi is altered when the destined arrival of Lord Vishnu's final avatar launches a war against darkness."
        link="https://www.netflix.com/in/title/81726031"
      />
    </div>
  </>,
  document.getElementById("root")
); 
 
