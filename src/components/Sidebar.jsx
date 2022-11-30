import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
      className={styles.cover}
      src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=50"
      />
      <div className={styles.profile}>
        <img c
        className={styles.avatar}
        src="https://github.com/JaritsaCavalcante.png" 
        />

        <strong>Jazinha</strong>
        <span>Estudante</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine  size={20}/>
          Editar seu perfil
        </a>
        </footer>
      </aside>
  );
}