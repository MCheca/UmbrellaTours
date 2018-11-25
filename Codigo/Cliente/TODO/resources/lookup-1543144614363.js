(function(window, undefined) {
  var dictionary = {
    "04131c5f-aab7-4e9f-a3b6-37ee0ca7158a": "MAPA-Verde",
    "2213cc94-ad39-496b-87a6-b7753298499b": "lista_inscritos",
    "a8569e0a-1cb8-4dfc-ab6e-bcea5ed1156e": "MAPA-Amarillo",
    "dce04896-79ff-4dcc-b582-463ef240ae31": "perfil_turista",
    "4ab87adb-7f5d-4189-bbd7-db7bc44a30da": "Favorites_Filtros",
    "b68c4cf8-c89e-4605-92c2-a8376e999810": "inicio_turista",
    "c4fc2452-21d5-4656-a55b-7f36618187ba": "inscripcion",
    "e8c2dcb9-dd18-4618-a758-21daae2e6ed1": "Favorites_Aleman",
    "5b0f593f-1cb1-4e4e-9c7f-0f091ca5d7ca": "perfil_guia",
    "5f32ea34-bab4-4e71-b692-d22292a75a10": "Template 1 imported",
    "540b360b-807c-4d4d-a673-a929c5b7b190": "Template 1 imported_1",
    "3dfeede3-cc8d-4859-a6d0-457fd006649d": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default",
    "cc0c294c-b126-4770-9429-ef1b04d4bdc7": "default imported_1",
    "e8bb088b-e8d1-4cb3-8f53-603483017862": "default imported"
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