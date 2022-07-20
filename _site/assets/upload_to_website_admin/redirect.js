/*
 * By default, the Electron (or underlying Chrome instance, to be more precise) will not allow
 * javascript communication between parent window and an <iframe>. Which makes it hard to cover
 * scenarios when you want to do something after an action has been performed inside the <iframe>.
 * This example shows how to react on web reqest from within <iframe>.
 *
 * The 'onBeforeRequest' listener is documented here:
 * http://electron.atom.io/docs/api/session/#webrequestonbeforerequestfilter-listener 
 */

app.on('ready', () => {
    let myWindow = new BrowserWindow({
      width: 800,
      height: 800,
      center: true
    });
    
    // Listen to all requests in order to catch the one you want to react to. For example on
    // link click, form submit, etc.
    // This hack is needed, because it's otherwise not possible to react to javascript events
    // within an <iframe> due to browser security/sandboxing when iframe url is on different domain.
    myWindow.webContents.session.webRequest.onBeforeRequest({}, (details, callback) => {
      if (details.url.endsWith('/actions/submit/')) {
        // do your stuff ...
        
        // ... for example, block the submit
        callback({ cancel: true });
        myWindow.close();
        
        // ... or open new electron window, etc.
      }
      callback({ cancel: false });
    });
    
    // replace with whatever html you want to load in your electron window
    myWindow.loadURL(`file://${__dirname}/index.html`);
  });