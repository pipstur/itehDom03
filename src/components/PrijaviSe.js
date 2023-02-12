import FormaPrijaviSe from './FormaPrijaviSe'

function PrijaviSe() {

    const users = [
        { username: 'milan123', password: 'milan123', name: 'miki' }
    ];

    return (
        <div className="prijavise_div">
            <h1 id='login'>Prijavi se !</h1>
            <FormaPrijaviSe users={users} />
        </div>
    );
}

export default PrijaviSe;