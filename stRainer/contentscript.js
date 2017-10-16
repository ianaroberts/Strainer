chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  var i, w;
  var matchArray = new Array( );
  if (changeInfo.status == 'complete') {
    var justText = $( "body" ).text().toLowerCase();
    justText = justText.replace(/[1234567890`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    justText = justText.replace(/(\r\n|\n|\r)/gm," ");
    justText = justText.replace(/\s+/g," ");
    justText = justText.trim();
    textArray = justText.split(" ");
    console.log("at loop");
    for(i = 0; i < textArray.length; i++)
    {
        if(chrome.storage.sync.get(strainVulgar))
        {
          for(w = 0; w < vulgarList.length; w++)
          {
            if(textArray[i] == vulgarList[w])
            {
              matchArray.push(textArray[i]);
            }
          }
        }
        if(chrome.storage.sync.get(strainViolent))
        {
          for(w = 0; w < violentList.length; w++)
          {
            if(textArray[i] == violentList[w])
            {
              matchArray.push(textArray[i]);
            }
          }
        }
        if(chrome.storage.sync.get(strainPolitical))
        {
          for(w = 0; w < politicalList.length; w++)
          {
            if(textArray[i] == politicalList[w])
            {
              matchArray.push(textArray[i]);
            }
          }
        }
      }
    }
    console.log("at matching");
    if(matchArray.length > 0)
    {
      $( "div" ).each(function() {
        var shortText = $( this ).text().toLowerCase();
        shortText = shortText.replace(/[1234567890`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
        shortText = shortText.replace(/(\r\n|\n|\r)/gm," ");
        shortText = shortText.replace(/\s+/g," ");
        shortText = shortText.trim();
        finalArray = shortText.split(" ");
        for(i = 0; i < shortArray.length; i++)
        {
          for(w = 0; w < matchArray.length; w++)
          {
            if(shortArray[i] == matchArray[w])
            {
              $( this ).style.opacity = "0";
            }
          }
        }
      });
    }
});