function calculateQuotation(event) {
    event.preventDefault();
  
    const locationSelect = document.getElementById('location');
    const location = locationSelect.options[locationSelect.selectedIndex].value;
    const entryDate = document.getElementById("entryDate").value;
    const entryTime = document.getElementById("entryTime").value;
    const exitDate = document.getElementById("exitDate").value;
    const exitTime = document.getElementById("exitTime").value;
  
    if (!entryDate || !entryTime || !exitDate || !exitTime) {
      resultElement.textContent = "Please enter valid date and time values.";
      categoryElement.textContent = "";
      return;
    }
  
    const prices = {
      luton: 100,
      heathrow: 50,
      gatwick: 50,
    };
  
    const pricePerHour = prices[location] || 0;
  
    // Calculate the duration based on the input values
    const entryDateTime = new Date(`${entryDate}T${entryTime}`);
    const exitDateTime = new Date(`${exitDate}T${exitTime}`);
    const duration = (exitDateTime - entryDateTime) / 3600000;
  
    if (duration <= 0) {
      alert('Exit date and time must be later than entry date and time.');
      return;
    }
  
    // Calculate the quotation based on the duration and location
    const quotation = duration * pricePerHour;
  
    resultElement.textContent = `Your quotation is: Ksh${quotation.toFixed(2)}`;
    alert(`Your quotation is: Ksh${quotation.toFixed(2)}`);
  }
      
      

      
  
     
