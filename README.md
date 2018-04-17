# SBideo migrate script
Basic script to migrate an old file system and XML based video archive.
Should be adjusted to your specific needs.


## Initial setup
Install all dependencies
```sh
npm install
```

## Migrate old data structure
To test the migration without copying video files, run

```sh
node migrate.js /oldDataPath /newDataPath
```

To actually run the migration including copying video files, run

```sh
node migrate.js /oldDataPath /newDataPath --hot
```

## Generate missing IDs
Just in case you have JSON meta files without IDs, this may be helpful:

To test the migration without writing files, run

```sh
node generateMissingIds.js /newDataPath
```

To actually run the migration including writing meta files, run

```sh
node generateMissingIds.js /newDataPath --hot
```

## Generate missing slugs
In case you have JSON meta files with missing slugs, this may be helpful:

To test the migration without writing files, run

```sh
node generateMissingSlugs.js /newDataPath
```

To actually run the migration including writing meta files, run

```sh
node generateMissingSlugs.js /newDataPath --hot
```
