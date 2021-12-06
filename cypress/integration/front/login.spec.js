/// <reference types ="cypress"/>

const Login = require('../../page-objects/login.po')

describe('Login', ()=>{

    const loginPage = new Login();

    before(()=>{
        cy.UrlAdm();
    })

    it('Login With Sucess', ()=>{
        
        loginPage.loginWithSucess();
        expect(loginPage.validUserAcess());
    })

    after(()=>{
        
    })
})

