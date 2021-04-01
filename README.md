# My maps

# Views
| url               | page displayed
-------------------------------------------------
| /                 | Home view, shows all pins
| /filter           | Home view with filtered pins
| /description/:id  | Shows description of one pin
| /favourites       | Shows a list of favourites
| /login            | Login page
| /register         | Register page

## API endpoints
#### Get all trails
**_GET_** /trails

Response Body:
```js
 [{
     trailId: 1,
     name: "Kaukau",
     description: "A big hill",
     length: 5,
     dogFriendly: true
 },
 {
     trailId: 2,
     name: "Colonial knob",
     description: "A bigger? hill",
     length: 12,
     dogFriendly: false
 }]
```

#### Get a trail by ID
**_GET_** /trail/:id
```js
{
     trailId: 1,
     name: "Kaukau",
     description: "A big hill",
     length: 5,
     dogFriendly: false
 }
 ```

 #### Get a trail by filter
**_GET_** /trail?dogFriendly='true'

```js
{
     trailId: 1,
     name: "Kaukau",
     description: "A big hill",
     length: 5,
     dogFriendly: false
 }
 ```

#### Get a users favourite trails
**_GET_** /trail/:id
```js
 [{
     trailId: 1,
     name: "Kaukau",
     description: "A big hill",
     length: 5,
     dogFriendly: false
 },
 {
     trailId: 2,
     name: "Colonial knob",
     description: "A bigger? hill",
     length: 12,
     dogFriendly: false
 }]
```

 #### Delete a trail from user favourites
**_DELETE_** /trail/:id
```js
OK
 ```


 ## DB diagrams
 https://dbdiagram.io/d/6064fa0eecb54e10c33e356d