// React js

// - > It is a most famous web developement frame work
// - > It is used for building user interface in web 
// - > React js was created by Facebook
//  -> They used first time react in facebook news feed 
//  -> Easiy to learn and run
// -> contains reusalbe components
// -> divide the large project into multiple components
// -> Mostly uses in single page application

// -> we need to create react elements byt using this code

// Import React and ReactDOM
const root = document.getElementById("root"); // Assuming you have an element with id 'root' in your HTML

// Define the properties for the element
const ex = { children: "Hello", className: "text-color" };

// Create a React element
const h1 = React.createElement("h1", ex);

// Render the element
ReactDOM.render(h1, root);


// After JSX was introduced , we dont need to write those setps to create react element

// JSX - jsx is javascript extension , it allows to inset HTMl-mark-line into the js code
// JSX was intoduced by react 
// Noe most of the web frame works like vue , next , angular uses jSx
// JSX is used to create react elements

// Example 
const h1 = <h1 className="text-color">Hello</h1> // JSX code        // it is similar to the html
// JSX is converted to react element by babel compiler



//Components

// Components is the javascript functions , but it will return jsx code , which is nothing but react elements
// note the component name should be starting with capital letter
// react will identify the component by using the capital letter of the first word
// if the first letter was loer case , then react identies that is html element
// we can use our components in any other components
// we should call our components inside the self closing taggs, before that we need to import our component , where we wan to add that component
// we can pass the data to the component by using props

//                There are two types of components in react
//                1 . Class Component
//                2 . Function Component

// 1 ) Class Component
//  -> firstly class component have the state to storing the data
//  -> by creating the class components , first we need to inherit our class react.Component
//  -> Because then  only we can use the all methods of the react component
//  -> we should use render () method in side the class component, then only it will return the reactc elements
// Example
 
class App extends React.Component {
 render(){
    return <h1>Hello</h1>
 }
}


// 2 ) Functional Compoenents
// -> Funcatinali compoennt is the javascript code , that will return the react element which is nothing bu jsx code
// -> before the ES6 version , the functinali components are nothing but state less components
// -> we can use the functional components without inheriting the react component
// -> After the hooks introduced , it has the state in other terms like by using react hooks
// -> we can use the functional components without render method , it will return the react elements automatically
// Example

const App = () => {
    return <h1>Hello</h1>
}


// State 
// state is the javascript object , its helps us to work on component on over time
// state is the local data for the component
// state is mutable , we can change the state at any time
// state is the local data for the component , it will not affect the other components
// we can change the state by using the setState method
// setState method is the asynchronous method , it will not change the state immediately , it will change the the render executes
// we can use the state in the only class component
// there are to ways to update the state by using setState method
// 1 . Object     2 . Callback
// object is used , when you wan to update the state with new value  // setState({name:"Anil"})
// callback is used , when you wan to update the state with the existing value // setState((prevState) => {age:prevState.age+1})



// props
// props is the short form of properties
// props is the read only data for the component
// props is the data that is passed from the parent component to the child component
// props is the immutable data for the component , we can not change the props at any time
// maily used to pass the information to the another components
// we can access the props in componen parameters , and the same way we can send the props whith the any attribute


