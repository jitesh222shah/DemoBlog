
import './App.css';
import People from './People';
import CustomButton from './component/CustomButton';
const array=["jackson","asmita","jitesh","sangoj"]

// console.log("result",array.indexOf("jitesh"))
const data=[
  {
    name:"jackson",
    age:"26",
    place:"dhankuta"
  },
  {
    name:"sita",
    age:"26",
    place:"dhankuta"
  },
  {
    name:"hari",
    age:"26",
    place:"dhankuta"
  }
]

function App() {
  return (
    <div className="App">
      {/* {data.map((each,index)=>(
         <div className='mainContainer' style={{fontsize:"1em",letterSpacing:"0.2em"}}>
         <h1>{each?.name}</h1>
         </div>
      ))} */}
      <People peopleData={array} result={data}/>
   
      
    </div>  
  );
}

export default App;
