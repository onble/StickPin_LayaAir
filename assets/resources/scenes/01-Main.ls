{
  "_$ver": 1,
  "_$id": "lx8mwule",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "width": 720,
  "height": 1280,
  "_$child": [
    {
      "_$id": "5mm87mm8",
      "_$type": "Image",
      "name": "Circle",
      "x": 360,
      "y": 360.00000000000034,
      "width": 300,
      "height": 300,
      "anchorX": 0.5,
      "anchorY": 0.5,
      "_mouseState": 2,
      "skin": "res://f358d433-bb3e-4d13-9ae5-caa74cae759c",
      "color": "#000000",
      "_$comp": [
        {
          "_$type": "7b9c0dc3-01e9-4c87-b36f-80c216bb635a",
          "scriptPath": "../src/Circle.ts",
          "rotateSpeed": 90
        }
      ]
    },
    {
      "_$id": "juks1vvm",
      "_$type": "Sprite",
      "name": "Position1",
      "x": 360,
      "y": 1311,
      "width": 100,
      "height": 100,
      "visible": false
    },
    {
      "_$id": "f76wdhkc",
      "_$type": "Sprite",
      "name": "Position2",
      "x": 360,
      "y": 919,
      "width": 100,
      "height": 100,
      "visible": false
    },
    {
      "_$id": "zqjl8z23",
      "_$type": "Sprite",
      "name": "Position3",
      "x": 360,
      "y": 508,
      "width": 100,
      "height": 100,
      "visible": false
    },
    {
      "_$id": "r10hr1pn",
      "_$type": "Sprite",
      "name": "GameManager",
      "width": 100,
      "height": 100,
      "_$comp": [
        {
          "_$type": "be9778dc-1684-499b-a245-c3ea661858bf",
          "scriptPath": "../src/GameManager.ts",
          "p1": {
            "_$ref": "juks1vvm"
          },
          "p2": {
            "_$ref": "f76wdhkc"
          },
          "p3": {
            "_$ref": "zqjl8z23"
          },
          "pinPrefab": {
            "_$uuid": "8fd6b70c-006d-4836-9f67-547bac5ac4b4",
            "_$type": "Prefab"
          },
          "moveDuration": 0.2,
          "circleNode": {
            "_$ref": "5mm87mm8"
          },
          "scoreLabel": {
            "_$ref": "cl4wzzkj"
          }
        }
      ]
    },
    {
      "_$id": "cl4wzzkj",
      "_$type": "Text",
      "name": "ScoreLabel",
      "x": 206,
      "y": 209,
      "width": 305,
      "height": 303,
      "text": "0",
      "fontSize": 180,
      "color": "#FFFFFF",
      "align": "center",
      "valign": "middle",
      "leading": 2
    },
    {
      "_$id": "bt9206uk",
      "_$type": "Box",
      "name": "GameOver",
      "width": 720,
      "height": 1280,
      "visible": false,
      "left": 0,
      "right": 0,
      "top": 0,
      "bottom": 0,
      "_$comp": [
        {
          "_$type": "f29ad6c9-9a68-4246-887f-7574167e6bf1",
          "scriptPath": "../src/GameOverManager.ts"
        }
      ],
      "_$child": [
        {
          "_$id": "uehxqpbg",
          "_$type": "Box",
          "name": "blackBackground",
          "width": 720,
          "height": 1280,
          "_mouseState": 2,
          "left": 0,
          "right": 0,
          "top": 0,
          "bottom": 0,
          "bgColor": "rgba(0, 0, 0, 0.5882352941176471)"
        },
        {
          "_$id": "kwteysr3",
          "_$type": "Box",
          "name": "ButtonGroup",
          "x": -1,
          "y": 710,
          "width": 719,
          "height": 567,
          "_$child": [
            {
              "_$id": "xe8e25dk",
              "_$type": "Image",
              "name": "Reset",
              "x": 197,
              "y": 143,
              "width": 303,
              "height": 99,
              "skin": "res://597012e9-10df-4632-ae7d-5a90334dccbc",
              "useSourceSize": true,
              "color": "#ffffff",
              "_$child": [
                {
                  "_$id": "6nmecilo",
                  "_$type": "Text",
                  "name": "Text",
                  "width": 307,
                  "height": 95,
                  "text": "重新挑战",
                  "fontSize": 57,
                  "color": "rgba(0, 0, 0, 1)",
                  "bold": true,
                  "align": "center",
                  "valign": "middle",
                  "leading": 2
                }
              ]
            },
            {
              "_$id": "hoox5sso",
              "_$type": "Image",
              "name": "BackHome",
              "x": 197,
              "y": 300,
              "width": 303,
              "height": 99,
              "skin": "res://597012e9-10df-4632-ae7d-5a90334dccbc",
              "useSourceSize": true,
              "color": "#ffffff",
              "_$child": [
                {
                  "_$id": "gly5dt00",
                  "_$type": "Text",
                  "name": "Text",
                  "width": 307,
                  "height": 95,
                  "text": "回到首页",
                  "fontSize": 57,
                  "color": "rgba(0, 0, 0, 1)",
                  "bold": true,
                  "align": "center",
                  "valign": "middle",
                  "leading": 2
                }
              ]
            }
          ]
        },
        {
          "_$id": "dqv03k1g",
          "_$type": "Image",
          "name": "LeaderBoard",
          "y": 91,
          "width": 722.8144373432492,
          "height": 688.8262976562623,
          "skin": "res://4a7a70b7-fd86-472a-b4e8-a158e64fdabe",
          "color": "#ffffff",
          "_$child": [
            {
              "_$id": "lg9tti8g",
              "_$type": "Text",
              "name": "score1",
              "x": 477,
              "y": 290,
              "width": 175,
              "height": 63,
              "text": "999",
              "fontSize": 62,
              "color": "rgba(88, 34, 34, 1)",
              "bold": true,
              "align": "center",
              "valign": "middle",
              "leading": 2,
              "underlineColor": "rgba(220, 159, 15, 1)",
              "stroke": 2,
              "strokeColor": "rgba(237, 175, 26, 1)"
            },
            {
              "_$id": "a6dorlbp",
              "_$type": "Text",
              "name": "score2",
              "x": 477,
              "y": 418,
              "width": 175,
              "height": 63,
              "text": "999",
              "fontSize": 62,
              "color": "rgba(88, 34, 34, 1)",
              "bold": true,
              "align": "center",
              "valign": "middle",
              "leading": 2,
              "underlineColor": "rgba(220, 159, 15, 1)",
              "stroke": 2,
              "strokeColor": "rgba(237, 175, 26, 1)"
            },
            {
              "_$id": "b1rh2hay",
              "_$type": "Text",
              "name": "score3",
              "x": 477,
              "y": 543,
              "width": 175,
              "height": 63,
              "text": "999",
              "fontSize": 62,
              "color": "rgba(88, 34, 34, 1)",
              "bold": true,
              "align": "center",
              "valign": "middle",
              "leading": 2,
              "underlineColor": "rgba(220, 159, 15, 1)",
              "stroke": 2,
              "strokeColor": "rgba(237, 175, 26, 1)"
            }
          ]
        }
      ]
    }
  ]
}