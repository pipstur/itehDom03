import { useState } from 'react'


function FormaPrijaviSe(props) {

    var users = props.users;

    const [tekst_login, setTekst] = useState('');
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [counter, setCounter] = useState(0);
    

    function handleUsername(e) {
        setUsername(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    function prijaviSe(username, password) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].username === username && users[i].password === password) {
                setTekst(<h1>Uspešno ste se loginovali!</h1>)
                return;
            }
            else {
                setTekst(<h1>Pogrešna šifra ili korisničko ime! Pokušajte ponovo!</h1>)
                setCounter(counter + 1)
                return;
            }
            
        }
    }

    return (
        <div className="formaprijavise_div">
            <div className="formaprijava">
                <form>
                    <div className="polja">
                        <label>Korisničko ime: </label>
                        <input type={'text'} id="input_username" className="form-control mt-1 mb-2" value={username} onChange={handleUsername} />
                    </div>
                    <div className="polja">
                        <label>Šifra: </label>
                        <input type={'password'} className="form-control mt-1 mb-2" value={password} onChange={handlePassword} />
                    </div>
                    <button type="button" onClick={() => prijaviSe(username, password)} className='btn btn-success' id='btn_log' >Login</button>
                </form>
            </div>
            <div id='tekst_login'>{tekst_login}</div>
            <div id='tekst_login'>Broj propalih loginova: {counter}</div>
        </div >
    );
}

export default FormaPrijaviSe;