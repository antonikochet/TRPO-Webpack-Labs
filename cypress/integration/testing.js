//<reference types="cypress"/>

describe('Start Home Page', function()
{
    it('successfully loads', function(){
        cy.visit('http://localhost:10080/')
    })
})

describe('reclick by td',function(){
    it('reclick td 1 ', function(){
        cy.get("td").eq(0).click()
        cy.get("td").eq(0).click()
        cy.get("td").eq(0).should('have.text', 'X')

    })
})

describe('Winner gamer X', function(){
    it('winner X', function(){
        cy.get('td').eq(0).click() //X
        cy.get('td').eq(1).click() //O
        cy.get('td').eq(6).click() //X
        cy.get('td').eq(2).click() //O
        cy.get('td').eq(3).click() //X
        cy.on('window:alert', (str)=>
        {
            expect(str).to.equal('Winner:X')
        })
        cy.get('button[id=restart]').click()
    })
})    //cy.get('button').click()
describe('Winner gamer O', function(){
        it('Winner O', function()
    {
        cy.get('td').eq(0).click() //X
        cy.get('td').eq(1).click() //O
        cy.get('td').eq(3).click() //X
        cy.get('td').eq(4).click() //O
        cy.get('td').eq(5).click() //X
        cy.get('td').eq(7).click() //O
        cy.on('window:alert', (str)=>
        {
            expect(str).to.equal('Winner:O')
        })
        cy.get
        cy.get('button[id=restart]').click()
    })
})

describe('Draw games', function()
{
    it('Draw game', function(){
        cy.get('td').eq(0).click() //X
        cy.get('td').eq(1).click() //O
        cy.get('td').eq(2).click() //X
        cy.get('td').eq(3).click() //O
        cy.get('td').eq(5).click() //X
        cy.get('td').eq(4).click() //O
        cy.get('td').eq(7).click() //X
        cy.get('td').eq(8).click() //O
        cy.get('td').eq(6).click() //X
        
        cy.on('window:alert', (str)=>
        {
            expect(str).to.equal('Draw game')
        })
    })
})