import styles from './App.module.scss'
import { Menu } from './components/Menu'
import { MessageList } from './components/MessageList'

export function App() {
   return (
   <main className={styles.contentWrapper}>
     <Menu />
     <MessageList />

   </main>
  )
}

