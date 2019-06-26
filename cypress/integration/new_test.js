describe('New Test', function() {
  it('clicks the link "type"', function() {
    cy.request('DELETE', 'https://reqres.in/api/users/2')
    .its('status').should('eq', 204)
    
    const userData = [
      {first_name: 'John'},
      {last_name: 'Doe'},
      {email: 'foo'}
    ]
    cy.request('PUT', 'https://reqres.in/api/users/2', {userData})
    .its('status').should('eq', 200)
  
    cy.visit('http://localhost:8080/')

    //Users
    cy.contains('Users').click()
    cy.url().should('include', '/users')
    cy.url().should('eq', 'http://localhost:8080/users/')
    cy.wait(500)

    cy.get('label.custom-control-label').dblclick({ multiple: true })
    cy.get('label.custom-control-label').click({ multiple: true })
    cy.get('label.custom-control-label').first().dblclick()
    cy.get('label.custom-control-label').last().dblclick()
    cy.get('label.custom-control-label').prev().dblclick()

    cy.wait(500)
    cy.get('div.mb-2').find('img')
    // button delete
    cy.get('button.float-right').first().click()

    cy.wait(500)
    cy.get('.modal-footer > button.btn.btn-primary').click()

    //button edit
    cy.get('button.float-left').first().click()


    cy.get('#firstName')
       .should('have.value', 'Emma')
       .and('have.css', 'border-color')
       .and('eq', 'rgb(40, 167, 69)') 
    cy.get('#firstName') 
       .its('minlength')
       .should('be', 3)
  
    cy.get('#firstName')
        .clear()
       .should('have.value', '')
       .type('Hello')
       .should('have.value', 'Hello')

    cy.get('#lastName')
       .should('have.value', 'Wong')
       .clear()
       .should('have.value', '')
       .type('Bye')
       .should('have.value', 'Bye')
    cy.get('#email')
       .should('have.value', 'emma.wong@reqres.in')
       .clear()
       .should('have.value', '')
       .type('ttt@ttt.rr')
       .should('have.value', 'ttt@ttt.rr')

       //within
    cy.get('#userDataSubmit').within(() => {
    cy.get('input:first').should('have.attr', 'required', 'required')
    cy.get('input:last').should('have.attr', 'id', 'email')
    })
    .should('be.visible')

    cy.get('.btn-success').click()
    cy.get('.btn-danger').click()
    
    cy.title().should('include', 'vue2')
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    cy.window().should('have.property', 'top')
    cy.viewport('macbook-15')
    cy.wait(200)
  })
})