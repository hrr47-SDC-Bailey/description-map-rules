# HostileWorld Property Info Component

Contains a fullstack React module with components for displaying a hostel's description, a map of it's location, and the hostel's specific rules and policies.

## Related Projects

  - https://github.com/hrr47-karev/imageCarousel
  - https://github.com/hrr47-karev/Reviews-Service
  - https://github.com/hrr47-karev/AvailabilityComponent
  - https://github.com/hrr47-karev/property-info-proxy

## Table of Contents

1. [Requirements](#requirements)
1. [Development](#development)

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## Endpoints

### GET
| Endpoint       | Result| Requirements |
| ------------- | -----|:-----:|
| /api/house/:id/hostel|Hostel Name |N/a|
| /api/house/:id/description | Description Details |N/a
| /api/house/:id/address | Address Details|N/a|
| /api/house/:id/rules |Rules Details|N/a|

### POST
| Endpoint       | Result| Requirements |
| ------------- | -----|:-----:|
| /api/house/:id/hostel|Create new Hostel |application/json|

#### Json input
```
 {
   hostel: ['someName'].
   description: [
     editorial1,
     editorial2,
     description1,
     description2,
     description3
   ],
   address: [
     streetAddress,
     city,
     state,
     zipPlus,
     zip,
     country,
     countryCode,
     latitude,
     longitude
   ],
   description: [
      checkInStart,
      checkIneEd
      checkOut,
      kidFriendly,
      creditCards,
      ageRestriction,
      curfew,
      lockOut,
      nonSmoking,
      petFriendly,
      taxesIncluded,
      cancellation,
      importantNotes1,
      importantNotes2,
      importantNotes3,
      importantNotes4,
      importantNotes5
   ]
 }
```

### PUT
| Endpoint       | Result| Requirements |
| ------------- | -----|:-----:|
| /api/house/:id/hostel|Update Hostel Name |N/a|
| /api/house/:id/description |Update Description Details |N/a
| /api/house/:id/address |Update Address Details|N/a|
| /api/house/:id/rules |Upddate Rules Details|N/a|

### DELETE
| Endpoint       | Result| Requirements |
| ------------- | -----|:-----:|
| /api/house/:id|Delete Hostel |N/a|
