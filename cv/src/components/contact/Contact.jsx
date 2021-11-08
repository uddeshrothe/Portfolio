import "./contact.scss";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <div className="title">
          <h1>
            {" "}
            <span>Get in</span> <br /> <span>Touch</span>{" "}
          </h1>
        </div>
      </div>
      <div className="right">
        <form action="">
          <div className="contactDetails">
            <div>
              <label>Name:</label>
            </div>
            <div>
              <input
                type="text"
                name="name"
                placeholder
                required
                maxLength="100"
              ></input>
            </div>
          </div>
          <div className="emailDetails">
            <div>
              <label>Email:</label>
            </div>
            <div>
              <input
                type="text"
                name="name"
                placeholder
                required
                maxLength="100"
              ></input>
            </div>
          </div>
          <div className="contactNumberDetails">
            <div>
              <label>Contact no. :</label>
            </div>
            <div>
              <input
                type="text"
                name="name"
                placeholder
                required
                maxLength="100"
              ></input>
            </div>
          </div>
          <div className="messageDetails">
            <div>
              <label>Message:</label>
            </div>
            <div>
              <textarea
                type="text"
                name="name"
                placeholder
                required
                maxLength="100"
              ></textarea>
            </div>
          </div>
          <div><button className="sendButton">Send</button></div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
