describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/login')
    cy.login('dropi','dropidropi')    
    cy.wait(1000)


  })

  afterEach(() => {
    cy.get('.navigation').find('li').eq(2).click()
    cy.visit('http://localhost:3001/')
  })

  
  it('Add Page can be accepted ', () => {
    cy.visit('http://localhost:3001/add')
    cy.get('.navigation').find('li').eq(1).click()
    cy.get('.formdiv').should('be.visible')

    cy.get('.formdiv').find('input[type=file]').each(($el) => cy.wrap($el).selectFile('cypress/fixtures/image1.jpg',{force: true}))

    cy.get('.formdiv').find('button').click()
   
  })

 
})