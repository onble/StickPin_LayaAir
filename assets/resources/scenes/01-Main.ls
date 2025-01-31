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
      "_$id": "a04an7e8",
      "_$type": "Image",
      "name": "Circle",
      "x": 360,
      "y": 360,
      "width": 300,
      "height": 300,
      "anchorX": 0.5,
      "anchorY": 0.5,
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
      "_$id": "lsuytmcx",
      "_$type": "Sprite",
      "name": "Position1",
      "x": 360,
      "y": 1328,
      "width": 100,
      "height": 100,
      "visible": false,
      "_$child": [
        {
          "_$id": "sztdvbi2",
          "_$prefab": "8fd6b70c-006d-4836-9f67-547bac5ac4b4",
          "name": "Pin",
          "active": true,
          "x": 0,
          "y": 0,
          "visible": true
        }
      ]
    },
    {
      "_$id": "f76wdhkc",
      "_$type": "Sprite",
      "name": "Position2",
      "x": 360,
      "y": 891,
      "width": 100,
      "height": 100,
      "visible": false,
      "_$child": [
        {
          "_$id": "leq2h173",
          "_$prefab": "8fd6b70c-006d-4836-9f67-547bac5ac4b4",
          "name": "Pin",
          "active": true,
          "x": 0,
          "y": 0,
          "visible": true
        }
      ]
    },
    {
      "_$id": "zqjl8z23",
      "_$type": "Sprite",
      "name": "Position3",
      "x": 360,
      "y": 508,
      "width": 100,
      "height": 100,
      "visible": false,
      "_$child": [
        {
          "_$id": "xjlatpy5",
          "_$prefab": "8fd6b70c-006d-4836-9f67-547bac5ac4b4",
          "name": "Pin",
          "active": true,
          "x": 0,
          "y": 0,
          "visible": true
        }
      ]
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
            "_$ref": "lsuytmcx"
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
          "moveDuration": 0.5
        }
      ]
    }
  ]
}