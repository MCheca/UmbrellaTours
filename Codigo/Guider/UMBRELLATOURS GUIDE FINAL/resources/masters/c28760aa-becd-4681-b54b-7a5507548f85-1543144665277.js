jQuery("#simulation")
  .on("click", ".m-c28760aa-becd-4681-b54b-7a5507548f85 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#m-c28760aa-Image_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-c28760aa-becd-4681-b54b-7a5507548f85 #m-c28760aa-Image_16 > svg": {
                      "attributes": {
                        "overlay": "#0AA2D5"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-c28760aa-becd-4681-b54b-7a5507548f85 #m-c28760aa-Image_23 > svg": {
                      "attributes": {
                        "overlay": "#999999"
                      }
                    }
                  },{
                    "#m-c28760aa-becd-4681-b54b-7a5507548f85 #m-c28760aa-Image_19 > svg": {
                      "attributes": {
                        "overlay": "#999999"
                      }
                    }
                  } ],
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
    } else if(jFirer.is("#m-c28760aa-Image_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-c28760aa-becd-4681-b54b-7a5507548f85 #m-c28760aa-Image_23 > svg": {
                      "attributes": {
                        "overlay": "#0AA2D5"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-c28760aa-becd-4681-b54b-7a5507548f85 #m-c28760aa-Image_16 > svg": {
                      "attributes": {
                        "overlay": "#999999"
                      }
                    }
                  },{
                    "#m-c28760aa-becd-4681-b54b-7a5507548f85 #m-c28760aa-Image_19 > svg": {
                      "attributes": {
                        "overlay": "#999999"
                      }
                    }
                  } ],
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