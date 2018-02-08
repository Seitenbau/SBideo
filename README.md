# SBideo migrate script
Basic script to migrate an old file system and XML based video archive.
Should be adjusted to your specific needs.


## Initial setup
Install all dependencies
```sh
npm install
```

## Basic usage
To test the migration without copying video files, run

```sh
node migrate.js /oldDataPath /newDataPath
```

To actually run the migration including copying video files, run

```sh
node migrate.js /oldDataPath /newDataPath --copy
```
