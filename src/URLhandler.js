import React from "react";



const urlHandler = (location, type) => {
    let name = [];
    const retrieve = async (url) => {
        let f1 = await fetch(url);
        let f2 = await f1.json();
        let f3 = f2[type];
        console.log("BEFORE" + name);
        
        name.push(f3);
        console.log(name);
        return name;
        
        
    }
   const parseMe = (location) => {
   retrieve(location);
   console.log("outside " + name);
   }
   parseMe();
}

export default urlHandler;
