// <script type="text/javascript" charset="utf-8">
//   // From // http://www.quirksmode.org/js/cookies.html
//   function readCookie(name) {
//     var nameEQ = name + "=";
//     var ca = document.cookie.split(';');
//     for(var i=0;i < ca.length;i++) {
//       var c = ca[i];
//       while (c.charAt(0)==' ') c = c.substring(1,c.length);
//       if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
//     }
//     return null;
//   }
//
//   // From http://stackoverflow.com/questions/1688657/how-do-i-extract-google-analytics-campaign-data-from-their-cookie-with-javascript
//   function parseAnalyticsCookie() {
//     var values = {};
//     var cookie = readCookie("__utmz");
//     if (cookie) {
//       var z = cookie.split('.');
//       if (z.length >= 4) {
//         var y = z[4].split('|');
//         for (i=0; i<y.length; i++) {
//           var pair = y[i].split("=");
//           values[pair[0]] = pair[1];
//         }
//       }
//     }
//     return values;
//   }
//
//   $(document).ready(function () {
//     function addFormElem(paramValue, fieldName) {
//       var $utmEl = $("<input type='hidden' name='" + fieldName + "' value='" + paramValue + "'>");
//       if (paramValue != "") {
//         $("form").first().prepend($utmEl);
//       }
//       console.log(paramValue);
//     }
//
//     // Note: Only change the values after ":" if they are different for you
//     // They are the same as you setup as tags in your email marketing provider
//     var utmParams = {
//       "utmcsr" : "USOURCE",
//       "utmcmd" : "UMEDIUM",
//       "utmccn" : "UCAMPAIGN",
//       "utmcct" : "UCONTENT",
//       "utmctr" : "UTERM"
//     };
//
//     function parseAndSetUTM() {
//       for (var cookieName in parseAnalyticsCookie()) {
//         addFormElem(parseAnalyticsCookie()[cookieName], utmParams[cookieName]);
//       }
//     }
//
//     setTimeout(parseAndSetUTM, 500);
//
//   });
// </script>
