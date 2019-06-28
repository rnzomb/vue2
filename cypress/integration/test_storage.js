describe('Check storage', function() {
  it('storage', function() {
    cy.visit('http://localhost:8080/')
    cy.contains('Add Page').click()
    cy.url().should('include', '/add')
    let r = Math.random().toString(36).substring(3)
    cy.get('#firstName')
      .type(r)
    cy.get('#Date').click()

    cy.get('.vdp-datepicker__calendar')

    cy.get('span.cell.day').contains(18).click()
    cy.get('#formSubmit').click()

    cy.url().should('include', '/')
    for (var i = 0; i < 2 ; i++) {
      cy.contains('Add Page').click()
      let r = Math.random().toString(36).substring(3)
      cy.get('#firstName')
      .type(r)

      cy.get('#Date').click()

      cy.get('.vdp-datepicker__calendar')
  
      var date = Math.floor(Math.random() * 10)
      cy.get('span.cell.day').contains(18).click()
      cy.get('#formSubmit').click()     
    }
      cy.wait(1000)
      cy.get('.text-left.col > div > a').eq(0).click()

      cy.clearLocalStorage()
      cy.reload()

  

   

  })
})