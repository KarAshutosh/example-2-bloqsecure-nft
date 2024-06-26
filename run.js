function run(){
    fetch("http://bloqfinpayments.us-east-1.elasticbeanstalk.com/643d0e9d1be6ac285fbb15c6", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
        items: 
            { 
                contractID: '643d0e9d1be6ac285fbb15c6',
                priceInEth: 0.0001,
                gasLimit: 0.001,
                slippageLimit: 0.05,
                successURL: 'http://localhost:3000/success',
                cancelURL: 'http://localhost:3000/cancel',
                name: "Rare in-App Item",
                input0: " ",
                input1: " ",
                input2: " ",
                input3: " ",
                input4: " ",
                input5: " ",
                input6: " ",
                input7: " ",
                input8: " ",
                input9: " ",
            },
            
        }),
    })
    .then(res => {
        if (res.ok) return res.json()
        return res.json().then(json => Promise.reject(json))
    })
    .then(({ url }) => {
        var stripeURL = url
        res.redirect(stripeURL);
        // window.location = url
        // res.json({ url: stripeURL }) 
    })
    // .then(({ url }) => {
    //     window.location = url
    // })
    .catch(e => {
      console.error(e.error)
    })
}

run()