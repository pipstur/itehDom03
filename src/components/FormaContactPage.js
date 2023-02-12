import { useState } from 'react'


function FormaContactPage(props) {
    const [ime, setName] = useState('');
    const [telefon, setPhoneNumber] = useState('');
    const [poruka, setMessage] = useState('');

    function handleNameInput(e) {
        setName(e.target.value)
    }

    function handlePhoneNumberInput(e) {
        setPhoneNumber(e.target.value)
    }

    function handleMessageInput(e) {
        setMessage(e.target.value)
    }
    return (
        <div className="formacontactpage_div">
            <form id="formacontact_div">
                <div className="div-l-i">
                    <label>Ime: </label>
                    <input type={'text'} className="form-control mt-2 mb-2" value={ime} onChange={handleNameInput} />
                </div>
                <div className="div-l-i">
                    <label>Telefon: </label>
                    <input type={'text'} className="form-control mt-2 mb-2" value={telefon} onChange={handlePhoneNumberInput} />
                </div>
                <div className="div-l-i">
                    <label>Poruka: </label>
                    <textarea className="form-control mt-3 mb-3" value={poruka} onChange={handleMessageInput} />
                </div>
                <button type="button" id='btn_send' onClick={() => props.send(ime, telefon, poruka)} className='btn btn-success' >Pošalji!</button>
            </form>
        </div>
    );

}

export default FormaContactPage;