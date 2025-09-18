import { component$, useSignal, $ } from '@builder.io/qwik';

export default component$(() => {
  const loanAmount = useSignal(500000);
  const interestRate = useSignal(6.5);
  const loanTerm = useSignal(30);
  const downPayment = useSignal(100000);
  const propertyTax = useSignal(6000);
  const insurance = useSignal(1200);
  const pmi = useSignal(0);

  const monthlyPayment = useSignal(0);
  const totalInterest = useSignal(0);
  const totalCost = useSignal(0);

  const updateCalculations = $(() => {
    // Calculate payment directly here to avoid serialization issues
    const principal = loanAmount.value - downPayment.value;
    const monthlyRate = interestRate.value / 100 / 12;
    const numPayments = loanTerm.value * 12;
    
    let payment: number;
    if (monthlyRate === 0) {
      payment = principal / numPayments;
    } else {
      payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                (Math.pow(1 + monthlyRate, numPayments) - 1);
    }
    
    const totalPayments = payment * numPayments;
    const interest = totalPayments - principal;
    const total = totalPayments + propertyTax.value + insurance.value + pmi.value;
    
    monthlyPayment.value = Math.round(payment);
    totalInterest.value = Math.round(interest);
    totalCost.value = Math.round(total);
  });

  // Update calculations when values change
  const updateValue = $((field: string, value: number) => {
    switch (field) {
      case 'loanAmount':
        loanAmount.value = value;
        break;
      case 'interestRate':
        interestRate.value = value;
        break;
      case 'loanTerm':
        loanTerm.value = value;
        break;
      case 'downPayment':
        downPayment.value = value;
        break;
      case 'propertyTax':
        propertyTax.value = value;
        break;
      case 'insurance':
        insurance.value = value;
        break;
      case 'pmi':
        pmi.value = value;
        break;
    }
    updateCalculations();
  });

  // Initialize calculations
  updateCalculations();

  return (
    <div class="mortgage-calculator-container">
      <style>{`
        .mortgage-calculator-container {
          max-width: 800px;
          margin: 2rem auto;
          padding: 2rem;
          background: #F7F9FC;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        
        .calculator-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .calculator-header h2 {
          color: #0A2540;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        
        .calculator-header p {
          color: #3A8DDE;
          font-size: 1.1rem;
        }
        
        .calculator-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        
        .input-section {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        
        .results-section {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: #0A2540;
          font-weight: 600;
        }
        
        .form-group input {
          width: 100%;
          padding: 0.75rem;
          border: 2px solid #e2e8f0;
          border-radius: 6px;
          font-size: 1rem;
          transition: border-color 0.2s;
        }
        
        .form-group input:focus {
          outline: none;
          border-color: #3A8DDE;
        }
        
        .input-with-symbol {
          position: relative;
        }
        
        .input-with-symbol::before {
          content: '$';
          position: absolute;
          left: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          color: #6a6d72;
          font-weight: 600;
        }
        
        .input-with-symbol input {
          padding-left: 2rem;
        }
        
        .percentage-input::before {
          content: '%';
          left: auto;
          right: 0.75rem;
        }
        
        .percentage-input input {
          padding-right: 2rem;
        }
        
        .result-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .result-item:last-child {
          border-bottom: none;
          font-weight: 700;
          font-size: 1.1rem;
          color: #0A2540;
        }
        
        .result-label {
          color: #6a6d72;
        }
        
        .result-value {
          color: #0A2540;
          font-weight: 600;
        }
        
        .monthly-payment {
          background: #3A8DDE;
          color: white;
          padding: 1rem;
          border-radius: 8px;
          text-align: center;
          margin-bottom: 1rem;
        }
        
        .monthly-payment .amount {
          font-size: 2rem;
          font-weight: 700;
        }
        
        .monthly-payment .label {
          font-size: 1rem;
          opacity: 0.9;
        }

        @media (max-width: 768px) {
          .calculator-content {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .mortgage-calculator-container {
            margin: 1rem;
            padding: 1.5rem;
          }
          
          .calculator-header h2 {
            font-size: 1.5rem;
          }
          
          .monthly-payment .amount {
            font-size: 1.5rem;
          }
        }
      `}</style>
      
      <div class="calculator-header">
        <h2>Mortgage Calculator</h2>
        <p>Calculate your monthly mortgage payment and total costs</p>
      </div>
      
      <div class="calculator-content">
        <div class="input-section">
          <div class="form-group">
            <label for="loanAmount">Home Price</label>
            <div class="input-with-symbol">
              <input
                type="number"
                id="loanAmount"
                value={loanAmount.value}
                onInput$={(event) => updateValue('loanAmount', parseInt((event.target as HTMLInputElement).value) || 0)}
              />
            </div>
          </div>
          
          <div class="form-group">
            <label for="downPayment">Down Payment</label>
            <div class="input-with-symbol">
              <input
                type="number"
                id="downPayment"
                value={downPayment.value}
                onInput$={(event) => updateValue('downPayment', parseInt((event.target as HTMLInputElement).value) || 0)}
              />
            </div>
          </div>
          
          <div class="form-group">
            <label for="interestRate">Interest Rate</label>
            <div class="input-with-symbol percentage-input">
              <input
                type="number"
                id="interestRate"
                step="0.1"
                value={interestRate.value}
                onInput$={(event) => updateValue('interestRate', parseFloat((event.target as HTMLInputElement).value) || 0)}
              />
            </div>
          </div>
          
          <div class="form-group">
            <label for="loanTerm">Loan Term (Years)</label>
            <input
              type="number"
              id="loanTerm"
              value={loanTerm.value}
              onInput$={(event) => updateValue('loanTerm', parseInt((event.target as HTMLInputElement).value) || 0)}
            />
          </div>
          
          <div class="form-group">
            <label for="propertyTax">Annual Property Tax</label>
            <div class="input-with-symbol">
              <input
                type="number"
                id="propertyTax"
                value={propertyTax.value}
                onInput$={(event) => updateValue('propertyTax', parseInt((event.target as HTMLInputElement).value) || 0)}
              />
            </div>
          </div>
          
          <div class="form-group">
            <label for="insurance">Annual Insurance</label>
            <div class="input-with-symbol">
              <input
                type="number"
                id="insurance"
                value={insurance.value}
                onInput$={(event) => updateValue('insurance', parseInt((event.target as HTMLInputElement).value) || 0)}
              />
            </div>
          </div>
        </div>
        
        <div class="results-section">
          <div class="monthly-payment">
            <div class="amount">${monthlyPayment.value.toLocaleString()}</div>
            <div class="label">Monthly Payment</div>
          </div>
          
          <div class="result-item">
            <span class="result-label">Principal & Interest</span>
            <span class="result-value">${monthlyPayment.value.toLocaleString()}</span>
          </div>
          
          <div class="result-item">
            <span class="result-label">Property Tax</span>
            <span class="result-value">${Math.round(propertyTax.value / 12).toLocaleString()}</span>
          </div>
          
          <div class="result-item">
            <span class="result-label">Insurance</span>
            <span class="result-value">${Math.round(insurance.value / 12).toLocaleString()}</span>
          </div>
          
          <div class="result-item">
            <span class="result-label">Total Interest Paid</span>
            <span class="result-value">${totalInterest.value.toLocaleString()}</span>
          </div>
          
          <div class="result-item">
            <span class="result-label">Total Cost of Loan</span>
            <span class="result-value">${totalCost.value.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
});
