import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';

describe('Loan EMI details', () => {
  beforeEach(() => {
    // The component reads its EMI data from local storage when it is created.
    localStorage.setItem(
      'emi',
      JSON.stringify({
        interestRate: 8,
        monthlyEMI: 500,
        principal: 10000,
        interest: 500,
        totalAmount: 10500,
      })
    );
  });

  afterEach(() => {
    localStorage.removeItem('emi');
  });

  it('shows the EMI values saved in local storage', async () => {
    const element = await fixture(html`<loanemi-details></loanemi-details>`);
    const text = element.shadowRoot.textContent;

    expect(text).to.include('8');
    expect(text).to.include('500');
    expect(text).to.include('10000');
    expect(text).to.include('10500');
  });

  it('shows cancel and continue buttons', async () => {
    const element = await fixture(html`<loanemi-details></loanemi-details>`);

    expect(element.shadowRoot.querySelector('.cancel-btn')).to.exist;
    expect(element.shadowRoot.querySelector('.continue-btn')).to.exist;
  });
});
