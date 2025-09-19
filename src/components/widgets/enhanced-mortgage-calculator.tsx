import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik'

export default component$(() => {
  const loanAmount = useSignal(500000)
  const interestRate = useSignal(6.5)
  const loanTerm = useSignal(30)
  const downPayment = useSignal(100000)
  const propertyTax = useSignal(6000)
  const insurance = useSignal(1200)
  const pmi = useSignal(0)
  const hoa = useSignal(0)

  const monthlyPayment = useSignal(0)
  const totalInterest = useSignal(0)
  const totalCost = useSignal(0)
  const loanToValue = useSignal(0)
  const monthlyIncome = useSignal(0)
  const debtToIncome = useSignal(0)

  const updateCalculations = $(() => {
    const principal = loanAmount.value - downPayment.value
    const monthlyRate = interestRate.value / 100 / 12
    const numPayments = loanTerm.value * 12

    let payment: number
    if (monthlyRate === 0) {
      payment = principal / numPayments
    } else {
      payment =
        (principal * (monthlyRate * (1 + monthlyRate) ** numPayments)) /
        ((1 + monthlyRate) ** numPayments - 1)
    }

    const totalPayments = payment * numPayments
    const interest = totalPayments - principal
    const totalMonthly =
      payment + propertyTax.value / 12 + insurance.value / 12 + pmi.value / 12 + hoa.value / 12
    const total = totalPayments + propertyTax.value + insurance.value + pmi.value + hoa.value

    monthlyPayment.value = Math.round(payment)
    totalInterest.value = Math.round(interest)
    totalCost.value = Math.round(total)
    loanToValue.value = Math.round((principal / loanAmount.value) * 100)

    // Calculate debt-to-income ratio if monthly income is provided
    if (monthlyIncome.value > 0) {
      debtToIncome.value = Math.round((totalMonthly / monthlyIncome.value) * 100)
    }
  })

  const updateValue = $((field: string, value: number) => {
    switch (field) {
      case 'loanAmount':
        loanAmount.value = value
        break
      case 'interestRate':
        interestRate.value = value
        break
      case 'loanTerm':
        loanTerm.value = value
        break
      case 'downPayment':
        downPayment.value = value
        break
      case 'propertyTax':
        propertyTax.value = value
        break
      case 'insurance':
        insurance.value = value
        break
      case 'pmi':
        pmi.value = value
        break
      case 'hoa':
        hoa.value = value
        break
      case 'monthlyIncome':
        monthlyIncome.value = value
        break
    }
    updateCalculations()
  })

  // Track calculator usage
  useVisibleTask$(() => {
    updateCalculations()

    // Track initial calculator load
    if (typeof window !== 'undefined' && window.enhancedRealEstateAnalytics) {
      window.enhancedRealEstateAnalytics.trackWidgetInteraction(
        'mortgage_calculator',
        'calculator_opened',
        { depth: 'moderate', value: 1 }
      )
    }
  })

  const trackCalculation = $(() => {
    if (typeof window !== 'undefined' && window.enhancedRealEstateAnalytics) {
      window.enhancedRealEstateAnalytics.trackMortgageCalculation(
        loanAmount.value,
        monthlyPayment.value,
        {
          interestRate: interestRate.value,
          loanTerm: loanTerm.value,
          downPayment: downPayment.value,
          propertyTax: propertyTax.value,
          insurance: insurance.value,
          pmi: pmi.value,
          hoa: hoa.value,
          monthlyIncome: monthlyIncome.value,
          debtToIncome: debtToIncome.value,
        }
      )
    }
  })

  const resetCalculator = $(() => {
    loanAmount.value = 500000
    interestRate.value = 6.5
    loanTerm.value = 30
    downPayment.value = 100000
    propertyTax.value = 6000
    insurance.value = 1200
    pmi.value = 0
    hoa.value = 0
    monthlyIncome.value = 0
    updateCalculations()
  })

  const getAffordabilityStatus = () => {
    if (monthlyIncome.value === 0) return 'unknown'
    const totalMonthly =
      monthlyPayment.value +
      propertyTax.value / 12 +
      insurance.value / 12 +
      pmi.value / 12 +
      hoa.value / 12
    const ratio = (totalMonthly / monthlyIncome.value) * 100

    if (ratio <= 28) return 'excellent'
    if (ratio <= 36) return 'good'
    if (ratio <= 43) return 'acceptable'
    return 'high-risk'
  }

  const affordabilityStatus = getAffordabilityStatus()

  return (
    <div class="enhanced-mortgage-calculator-container">
      <style>{`
        .enhanced-mortgage-calculator-container {
          max-width: 1000px;
          margin: 2rem auto;
          padding: 2rem;
          background: #F7F9FC;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          border: 1px solid #e2e8f0;
        }
        
        .calculator-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .calculator-header h2 {
          color: #0A2540;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        
        .calculator-header p {
          color: #3A8DDE;
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }
        
        .calculator-tabs {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
          background: white;
          border-radius: 12px;
          padding: 0.5rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        
        .tab-button {
          background: transparent;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          color: #6a6d72;
        }
        
        .tab-button.active {
          background: #3A8DDE;
          color: white;
        }
        
        .calculator-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        
        .input-section {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        
        .results-section {
          background: white;
          padding: 2rem;
          border-radius: 12px;
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
          padding: 0.875rem;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
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
          left: 0.875rem;
          top: 50%;
          transform: translateY(-50%);
          color: #6a6d72;
          font-weight: 600;
          z-index: 1;
        }
        
        .input-with-symbol input {
          padding-left: 2.5rem;
        }
        
        .percentage-input::before {
          content: '%';
          left: auto;
          right: 0.875rem;
        }
        
        .percentage-input input {
          padding-right: 2.5rem;
        }
        
        .monthly-payment {
          background: linear-gradient(135deg, #3A8DDE 0%, #16B286 100%);
          color: white;
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
          margin-bottom: 1.5rem;
        }
        
        .monthly-payment .amount {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        
        .monthly-payment .label {
          font-size: 1.2rem;
          opacity: 0.9;
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
        
        .affordability-status {
          margin-top: 1rem;
          padding: 1rem;
          border-radius: 8px;
          text-align: center;
          font-weight: 600;
        }
        
        .affordability-status.excellent {
          background: #d1fae5;
          color: #065f46;
        }
        
        .affordability-status.good {
          background: #dbeafe;
          color: #1e40af;
        }
        
        .affordability-status.acceptable {
          background: #fef3c7;
          color: #92400e;
        }
        
        .affordability-status.high-risk {
          background: #fee2e2;
          color: #991b1b;
        }
        
        .calculator-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-top: 2rem;
        }
        
        .action-button {
          padding: 0.875rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
          font-size: 1rem;
        }
        
        .calculate-button {
          background: #3A8DDE;
          color: white;
        }
        
        .calculate-button:hover {
          background: #2a7bc8;
          transform: translateY(-1px);
        }
        
        .reset-button {
          background: #f8f9fa;
          color: #0A2540;
          border: 2px solid #e2e8f0;
        }
        
        .reset-button:hover {
          background: #e2e8f0;
          transform: translateY(-1px);
        }

        @media (max-width: 768px) {
          .calculator-content {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .enhanced-mortgage-calculator-container {
            margin: 1rem;
            padding: 1.5rem;
          }
          
          .calculator-header h2 {
            font-size: 2rem;
          }
          
          .monthly-payment .amount {
            font-size: 2rem;
          }
          
          .calculator-actions {
            flex-direction: column;
            align-items: center;
          }
          
          .action-button {
            width: 200px;
          }
        }
      `}</style>

      <div class="calculator-header">
        <h2>Enhanced Mortgage Calculator</h2>
        <p>Calculate your monthly payment and affordability with detailed analysis</p>
      </div>

      <div class="calculator-tabs">
        <button class="tab-button active">Basic Calculator</button>
        <button class="tab-button">Advanced Analysis</button>
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
                onInput$={(event) =>
                  updateValue(
                    'loanAmount',
                    Number.parseInt((event.target as HTMLInputElement).value) || 0
                  )
                }
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
                onInput$={(event) =>
                  updateValue(
                    'downPayment',
                    Number.parseInt((event.target as HTMLInputElement).value) || 0
                  )
                }
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
                onInput$={(event) =>
                  updateValue(
                    'interestRate',
                    Number.parseFloat((event.target as HTMLInputElement).value) || 0
                  )
                }
              />
            </div>
          </div>

          <div class="form-group">
            <label for="loanTerm">Loan Term (Years)</label>
            <input
              type="number"
              id="loanTerm"
              value={loanTerm.value}
              onInput$={(event) =>
                updateValue(
                  'loanTerm',
                  Number.parseInt((event.target as HTMLInputElement).value) || 0
                )
              }
            />
          </div>

          <div class="form-group">
            <label for="propertyTax">Annual Property Tax</label>
            <div class="input-with-symbol">
              <input
                type="number"
                id="propertyTax"
                value={propertyTax.value}
                onInput$={(event) =>
                  updateValue(
                    'propertyTax',
                    Number.parseInt((event.target as HTMLInputElement).value) || 0
                  )
                }
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
                onInput$={(event) =>
                  updateValue(
                    'insurance',
                    Number.parseInt((event.target as HTMLInputElement).value) || 0
                  )
                }
              />
            </div>
          </div>

          <div class="form-group">
            <label for="hoa">Monthly HOA Fees</label>
            <div class="input-with-symbol">
              <input
                type="number"
                id="hoa"
                value={hoa.value}
                onInput$={(event) =>
                  updateValue('hoa', Number.parseInt((event.target as HTMLInputElement).value) || 0)
                }
              />
            </div>
          </div>

          <div class="form-group">
            <label for="monthlyIncome">Monthly Income (for affordability)</label>
            <div class="input-with-symbol">
              <input
                type="number"
                id="monthlyIncome"
                value={monthlyIncome.value}
                onInput$={(event) =>
                  updateValue(
                    'monthlyIncome',
                    Number.parseInt((event.target as HTMLInputElement).value) || 0
                  )
                }
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
            <span class="result-label">HOA Fees</span>
            <span class="result-value">${hoa.value.toLocaleString()}</span>
          </div>

          <div class="result-item">
            <span class="result-label">Total Monthly Payment</span>
            <span class="result-value">
              $
              {(
                monthlyPayment.value +
                Math.round(propertyTax.value / 12) +
                Math.round(insurance.value / 12) +
                hoa.value
              ).toLocaleString()}
            </span>
          </div>

          <div class="result-item">
            <span class="result-label">Total Interest Paid</span>
            <span class="result-value">${totalInterest.value.toLocaleString()}</span>
          </div>

          <div class="result-item">
            <span class="result-label">Total Cost of Loan</span>
            <span class="result-value">${totalCost.value.toLocaleString()}</span>
          </div>

          <div class="result-item">
            <span class="result-label">Loan-to-Value Ratio</span>
            <span class="result-value">{loanToValue.value}%</span>
          </div>

          {monthlyIncome.value > 0 && (
            <>
              <div class="result-item">
                <span class="result-label">Debt-to-Income Ratio</span>
                <span class="result-value">{debtToIncome.value}%</span>
              </div>

              <div class={`affordability-status ${affordabilityStatus}`}>
                {affordabilityStatus === 'excellent' && '✅ Excellent Affordability'}
                {affordabilityStatus === 'good' && '✅ Good Affordability'}
                {affordabilityStatus === 'acceptable' && '⚠️ Acceptable Risk'}
                {affordabilityStatus === 'high-risk' && '❌ High Risk'}
              </div>
            </>
          )}
        </div>
      </div>

      <div class="calculator-actions">
        <button class="action-button calculate-button" onClick$={trackCalculation}>
          Calculate & Track
        </button>
        <button class="action-button reset-button" onClick$={resetCalculator}>
          Reset Calculator
        </button>
      </div>
    </div>
  )
})
