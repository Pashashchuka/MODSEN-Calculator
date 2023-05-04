describe('calculator', () => {
  it('should add values', () => {
    cy.visit('/home');

    cy.get('button[value="1"]').click();
    cy.get('button[value="+"]').click();
    cy.get('button[value="2"]').click();
    cy.get('button[value="="]').click();
    cy.get('#displayValue', { timeout: 200 }).should('have.text', '3');
  });
});

describe('calculator', () => {
  it('should substract values', () => {
    cy.visit('/home');

    cy.get('button[value="2"]').click();
    cy.get('button[value="-"]').click();
    cy.get('button[value="1"]').click();
    cy.get('button[value="="]').click();
    cy.get('#displayValue', { timeout: 200 }).should('have.text', '1');
  });
});

describe('calculator', () => {
  it('should multiply values', () => {
    cy.visit('/home');

    cy.get('button[value="2"]').click();
    cy.get('button[value="*"]').click();
    cy.get('button[value="3"]').click();
    cy.get('button[value="="]').click();
    cy.get('#displayValue', { timeout: 200 }).should('have.text', '6');
  });
});

describe('calculator', () => {
  it('should divide values', () => {
    cy.visit('/home');

    cy.get('button[value="1"]').click();
    cy.get('button[value="/"]').click();
    cy.get('button[value="2"]').click();
    cy.get('button[value="="]').click();
    cy.get('#displayValue', { timeout: 200 }).should('have.text', '0.5');
  });
});

describe('calculator', () => {
  it('should show the remainder of division', () => {
    cy.visit('/home');

    cy.get('button[value="4"]').click();
    cy.get('button[value="%"]').click();
    cy.get('button[value="3"]').click();
    cy.get('button[value="="]').click();
    cy.get('#displayValue', { timeout: 200 }).should('have.text', '1');
  });
});

describe('calculator', () => {
  it('should exponentiate values', () => {
    cy.visit('/home');

    cy.get('button[value="2"]').click();
    cy.get('button[value="^"]').click();
    cy.get('button[value="3"]').click();
    cy.get('button[value="="]').click();
    cy.get('#displayValue', { timeout: 200 }).should('have.text', '8');
  });
});

describe('calculator', () => {
  it('should change the sigh of value', () => {
    cy.visit('/home');

    cy.get('button[value="1"]').click();
    cy.get('#displayValue', { timeout: 200 }).contains('1');
    cy.get('button[value="+/-"]').click();
    cy.get('#displayValue', { timeout: 200 }).should('have.text', '-1');
    cy.get('button[value="+/-"]').click();
    cy.get('#displayValue', { timeout: 200 }).should('have.text', '1');

  });
});

describe('calculator', () => {
  it('should show the square root', () => {
    cy.visit('/home');

    cy.get('button[value="9"]').click();
    cy.get('button[value="√"]').click();
    cy.get('#displayValue', { timeout: 200 }).should('have.text', '3');
  });
});

describe('calculator', () => {
  it('should show part of an integer', () => {
    cy.visit('/home');

    cy.get('button[value="5"]').click();
    cy.get('button[value="1/x"]').click();
    cy.get('#displayValue', { timeout: 200 }).should('have.text', '0.2');
  });
});

describe('calculator', () => {
  it('should put the operation in history', () => {
    cy.visit('/home');

    cy.get('button[value="1"]').click();
    cy.get('button[value="+"]').click();
    cy.get('button[value="2"]').click();
    cy.get('button[value="="]').click();
    cy.get('#displayValue', { timeout: 200 }).should('have.text', '3');
    cy.get('#history p').last().should('have.text', '1 \n            +\n            2');
  });
});

describe('calculator', () => {
  it('should clear the history', () => {
    cy.visit('/home');

    cy.get('button[value="1"]').click();
    cy.get('button[value="+"]').click();
    cy.get('button[value="2"]').click();
    cy.get('button[value="="]').click();
    cy.get('#displayValue', { timeout: 200 }).should('have.text', '3');
    cy.get('#history p').last().should('have.text', '1 \n            +\n            2');

    cy.visit('/settings');

    cy.get('button')
      .click()
      .should(() => {
        expect(localStorage.getItem('history'));
      });

    cy.clearLocalStorage(/history/).should((ls) => {
      expect(ls.getItem('history')).to.be.null;
    });

    cy.visit('/home');
    cy.get('#history').not('p');
  });
});

describe('calculator', () => {
  it('should display values', () => {
    cy.visit('/home');

    cy.get('button[value="9"]').click();
    cy.get('#displayValue').contains('9');
  });
});

describe('calculator', () => {
  it('should clear display value', () => {
    cy.visit('/home');

    cy.get('button[value="1"]').click();
    cy.get('button[value="2"]').click();
    cy.get('button[value="C"]').click();
    cy.get('#displayValue', { timeout: 200 }).should('have.text', '0');
  });
});

describe('calculator', () => {
  it('should clear entry display value', () => {
    cy.visit('/home');

    cy.get('button[value="1"]').click();
    cy.get('button[value="+"]').click();
    cy.get('button[value="2"]').click();
    cy.get('button[value="CE"]').click();
    cy.get('button[value="3"]').click();
    cy.get('button[value="="]').click();
    cy.get('#displayValue', { timeout: 200 }).should('have.text', '4');
  });
});

describe('calculator', () => {
  it('should be possible to write .5', () => {
    cy.visit('/home');

    cy.get('button[value="."]').click();
    cy.get('button[value="5"]').click();
    cy.get('button[value="+"]').click();
    cy.get('#displayValue', { timeout: 200 }).should('have.text', '0.5');
    cy.get('button[value="1"]').click();
    cy.get('button[value="="]').click();
    cy.get('#displayValue', { timeout: 200 }).should('have.text', '1.5');
  });
});

describe('calculator', () => {
  it('should respond to a click', () => {
    cy.visit('/home');

    cy.get('button[value="1/x"]').click();
    cy.get('button[value="+/-"]').click();
    cy.get('button[value="√"]').click();
    cy.get('button[value="C"]').click();
    cy.get('button[value="9"]').click();
    cy.get('button[value="8"]').click();
    cy.get('button[value="7"]').click();
    cy.get('button[value="*"]').click();
    cy.get('button[value="^"]').click();
    cy.get('button[value="6"]').click();
    cy.get('button[value="5"]').click();
    cy.get('button[value="4"]').click();
    cy.get('button[value="-"]').click();
    cy.get('button[value="/"]').click();
    cy.get('button[value="3"]').click();
    cy.get('button[value="2"]').click();
    cy.get('button[value="1"]').click();
    cy.get('button[value="+"]').click();
    cy.get('button[value="%"]').click();
    cy.get('button[value="."]').click();
    cy.get('button[value="0"]').click();
    cy.get('button[value="="]').click();
    cy.get('button[value="CE"]').click();
  });
});

describe('calculator', () => {
  it('should concat values', () => {
    cy.visit('/home');

    cy.get('button[value="1"]').click();
    cy.get('button[value="2"]').click();
    cy.get('button[value="3"]').click();
    cy.get('button[value="4"]').click();
    cy.get('button[value="5"]').click();
    cy.get('#displayValue', { timeout: 200 }).should('have.text', '12345');
  });
});

describe('calculator', () => {
  it('should navigate through pages', () => {
    cy.visit('/home');
    cy.visit('/settings');
    cy.visit('*');
  });
});

describe('calculator', () => {
  it('should change a theme', () => {
    cy.visit('/settings');

    cy.get('select[name="theme-select"]').select('dark');
    cy.get('select[name="theme-select"]').select('light');
    cy.get('select[name="theme-select"]').select('colored');
    cy.get('select[name="theme-select"]').select('monochromed');
  });
});

describe('calculator', () => {
  it('should change a language', () => {
    cy.visit('/settings');

    cy.get('select[name="language-select"]').select('english');
    cy.get('select[name="language-select"]').select('spanish');
    cy.get('select[name="language-select"]').select('russian');
    cy.get('select[name="language-select"]').select('chinese');
    cy.get('select[name="language-select"]').select('hindi');
  });
});

describe('calculator', () => {
  it('should clear the localStorage', () => {
    cy.visit('/settings');

    cy.get('button')
      .click()
      .should(() => {
        expect(localStorage.getItem('history'));
      });

    cy.clearLocalStorage(/history/).should((ls) => {
      expect(ls.getItem('history')).to.be.null;
    });
  });
});
