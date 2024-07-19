import Header from "./component/Header";
import Footer from "./component/Footer";
import TaskInput from "./component/TaskInput";
import Task from "./component/Task";
import { title } from "process";

export default function Home() {
  const tasks = [{
    id: 1,
    title: "Read a book",
    isdone: true,
  },{
    id: 2,
    title: "Take a shower",
    isdone: false,
  },{
    id: 3,
    title: "Sleep",
    isdone: false,
  }]
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header/>
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput/>
        {/* task */}
        <Task {...tasks[0]}/>
        {/* task */}
        <Task {...tasks[1]}/>
        {/* task */}
        <Task {...tasks[2]}/>
      </div>

      {/* //footer section */}
      <Footer years = "2023" name = "Suphaloek Khueanphet" numbers = "660610799"/>
    </div>
  );
}
