import { RenderModal } from "./modal.js";

class Modal {

  static openModal(){
    const btnOpen = document.querySelector('.openModal');

    btnOpen.addEventListener('click', () => {      
      const passwordRecover = RenderModal.PasswordRecover();
      RenderModal.CreateModal(passwordRecover);

      const bntClose = document.querySelector('.closeModal');

      bntClose.addEventListener('click', () => {
        const body  = document.querySelector('.bodyContent');
        const modal = document.querySelector('.modal')
        
        const closeModal = body.removeChild(modal);
        return closeModal;
      })

      
    })
  }
}

Modal.openModal();

