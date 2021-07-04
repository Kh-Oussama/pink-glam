import React, {useState} from 'react';
import 'semantic-ui-css/components/message.min.css'
import 'semantic-ui-css/components/grid.min.css'
import 'semantic-ui-css/components/input.min.css'
import 'semantic-ui-css/components/icon.min.css'
import 'semantic-ui-css/components/dropdown.min.css'
import 'semantic-ui-css/components/dropdown.min.css'
import 'semantic-ui-css/components/label.min.css'
import 'semantic-ui-css/components/button.min.css'

const OrderForm = () => {
    const [messageCredentials, setCredentials] = useState({
        firstName: '',
        lastName: '',
        subject: '',
        email: '',
        phoneNumber: '',
        description: ''
    });
    const {firstName, lastName, subject, email, phoneNumber, description} = messageCredentials;
    const [notifState, setNotifState] = useState(false);



    const handleChange = event => {
        const {value, name} = event.target;
        setCredentials({...messageCredentials, [name]: value});
    };

    const sendMsgHandler = async () => {
        const formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('email', email);
        formData.append('phoneNumber', phoneNumber);
        formData.append('subject', subject);
        formData.append('description', description);
        // sendMsgStart({formData});
        setNotifState(true);
        setCredentials({
            ...messageCredentials,
            email: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            subject: '',
            description: ''
        });
    }
    return (
        <div className="content-contactForm">

            <h1>Passer une commande</h1>
            <div className="formBlock">
                <div className="form-group">
                    <label htmlFor="firstName">Nom :</label>
                    <div className="ui left icon input">
                        <input
                            type="text"
                            placeholder="Nom..."
                            name="firstName"
                            value={firstName}
                            onChange={handleChange}
                        />
                        <i className="users icon"></i>
                        <div className="ui corner label">
                            <i className="asterisk icon"></i>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">Prénom :</label>
                    <div className="ui left icon input">
                        <input
                            type="text"
                            placeholder="Prénom..."
                            name="firstName"
                            value={firstName}
                            onChange={handleChange}
                        />
                        <i className="users icon"></i>
                        <div className="ui corner label">
                            <i className="asterisk icon"></i>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">Numéro De Téléphone :</label>
                    <div className="ui left icon input">
                        <input
                            type="text"
                            placeholder="Numéro..."
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={handleChange}
                        />
                        <i className="phone volume icon"></i>
                        <div className="ui corner label">
                            <i className="asterisk icon"></i>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">Email :</label>
                    <div className="ui left icon input">
                        <input
                            type="text"
                            placeholder="Email..."
                            name="email"
                            value={email}
                            onChange={handleChange}
                        />
                        <i className="envelope open outline icon"></i>                        <div className="ui corner label">
                            <i className="asterisk icon"></i>
                        </div>
                    </div>
                </div>
                <div className="form-group form-group-big">
                    <label htmlFor="firstName">Address :</label>
                    <div className="ui left icon input">
                        <input
                            type="text"
                            placeholder="Address..."
                            name="address"
                            value={email}
                            onChange={handleChange}
                        />
                        <i className="map marker alternate icon"></i>                        <div className="ui corner label">
                            <i className="asterisk icon"></i>
                        </div>
                    </div>
                </div>
                <div className="form-group form-group-big">
                    <label htmlFor="firstName">Information en plus :</label>
                    <div className="ui left icon input">
                        <textarea
                            // placeholder="Address..."
                            name="address"
                            // value={email}
                            // onChange={handleChange}
                            rows={5}
                        />
                        <div className="ui corner label">
                            <i className="asterisk icon"></i>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">Quantité :</label>
                    <div className="ui right labeled left icon input total-input">
                        <i className="tags icon"></i>
                        <input
                            type="number"
                            placeholder="Email..."
                            name="email"
                            value={'3'}
                            onChange={handleChange}
                        />
                            <a className="ui tag label">
                                Piece(s)
                            </a>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">Total :</label>
                    <div className="ui left action input total-input">
                        <button className="ui teal labeled icon button">
                            <i className="cart icon"></i>
                            Total
                        </button>
                        <input
                            type="text"
                            placeholder="Email..."
                            name="email"
                            value={'$58.00'}
                            onChange={handleChange}
                            disabled
                        />
                    </div>
                </div>
                <div className="button-block">
                    <button onClick={sendMsgHandler}><i className="fas fa-check-circle"/> Passer la commander</button>
                </div>

            </div>
        </div>

    )
}

export default OrderForm;