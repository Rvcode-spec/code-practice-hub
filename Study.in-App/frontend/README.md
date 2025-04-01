 useEffect(()=>{
        const auth = localStorage.getItem('user')
        if (auth) {
            navigate('/')
        }
      },)

    const collectDate= async(e)=>{
        e.preventDefault();
        console.log(name, email, password); // Check the Value 

        let result = await fetch('http://localhost:5000/SignUp/',{
            method: 'POST',
            body: JSON.stringify({name,email,password}), // // Convert object to JSON string
            headers:{
                'Content-Type': "application/json", // Correct header to indicate JSON content
            },
        });

        result = await result.json //Corrected `.json()` call
        console.log('Response from server:', result);
        
        // console.log(result); //login
        if (result) {
          localStorage.setItem("user", JSON.stringify(result)); 
          navigate("/");
      } else {
          alert("Invalid credentials");
      }

    }