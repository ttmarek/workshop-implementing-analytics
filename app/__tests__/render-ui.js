const { renderUI } = require('../render-ui');

describe('When the route matches a nav link', () => {
  it('adds an active class to the associated nav link', () => {
    document.body.innerHTML = `
      <nav>
        <ul>
          <li id="page-link-name">Name</li>
          <li id="page-link-email">Email</li>
          <li id="page-link-address">Address</li>
          <li id="page-link-ssn">SSN</li>
        </ul>
      </nav>
    `;
    const state = {
      route: '/address',
    };

    renderUI(state);

    expect(document.body.innerHTML.trim()).toEqual(
      `
      <nav>
        <ul>
          <li id="page-link-name">Name</li>
          <li id="page-link-email">Email</li>
          <li id="page-link-address" class="active">Address</li>
          <li id="page-link-ssn">SSN</li>
        </ul>
      </nav>
      `.trim()
    );
  });
});
