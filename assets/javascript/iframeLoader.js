const parentUrl = parent.document.URL
const parentQuery = parentUrl.toLowerCase().split('/')
const iframeString = parentQuery[parentQuery.length - 1].split('.')[0]
// For specific loading/iframe links...
// const iframeLoadRequired = [
//     'chooseseats',
//     'additionaldetails',]
document.write(`<iframe src="https://system.spektrix.com/ustraining1/website/${iframeString}.aspx" frameborder="1"></iframe>`)
