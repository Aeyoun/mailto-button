function uriHandler( tab ) {
  if ( arguments.length == 2 ) // this is a ContextMenu click
     var tab = arguments[1];
  var mailto = "mailto:?subject=" + encodeURIComponent( tab.title )
    + "&body=" + encodeURIComponent( tab.title + "\r\n" + tab.url );
  chrome.tabs.create( { url: mailto, active: false },
    function( newTab ) {
      setTimeout( function() {
        chrome.tabs.remove( newTab.id ) },
        650 )
    }
  )
}

/* Toolbar button */
chrome.browserAction.onClicked.addListener( uriHandler );

/* Page context menu */
chrome.contextMenus.onClicked.addListener( uriHandler );

chrome.contextMenus.create( { id: "menuItem-emailpage", title: "Email page", contexts: [ "page" ] } );
