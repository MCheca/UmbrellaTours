(function(window, undefined) {
  var dictionary = {
    "72dabad1-f713-40c4-935a-aff87261dd66": "TOURS APP GUIAS",
    "22679d61-1d37-4452-ba01-7c03bda1354c": "PERFIL APP GUIAS",
    "7ba18fed-b7bb-4995-a759-684284fd18e3": "WEATHER APP GUIAS",
    "76349ede-9800-410a-a9bb-daba2fec3f7c": "Inicio APP GUÍAS",
    "2d9f66c5-ab0c-442f-9b24-c2046d2ae26e": "REGISTRO GRACIAS APP GUIAS",
    "e2c55760-cdbb-48d5-bd04-a25f7f5e66e1": "MAIN APP GUIAS",
    "5bef7c80-528e-4c60-ae1b-e0d6fd5ee865": "REGISTRO APP GUÍAS",
    "60b3c468-c53b-44bf-90e5-75a1e9989e39": "Template 1 imported",
    "3ef74159-0024-4e4d-ac51-05dfa48e6025": "Template 1",
    "c28760aa-becd-4681-b54b-7a5507548f85": "Bottombar",
    "0a0e234e-27ff-48d3-b11b-522abfef9c23": "topbar",
    "9060db04-5349-4a71-8d85-c6e2533a1912": "default imported_1",
    "87bb0990-b30e-487b-9538-5395fa8621a7": "default imported",
    "daf63898-ebc8-4146-8c70-1403e76097be": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);