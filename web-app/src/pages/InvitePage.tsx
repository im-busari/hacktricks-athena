import { useState } from "react";

const InvitePage = () => {
    const [phone, setPhone] = useState('');
    const sendInvite = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        const url = process.env.REACT_APP_INVITE_URL || 'http://localhost:8080';
        fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phone_number: phone
            }) 
          }).then(() => {
              window.alert('Message has been sent!')
          })
          .catch((err) => console.error(err))


    }
  return (
    <div className="invite-page">
      <h1 className="invite-page-heading-1">Invite User to Hacktrick Mentoring</h1>
      <h2 className="invite-page-heading-2">Enter their phone number, include the country dialling code (44 - UK)</h2>
      <input className="invite-input" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <button className="invite-button" onClick={sendInvite}>Send invite</button>
    </div>
  );
};

export default InvitePage;