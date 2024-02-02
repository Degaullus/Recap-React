import { IAmAFuckerFunction } from "../utils/utils";
import { Component2, Component3 } from "./Component2";

//1) write the function 
export default function Component1({count}) { //count because of prop drilling ex
    function doItForMe() {
        console.log("Salut toi"); //this is way to play. Declare function. It function log something. Then you link it to a button abows. By clicking, the console log comes. 
    }

   



    //2) write your return 
    return (
        <>
        <h1>I'am Component 1</h1>
        <button onClick={IAmAFuckerFunction}>Click me!</button> {/* Here I am calling a function (see console) from utils. this function fucker was declare in other file, but just called here. Works beacaus ES6 and import by name.*/}
        <button onClick={doItForMe}>Do It For me</button>
        <Component2 count={count}/> {/* props drilling here. read it : (appjsx --) component 1 --) component 2. Comp1 is receving data "count" in return (in app). Now with count={count, I pass in component 2}. Let's see component2 now */}
        </>
    );
}

 // 3) need to be exported to the app to be recognised.  