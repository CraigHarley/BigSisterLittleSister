# Sister Projects, with a Big Sister

* Multiple Projects in One Repo
* One project is the 'Big Sister', and lives in the Root.
* The Little Sister is in `packages`, but can easily be moved into another repo.


## Running
* Clone
* `yarn`
* `yarn start`


## After changes in Little Sister

### Linking
* Run `yarn link` in the Little Sister folder.
* Run `yarn link little_sister` in the Big Sister (root).

### One time update
* Run `yarn upgrade little_sister` to update the package pulled into the `big_sister`.
