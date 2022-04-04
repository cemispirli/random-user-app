
import emailSvg from "./assets/email.svg";
import phoneSvg from "./assets/phone.svg";
import locationSvg from "./assets/location.svg";
import axios from 'axios'
import "./Card.css";
import { useState, useEffect } from 'react';

const Card = () => {
  const [card, setCard] = useState("");
  const [loaded, setLoaded] = useState(false);

  const ramdomUser = () => {
    axios.get('https://randomuser.me/api/')
      .then(res => {
        setCard(res.data.results[0])

        setLoaded(true)
        console.log("1",res.data.results[0]);
      }).catch(err => {
        console.log(err)
      }
      )


  }


  useEffect(() => {
    ramdomUser();
  }, [])


  return (

    <div>
      {(loaded) && (
        <>
          <div className="card-container">
            <img className="img1" src={card.picture.large} alt="" />
            <h2 className="header">{card.name.title} {card.name.first} {card.name.last}</h2>
            <img className="img" src={emailSvg} alt="" />
            <p> {card.email} </p>
            <img className="img" src={phoneSvg} alt="" />
            <p>{card.phone}</p>
            <img className="img" src={locationSvg} alt="" />
            <p>{card.location.city}</p>
            <div className="footer">
              <p>Age: {card.dob.age} </p>
              <p>Register Date: {card.registered.date.slice(0,10)} </p>
            </div>
          </div>
          <button onClick={() => ramdomUser()}>Random User</button>
        </>

      )}

    </div>

  )

}

export default Card


