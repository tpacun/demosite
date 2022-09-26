const SYSTEM_URL = 'https://spektrix.dev.theopacun.com/iframedemo/'

const parentUrl = parent.document.URL
const parentQuery = parentUrl.toLowerCase().split('/')
const iframeString = parentQuery[parentQuery.length - 1].split('.')[0]

if (iframeString === 'loginlogout' || iframeString === 'forgotpassword' || iframeString === 'newaccount' ||iframeString === 'editaddress' ||iframeString === 'changepassword' ||iframeString === 'redeemgift' ||iframeString === 'classiccheckout' ||iframeString === 'forgotpassword') {
    // Use /secure/url
    document.write(`<iframe src="${SYSTEM_URL}website/secure/${iframeString}.aspx" frameborder="1"></iframe>`)
} else if (iframeString === 'expresscheckout') {
    // Use Express Checkout
    document.write(`<iframe src="${SYSTEM_URL}website/secure/checkout/v2" frameborder="1"></iframe>`)
} else {
    // Use regular iframe url
    document.write(`<iframe src="${SYSTEM_URL}website/${iframeString}.aspx" frameborder="1"></iframe>`)
}

