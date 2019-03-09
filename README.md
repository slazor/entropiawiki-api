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

```
query Query($mobName: String) {
  mob(name: $mobName) {
    id
    name
    type
    maturities {
      id
      name
      hp
      attributes {
        name
        value
      }
    }
  }
}

{
  "mobName": "Atrox"
}
```