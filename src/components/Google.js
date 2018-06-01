export const loadGoogleScript = () => {
  const scriptTag = document.createElement('script')
  const metaTag = document.createElement('meta')
  scriptTag.src = 'https://apis.google.com/js/platform.js?onload=init'
  metaTag.name = 'google-signin-client_id'
  metaTag.content = '210042903162-tpjc1m45jags4qntplrcr9odmd0v2flv.apps.googleusercontent.com'
  document.head.appendChild(scriptTag)
  document.head.appendChild(metaTag)

  window.init = () => {
    signOut()
    renderGoogleButton()
  }
}


export const signOut = () => {
  window.gapi.load('auth2', function() {
    window.gapi.auth2.init().then(() => {
      window.gapi.auth2.getAuthInstance().signOut();
    })
  });
}


export const renderGoogleButton = () => {
  window.gapi.signin2.render('my-signin2', {
    'scope': 'profile email',
    'height': 36
  })
}

export const signIn = (callback) => {
    window.gapi.auth2.getAuthInstance().signIn().then((data) => {
      callback(data)
    });
}
