const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Scoop up all the data from the form
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const service = formData.get('service');
    const rawMessage = formData.get('message');

    // Combine first and last name
    const name = `${firstName} ${lastName}`;
    
    // Pass each field as its own distinct property to match the new backend
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        name: name, 
        email: email, 
        phone: phone, 
        service: service, 
        message: rawMessage 
      }),
    });

    if (response.ok) {
      // Flips the switch to show your success screen
      setIsSubmitted(true);
    } else {
      alert("There was an error sending your message. Please try again.");
    }
  };
