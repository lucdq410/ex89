import React from 'react'
import { players } from '../shared/ListOfPlayers'
import "./Players.css"

export default function Player() {

    return (
        <>
            <div className='container'>
                {players.map((player, index) => (
                    <div className='card' key={index}>
                        <img src={player.img} alt="" />
                        <div className="card-body">
                            <div className="title-body">
                                <h3>{player.name}</h3>
                            </div>
                            <p>{player.club}</p>
                        </div>
                        <p><button>Detail</button></p>
                    </div>

                ))}
            </div>
        </>
    )
}