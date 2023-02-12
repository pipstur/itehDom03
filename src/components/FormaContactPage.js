// import { useState } from 'react'


// function FormaContactPage(props) {
//     const [ime, setName] = useState('');
//     const [telefon, setPhoneNumber] = useState('');
//     const [poruka, setMessage] = useState('');

//     function handleNameInput(e) {
//         setName(e.target.value)
//     }

//     function handlePhoneNumberInput(e) {
//         setPhoneNumber(e.target.value)
//     }

//     function handleMessageInput(e) {
//         setMessage(e.target.value)
//     }
//     return (
//         <div className="formacontactpage_div">
//             <form id="formacontact_div">
//                 <div className="div-l-i">
//                     <label>Ime: </label>
//                     <input type={'text'} className="form-control mt-2 mb-2" value={ime} onChange={handleNameInput} />
//                 </div>
//                 <div className="div-l-i">
//                     <label>Telefon: </label>
//                     <input type={'text'} className="form-control mt-2 mb-2" value={telefon} onChange={handlePhoneNumberInput} />
//                 </div>
//                 <div className="div-l-i">
//                     <label>Poruka: </label>
//                     <textarea className="form-control mt-3 mb-3" value={poruka} onChange={handleMessageInput} />
//                 </div>
//                 <button type="button" id='btn_send' onClick={() => props.send(ime, telefon, poruka)} className='btn btn-success' >Pošalji!</button>
//             </form>
//         </div>
//     );
// }

// export default FormaContactPage;

import React, { useState } from "react";

function FormaContactPage({ send }) {
  const [showName, setShowName] = useState(true);
  const [showPhone, setShowPhone] = useState(true);
  const [ime, setIme] = useState("");
  const [telefon, setTelefon] = useState("");
  const [poruka, setPoruka] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    send(ime, telefon, poruka);
  }

  return (
    <form id="formacontact_div" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="showName">Prikaži ime: </label>
        <select
          id="showName"
          value={showName}
          onChange={(e) => setShowName(e.target.value === "true")}
        >
          <option value="true">Da</option>
          <option value="false">Ne</option>
        </select>
      </div>
      {showName && (
        <div  className="div-l-i">
          <label htmlFor="ime">Ime: </label>
          <input
            type="text"
            id="ime"
            value={ime}
            onChange={(e) => setIme(e.target.value)}
          />
        </div>
      )}
      <div>
        <label htmlFor="showPhone">Prikaži telefon: </label>
        <select
          id="showPhone"
          value={showPhone}
          onChange={(e) => setShowPhone(e.target.value === "true")}
        >
          <option value="true">Da</option>
          <option value="false">Ne</option>
        </select>
      </div>
      {showPhone && (
        <div  className="div-l-i">
          <label htmlFor="telefon">Telefon: </label>
          <input
            type="text"
            id="telefon"
            value={telefon}
            onChange={(e) => setTelefon(e.target.value)}
          />
        </div>
      )}
      <div  className="div-l-i">
        <label htmlFor="poruka">Poruka: </label>
        <textarea
          id="poruka"
          value={poruka}
          onChange={(e) => setPoruka(e.target.value)}
        />
      </div>
      <button type="submit">Pošalji</button>
    </form>
  );
}

export default FormaContactPage;