import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from './App.module.css';
import './global.css';
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

   <div className={styles.wrapper}>
      <Sidebar />
    <main>
    <Post 
      author="Joe"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel porro delectus neque impedit iure eum dicta libero, quibusdam sapiente minima consectetur quis. Explicabo reiciendis natus odit iusto saepe, architecto laborum.
      "
    />
    <Post 
      author="Jazinha"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel porro delectus neque impedit iure eum dicta libero, quibusdam sapiente minima consectetur quis. Explicabo reiciendis natus odit iusto saepe, architecto laborum.
      "
    />

    </main>
    </div>
    </div>
  )
}

