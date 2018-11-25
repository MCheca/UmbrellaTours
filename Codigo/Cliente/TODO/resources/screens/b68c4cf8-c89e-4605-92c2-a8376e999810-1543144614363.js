jQuery("#simulation")
  .on("click", ".s-b68c4cf8-c89e-4605-92c2-a8376e999810 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label-blue_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/04131c5f-aab7-4e9f-a3b6-37ee0ca7158a"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-b68c4cf8-c89e-4605-92c2-a8376e999810 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_3" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "action": "jimSystemTime"
                      },"0","5" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("orientationportrait", ".s-b68c4cf8-c89e-4605-92c2-a8376e999810 .orientationportrait", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-b68c4cf8-c89e-4605-92c2-a8376e999810")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Panel_1" ],
                    "width": {
                      "type": "percentage",
                      "value": "100"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "385"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_1" ],
                    "top": {
                      "type": "pinend",
                      "value": "0"
                    },
                    "left": {
                      "type": "pincenter",
                      "value": "0"
                    },
                    "containment": false
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Image_2" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "120"
                    },
                    "left": {
                      "type": "pincenter",
                      "value": "0"
                    },
                    "containment": false
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("orientationlandscape", ".s-b68c4cf8-c89e-4605-92c2-a8376e999810 .orientationlandscape", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-b68c4cf8-c89e-4605-92c2-a8376e999810")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Panel_1" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "414"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "385"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_1" ],
                    "top": {
                      "type": "pinbeginning",
                      "value": "100"
                    },
                    "left": {
                      "type": "pinbeginning",
                      "value": "15"
                    },
                    "containment": false
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Image_2" ],
                    "top": {
                      "type": "pinbeginning",
                      "value": "120"
                    },
                    "left": {
                      "type": "pinend",
                      "value": "130"
                    },
                    "containment": false
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });