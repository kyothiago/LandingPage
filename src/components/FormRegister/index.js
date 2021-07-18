import { useState } from 'react';
import Button from '../commons/Button';

export default function Input() {
  const [email, setEmail] = useState("")
  const armazenar = (chave, email) => {
    localStorage.setItem(chave, email)
    window.alert("Cadastro efetuado com sucesso!")
  }
  return (

    <>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="example@example.com" />
      <Button type="submit" onClick={() => armazenar("Email: ", email)} >Cadastrar</Button>
    </>
  )
}
