import React, { useState } from 'react';
import { Popup, Table } from 'components';

function Main() {
  const [detailPokemon, setDetailPokemon] = useState("")
  const [isPopupOpen, setPopupOpen] = useState(false)

  const handleClosePopup = () => {
    setPopupOpen(false)
  }

  const handleRowClick = (name: string) => {
    setDetailPokemon(name)
    setPopupOpen(true)
  }
  
  return (
    <div style={{height: '100vh'}}>
      <Table
        onRowClick={handleRowClick}
      />
      <Popup
        pokemon={detailPokemon}
        isOpen={isPopupOpen}
        handleClose={handleClosePopup}
      />
    </div>
  );
}

export default Main;
