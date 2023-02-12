import FormaContactPage from './FormaContactPage'
import PrijaviSe from "./PrijaviSe";

function ContactPage() {

    function send(ime, telefon, poruka) {
        alert('Ime:' + ime + ' Telefon:' + telefon + ' Poruka:' + poruka);
    }

    return (
        <div className="contactpage_div">
            <h1 id='contact-us'>Kontaktirajte nas! (Iako je to nemoguće jer ovo je sajt za domaći, dobro centriranje, Vojislave. Hvala, Vojislave)</h1>
            <FormaContactPage send={send} />
            <PrijaviSe /> 
        </div>
    );
}

export default ContactPage;