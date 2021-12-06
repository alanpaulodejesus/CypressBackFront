/// <reference types ="cypress"/>

const menuPortal ='#portal-link';

class Account{

    acessPortal(){
        cy.btnClick(menuPortal);
    }

}

module.exports = Account;