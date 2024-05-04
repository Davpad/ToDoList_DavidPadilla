import React,{ useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";



//create your first component
const Home = () => {
	const [newTask,setNewTask]= useState("")
	const [tasks,setTasks] = useState([])
	// console.log(tasks);

	function vadersToDo() {
		const vadersTasks = ["Find Death Star plans", "Fix the gap in Death Star", "Find Obi Wan", "Stormtrooper's shooting lessons", "Eradicate wookies", "Family therapy with Leia and Luke", "Seize Millennium Falcon", "Find Yoda", "Have Solo arrested for speeding", "Give Lando a bigger brive"];
		setTasks(vadersTasks);
	}

	function addTask(e) {
		if (e.key === "Enter") {
			setTasks(tasks.concat(newTask));
			setNewTask("");
		}
	}

	function deleteTask(index){
		const filteredTasks = tasks.filter((i) => i !== index);
		setTasks(filteredTasks);
	}

	const arrTasks = tasks.map((task)=> <li className="justify-content-left">{task}<span className="text-danger fw-bold" onClick={()=>deleteTask(task)}> X</span></li>)

	let number = tasks.length

	let txt = "task"
	if (number >= 2) {
		txt = "tasks"
	}

	return (
	<>
		<div className="container-fluid col-6 bg-white">
			<h1 className="text-center mt-5">Vader's ToDo List</h1>
			<ul>
				<li><input type="text" className="form-control"  onChange={e=>setNewTask(e.target.value)} onKeyDown={addTask} value={newTask} placeholder="What needs to be done?"/></li>
				{arrTasks}
				<li className="d-flex"><div className="text-danger fw-bold px-2">{number}</div>{txt} to do.</li>
			</ul>
			<button type="button" class="btn btn-danger" onClick={vadersToDo}>Load ToDo List</button>
		</div>
	</>
	);
};

export default Home;
