import {signup,signIn,cart} from "../fixtures/selectors.js"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('Testing konga', ()=> {
  beforeEach(() =>{
    cy.visit('/')
  })

  it.skip('Should be able to signup', ()=>{
    cy.get(signup.signupBtn,{force: true}).click()
    cy.get(signup.dontHaveAnAccBtn).click()
    cy.get(signup.firstNameField).type('Qavdev')
    cy.get(signup.lastNameField).type('Limited')
    cy.get(signup.emailField).type('suya@yopmail.com')
    cy.get(signup.phoneNumber).type('08153886451')
    cy.get(signup.password).type('sam12345')
    cy.get(signup.createAccBtn).click()
    cy.get(signup.pin).type('1234')
  })

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
        .should('be.visible')
        cy.get(signIn.passwordField).type('E.lens123456')
        cy.get(signIn.loginButton).click()
    })
    
    })