describe ('First Test', () => {
    it ('is working', () => {
      expect (true).to.equal (true);
    });
  });

describe ('Application Running Testing', () => {
it ('Visit the front end app', () => {
    cy.visit ('http://localhost:3000');
});

it ('Check the back end app is running', () => {
    cy.request('http://localhost:8010/todolist',{headers:{'Content-Type': 'application/json'}});
});
});

describe ('Test The input', () => {
    it ('Check the input is typing', () => {
        cy.visit ('http://localhost:3000');
        const text = 'buy some milk';
        cy.get ('[data-testid=text-input]').type (text).should ('have.value', text);
    });
    });

describe ('Test all the components', () => {
    it ('Add a new todo', () => {
        cy.visit ('http://localhost:3000');
        const text = 'buy some milk';
        cy.get ('[data-testid=text-input]').type (text);
        cy.get('button').click()
        cy.contains(text)
    });
    });