import React,{useState} from 'react'
import Modal from "react-modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch);
library.add(faWindowClose)

export default function Donation() {
    const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="donation">
      <button className="donationbutton" onClick={toggleModal}>MAKE A DONATION</button>

      <Modal
        className="donationmodal"
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
      >
          <button id="donationclose" onClick={toggleModal}><FontAwesomeIcon icon={faWindowClose} /></button>
          <form>
          <input className="myinputs" required type="text" name="name" placeholder="Your name" />
          <input className="myinputs" required type="text" name="surname" placeholder="Your surname" />
          <input className="myinputs" required type="email" name="email" placeholder="Your email" />
          <input className="myinputs" required type="text" name="phone" placeholder="Your phone" />
          <div className="centeredDon">
            <label>Buy me a coffee:</label>
            <select name="don" id="don">
            <option value="1">1$</option>
            <option value="5">5$</option>
            <option value="10">10$</option>
            <option value="20">20$</option>
            </select>
            </div>
            <input className="myinputs" type="submit" value="Submit"></input>
          </form>
      </Modal>
    </div>
  );
}
