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
```json
 [{
     "id": 1,
     "name": "Kaukau",
     "description": "A big hill",
     "length": 5,
     "dogFriendly": 1,
     "swimming": 0,
 },
 {
     "id": 2,
     "name": "Colonial knob",
     "description": "A bigger? hill",
     "length": 12,
     "dogFriendly": 0,
     "swimming": 0,
 }]
```

#### Get a trail by ID
**_GET_** /trails/:id
```json
{
     "id": 1,
     "name": "Kaukau",
     "description": "A big hill",
     "length": 5,
     "dog_friendly": 0,
     "swimming": 0
 }
 ```
 #### Get trails by filter
**_GET_** /trails/query?dogFriendly=true

```json
[{
     "id": 1,
     "name": "Kaukau",
     "description": "A big hill",
     "length": 5,
     "dogFriendly": 1,
     "swimming": 0,
 },
 {
     "id": 2,
     "name": "Colonial knob",
     "description": "A bigger? hill",
     "length": 12,
     "dogFriendly": 0,
     "swimming": 0,
 }]
 ```

#### Get a users favourite trails
**_GET_** /favourite
```json
 [{
     "trailId": 1,
     "name": "Kaukau",
     "description": "A big hill",
     "length": 5,
     "dogFriendly": 0
 },
 {
     "trailId": 2,
     "name": "Colonial knob",
     "description": "A bigger? hill",
     "length": 12,
     "dogFriendly": 0
 }]
```


 #### Delete a trail from user favourites
**_DELETE_** /favourite/:id
```json
OK
 ```


 ## DB diagrams
 https://dbdiagram.io/d/6064fa0eecb54e10c33e356d