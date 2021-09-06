import React,{useState} from 'react'
import Modal from "react-modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch);
library.add(faWindowClose)

export default function TheSearch() {
    const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="mysearch">
      <button id="searchButton" onClick={toggleModal}><FontAwesomeIcon icon={faSearch} /></button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
      >
        <input className="myinputs" type="text" placeholder="Search a term..." />
        <button onClick={toggleModal}><FontAwesomeIcon icon={faWindowClose} /></button>
      </Modal>
    </div>
  );
}

