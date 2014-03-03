function uriHandler( tab ) {
  var mailto = "mailto:?subject=" + encodeURIComponent( tab.title )
    + "&body=" + encodeURIComponent( tab.title + "\r\n" + tab.url );
  chrome.tabs.create( { url: mailto, active: false },
    function( newTab ) {
      setTimeout( function() {
        chrome.tabs.remove( newTab.id ) },
        500 )
    }
  )
}

/* Toolbar button */
chrome.browserAction.onClicked.addListener( uriHandler );

/* Page context menu */
chrome.contextMenus.onClicked.addListener( uriHandler );

chrome.contextMenus.create( { id: "menuItem-emailpage", title: "Email page", contexts: [ "page" ] } );
