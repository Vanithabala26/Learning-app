import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import LearningEntry from "./components/LearningEntry";


  function App() {
  const studentName: string = "Vanithashri Balasubramanian";

  return (
    <main>
      <h1>My Learning</h1>
      <p>Fullstack Project</p>
      <p>Student: {studentName}</p>
    </main>
  );
}

export default App;

