import { useState } from 'react'

let nextId = 0;

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");


  return (
    <>
      <div className='flex flex-col items-center justify-center bg-slate-400 w-2/3 py-4'>
        <h1>Task Tracker</h1>
        <div>
          <input 
          value={text}
          onChange={e => setText(e.target.value)}
           
          />
          <button onClick={() => {
            setTasks([
              ...tasks,
              {id:nextId++, text: text}
            ])
          }}>Add</button>
          <ul>
            {tasks.map(task => (
              <li key={task.id} className='list-disc list-inside'>{task.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
