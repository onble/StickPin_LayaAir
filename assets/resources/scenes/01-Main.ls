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
    }
  ]
}