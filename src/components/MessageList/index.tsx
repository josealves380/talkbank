/*import { useEffect } from 'react'
import { api } from '../../services/api'*/

import styles from "./styles.module.scss"
export function MessageList() {
  /*useEffect(() => {
    api.get('messages').then((response: { data: any }) => {
      console.log(response.data);
    })
  }, [])*/
  return (
    <div className={styles.Laura}>
      <p>
        Olá eu sou a laura a sua assistente virtual
      </p>
      <textarea 
      className={styles.Problema
      }
       name="message" 
       id="message"
       placeholder="Conte-me o seu problema para ajuda-lo"></textarea>
      
    </div>
  )
}