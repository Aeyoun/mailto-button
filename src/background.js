chrome.browserAction.onClicked.addListener( function( activeTab ) {
  var mailto = "mailto:?subject=" + encodeURIComponent( activeTab.title )
    + "&body=" + encodeURIComponent( activeTab.title + "\r\n" + activeTab.url );
  chrome.tabs.create( { url: mailto, active: false },
    function( newTab ) {
      setTimeout( function() {
        console.log(newTab.status);
        chrome.tabs.remove( newTab.id ) },
        500 )
    }
  )
} )