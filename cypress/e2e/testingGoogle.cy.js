

describe('Testing Google', ()=> {
  beforeEach(() =>{
    cy.visit('https://google.com')
    })

    it.skip('Should be able to search for items on google', ()=>{
        cy.get('.gLFyf').type('Salaries of a Tester{enter}')
        cy.contains('News').click()
    })

    it('Handling auto suggestions', ()=>{
    cy.get('.gLFyf').type('Richest man in')
    cy.contains('richest man in india').click()
})
})