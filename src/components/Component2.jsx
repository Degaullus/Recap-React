export const Component2 = ({count}) => {  //this will be with arrow function (es6). Look the export, it's not a DEFAUT export like : 
    // //export default Component2 // export it. any function has to be exported. 
// it's is with es6 export. And look in App. The component2 is in { } in imports. It became a name. IT IS A NAMED IMPORT.  
//Count and props drillng. Take the info from compoenent 1 with {}. Now put it as a H2 because it get the info drilled


    return (
        <>
        <h1>I am Component 2</h1>
        <h1>This the count : {count}</h1> {/* Like this you put {count} drilled from the top */}
        </>
    );
};


export const Component3 = () => {
    return (
        <>
        <h1>I am Component 3 in component 2
            <p style={{fontSize: "18px"}}>Because, I'm Es6 and named imported, this is possible</p>
    
        </h1>
      
        </>
    )
}