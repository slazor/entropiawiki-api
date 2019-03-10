# Entropiawiki API 

### Description
Attempt to create an API for the entropiawiki.  
Goals:
 - Allow create/get/update content through graphql
 - Rebuild of current "wiki-style" database to a fully relational database for platform compatibility
 - Community based project to allow interested player to add features and updates

### Requirements
- `Docker` [Link](https://www.docker.com)
- `Node` [Link](https://nodejs.org)
- `NVM` [Link](https://github.com/creationix/nvm)
- `Yarn` [Link](https://yarnpkg.com)

### Setup

#### Database and PhpMyAdmin
- `docker-compose up` or `docker-compose up -d` (to run detached)


#### Running the node project
- `nvm use` to setup correct node version
- `yarn install` to install all dependencies
- `yarn setup` to create empty database
- `yarn seed` to create seeded database
- `yarn start` to run
- `http://localhost:4000/graphql`



#### Example query

All ids returned to children of mob are the relation id used to update the values.  

Get full mob info
```
query Query($mobName: String, $planetName: String) {
  getPlanet(name: $planetName) {
    id
    name
  }
  getMob(name: $mobName) {
    id
    name
    type
    maturities {
      id
      name
      hp
      attributes {
        id
        name
        value
      }
      damageTypes {
        id
        name
        value
      }
    }
  }
}

{
  "mobName": "Atrox",
  "planetName": "Calypso"
}
```

Update mob
```
mutation Mutation($mobId: String!, $mobName: String) {
  updateMob(id: $mobId, name: $mobName) {
    id
    name
    type
    maturities {
      id
      name
      hp
      attributes {
        id
        name
        value
      }
    }
  }
}

{
  "mobId": "<uuid>",
  "mobName": "<string>"
}
```

Update mob maturity attribute
```
mutation Mutation($mobMaturityAttributeId: String!, $value: Int!) {
  updateMobMaturityAttribute(id: $mobMaturityAttributeId, value:$value) {
    id
  }
}

{
  "mobMaturityAttributeId": "<uuid>",
  "value": <int>
}
```