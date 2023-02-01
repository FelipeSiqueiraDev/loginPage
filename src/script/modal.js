export class RenderModal {

  static CreateModal(modalContent){
    const body           = document.querySelector('.bodyContent')

    const modalBox       = document.createElement('div');
    modalBox.classList.add('modal')
    
    modalBox.appendChild(modalContent);
    body.appendChild(modalBox);
  }

  static PasswordRecover (){

    const modal_Content     = document.createElement('div');

    const modalHeader       = document.createElement('div');
    const modalTitle        = document.createElement('h3');
    const btnClose          = document.createElement('button');

    const modalInstructions = document.createElement('p');

    const formRecover       = document.createElement('form');
    const email             = document.createElement('p');
    const inputEmail        = document.createElement('input')
    const btnRecover        = document.createElement('button')
    const btnContent        = document.createElement('span');


    modal_Content.classList.add('modal_content')
    modalHeader.classList.add('modal_header')
    btnClose.classList.add('closeModal')

    modalTitle.innerText    = "Recuperação de senha";
    btnClose.innerText      = "X";

    modalInstructions.innerText = "Digite seu email abaixo. Você receberá um link via email para criar sua nova senha!";

    email.innerText         = "Email:"
    inputEmail.placeholder  = "Digite seu email";
    inputEmail.type         = Text;

    btnContent.innerText    = "Recuperar senha";

    btnRecover.appendChild(btnContent);
    formRecover.append(email, inputEmail, btnRecover);
    modalHeader.append(modalTitle, btnClose);
    modal_Content.append(modalHeader, modalInstructions, formRecover);

    return modal_Content;
  }
}



