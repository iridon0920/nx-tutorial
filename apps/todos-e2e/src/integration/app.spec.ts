import { getAddTodoButton, getGreeting, getTodos } from '../support/app.po';

describe('todos', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Todos');

    getTodos().should((t) => expect(t.length).equal(2));
    getAddTodoButton().click();
    getTodos().should((t) => expect(t.length).equal(3));
  });
});
