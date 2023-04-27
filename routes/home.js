const express = require('express')
const router = express.Router()

// Define routes
router.get('/', (req, res) => {
    // Render the 'home' view with Handlebars
    res.render('index', { title: 'Hello World!' });
});

router.get('/success', (req, res) => {
    // Render the 'home' view with Handlebars
    res.render('success', { title: 'Hello World!' });
});

router.get('/cancel', (req, res) => {
    // Render the 'home' view with Handlebars
    res.render('cancel', { title: 'Hello World!' });
});

router.post("/buy", async (req, res) => {
    // fetch("http://payment-api.bloqfin.com/payment/62fa188609190a14ff23e798", {
    fetch("http://payment.bloqsecure.com/payment/62fa188609190a14ff23e798", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
        items: 
            { 
                contractID: '62fa188609190a14ff23e798',
                priceInEth: 0.0001,
                gasLimit: 0.001,
                slippageLimit: 0.05,
                successURL: 'http://localhost:5500/User/success.html',
                cancelURL: 'http://localhost:5500/User/cancel.html',
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
        // res.json({ url: stripeURL }) 
        res.status(301).redirect(stripeURL)
    })
    .catch(e => {
      console.error(e.error)
    })
});

module.exports = router
