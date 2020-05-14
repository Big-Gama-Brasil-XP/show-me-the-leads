function showModal(modalID) {
  const modal = document.getElementById(modalID)
  if(modal) {
    modal.classList.add('show')
    modal.addEventListener('click', (e) => {
      if(e.target.className == 'close-modal' || e.target.id == modalID) {
        modal.classList.remove('show')
      }
    })
  }
}

function onMouseOut(event) {
  // If the mouse is near the top of the window, show the popup
  if (event.clientY < 50) {
    // Remove this event listener
    document.removeEventListener("mouseout", onMouseOut);

    // Show the popup
    showModal('exit-intent-modal')
  }
}

document.addEventListener("mouseout", onMouseOut);