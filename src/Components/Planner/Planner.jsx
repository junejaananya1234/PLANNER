import { useState } from "react";
const Planner = () =>{
    const[subject, setSubject] = useState("")
    const[hours, setHours] = useState(0)
    const[tasks,setTask]  = useState([])
    
    

    const handleAdding = ()=>{
          if(subject.trim() && hours.trim()){
            const newTask = { subject, hours: Number(hours) };
            setTask([...tasks,newTask])
            
            setSubject("")
            setHours(0)
          }
    }

    const increment = (index)=>{
        const newTask = [...tasks];
        newTask[index].hours += 1;
        setTask(newTask)
    }
    const decrement = (index) => {
      const newTasks = [...tasks];
      if (newTasks[index].hours > 0) {
        newTasks[index].hours -= 1;
      }
      setTask(newTasks);
    };
  
    
    return(
        <div className="flex flex-col justify-center items-center gap-3">
            <h1 className="text-3xl underline font-bold">Study Planner</h1>
          <div className="flex gap-6">
            <section ><input type="text" placeholder="Subject" value={subject} onChange={(e) =>setSubject(e.target.value)} className="outline-none border border-black p-1"></input></section>
            <section><input type="number" placeholder="Hours" value={hours} onChange={(e) =>setHours(e.target.value)} className="outline-none border border-black p-1 w-14"></input></section>
            <section><button className=" outline-none bg-purple-600 border border-black p-1" onClick={handleAdding}>ADD</button></section>
          </div>
          <div className="border border-black w-[40%] flex flex-col items-center justify-center gap-1 shadow-xl rounded-md">
            {
              tasks.map((list,index) =>{
                return(
                  <div key={index} className=" flex border border-white w-full justify-center p-3" >
                    <div className="flex gap-4">
                    <section className="text-lg">{list.subject}</section>
                 <section className="text-lg">{list.hours} hours</section>
                 <button className="bg-purple-600 p-1  rounded-full w-6 h-8" onClick={() =>increment(index)}>+</button>
                 <button className="bg-purple-600 p-1 rounded-full w-6 h-8" onClick={() =>decrement(index)}>-</button>
                    </div>
               
                  </div>
                )
              })
            }
          </div>
        </div>
    )
}

export default Planner;