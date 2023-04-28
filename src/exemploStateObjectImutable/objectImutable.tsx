import { ChangeEvent, useState } from 'react'
import './App.css'

function objectImutable() {
  const [player, setPlayer] = useState<any>({
    name: "Samuel",
    nickname: "Samambaia",
    score: 10
  })

  const handleClick = (event:ChangeEvent<HTMLInputElement>) => {
    const newScore = player.score + 1
    setPlayer({...player,score:newScore})

  }

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value

    setPlayer({ ...player, name: newName })
  }

  const handleChangeNickName = (event: ChangeEvent<HTMLInputElement>) => {
    const newNickName = event.target.value

    setPlayer({...player,nickname:newNickName})
  }



  return (
    <>
      <h1>Imutabilidade</h1>

      <h2>Dados do Jogador</h2>

      <p>
        <h3>Score: {player.score}</h3>
        <button onClick={handleClick}>+</button>
      </p>


      <p>
        <label>Player Name</label>
        <input type='text' name='name' onChange={handleChangeName} value={player.name}></input>
      </p>

      <p>
        <label>Player NickName</label>
        <input type='text' name='nickname' onChange={handleChangeNickName} value={player.nickname}></input>
      </p>

      <h3>{player.name} | {player.nickname}</h3>


    </>
  )
}

export default App
