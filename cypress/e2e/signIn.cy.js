import {signIn} from "../fixtures/selectors.js"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('Testing SignIn', ()=> {
  beforeEach(() =>{
    cy.visit('/')
    })

    /** 
    it('should be able to launch URL', () => {
      // Checking if the URL is secure
      cy.visit('/')
      cy.url().should('include', 'com')
      cy.url().should('eq', 'https://www.konga.com/')
      cy.url().should('contains', 'konga')
      // Check that the location contains HTTPS
      cy.location('protocol').should('contains', 'https')
      cy.location('hostname').should('eq', 'www.konga.com')
    })
 */

  it.skip('Should not be able to signin with wrong email', ()=>{
    //Enter valid password and invalid email address
    cy.get(signIn.loginBtn).click()
    cy.get(signIn.emailField).type('Mahzjohn@gmail')
    cy.get(signIn.passwordField).type('E.lens12345')
    cy.get(signIn.loginButton).click()
})
    it.skip('Should not be able to signin with wrong password', ()=>{
    //Enter valid email and wrong password
    cy.get(signIn.loginBtn).click()
    cy.get(signIn.emailField).type('Mahzeeljohn@gmail')
    cy.get(signIn.passwordField).type('E.lens1234')
    cy.get(signIn.loginButton).click()
})
    it('Should be able to signin with valid email and password', ()=>{    
    //Enter valid email and password
    cy.get(signIn.loginBtn).click()
    cy.get(signIn.emailField).type('Mahzeeljohn@gmail.com')
      //Setting Assertions
    cy.get(signIn.emailField).click()
    .should('be.enabled')
  
  
    //cy.get(signIn.passwordField).type('E.lens123456')
    //cy.get(signIn.loginButton).click()

    
})

})
