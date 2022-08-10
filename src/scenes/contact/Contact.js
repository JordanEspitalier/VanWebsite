



function Contact(){
    return (        
    
        <div className="contact">
            <h1>CONTACT</h1>
            <form id="contact-form">
                <div>
                    <label for="email">EMAIL :</label>
                    <input id="email" type="email" name="email" />
                </div>
                <div>
                    <label for="message">MESSAGE :</label>
                    <textarea id="message" name="message" rows="10" cols="40"/>
                </div>

            </form>
        </div>
    )

    
};

export default Contact;