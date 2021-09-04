import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch);


export default function MySearch() {
    return (
        <div className="mysearch">
           <div className="mysearch_wrapper">
           <FontAwesomeIcon icon={faSearch} />
            </div> 
        </div>
    )
}
