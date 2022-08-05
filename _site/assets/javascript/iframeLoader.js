const parentUrl = parent.document.URL
const parentQuery = parentUrl.toLowerCase().split('/')
const iframeString = parentQuery[parentQuery.length - 1].split('.')[0]

if (iframeString === 'loginlogout' || iframeString === 'forgotpassword' || iframeString === 'newaccount' ||iframeString === 'editaddress' ||iframeString === 'changepassword' ||iframeString === 'redeemgift' ||iframeString === 'classiccheckout' ||iframeString === 'forgotpassword') {
    // Use /secure/url
    document.write(`<iframe src="https://system.spektrix.com/ustraining1/website/secure/${iframeString}.aspx" frameborder="1"></iframe>`)
} else if (iframeString === 'eventdetails') {
    document.write(`<iframe src="https://system.spektrix.com/ustraining1/website/EventDetails.aspx?EventId=1001" frameborder="1"></iframe>`)
} else if (iframeString === 'chooseseatsreserved') {
    document.write(`<iframe src="https://system.spektrix.com/ustraining1/website/ChooseSeats.aspx?EventInstanceId=3254" frameborder="1"></iframe>`)
} else if (iframeString === 'chooseseatsunreserved') {
    document.write(`<iframe src="https://system.spektrix.com/ustraining1/website/ChooseSeats.aspx?EventInstanceId=1601" frameborder="1"></iframe>`)
} else if (iframeString === 'expresscheckout') {
    // Use Express Checkout
    document.write(`<iframe src="https://system.spektrix.com/ustraining1/website/secure/checkout/v2" frameborder="1"></iframe>`)
} else {
    // Use regular iframe url
    document.write(`<iframe src="https://system.spektrix.com/ustraining1/website/${iframeString}.aspx" frameborder="1"></iframe>`)
}

