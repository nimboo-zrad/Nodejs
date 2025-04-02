# Basic File Operations:
these operations include:

[1. reading a file's content:](./read) 

you can achieve this using `readFile()` method:
  `fs.readFile(path, [options], callback);``

* The options for this method are: 
  * Encoding: specifies the character encoding for the file's content.
  * Flag:specifies the mode inwhich the data should be written.
  
you can also use `readFileSync()` method to read a file synchronously

[2. writing data to a file:](./write)

you can do so using `writeFile()` method:
  `fs.writeFile(file, data, [options], callback);`

* Keep in mind that this method overwrites the file's content!
* If the file doesn't exist it will be created and data will be inserted into it.
* The options for this method are:
  * Encoding: specifies the character encoding for the data being written.
  * Flag: specifies the mode inwhich the data should be written.
  * Mode: sets the file permissions when the file is created.

you can also write files synchronously using `writeFileSync()` method.

[3. appending data to a file:](./append)

it can be done with `appendFile()` method: 
  `fs.appendFile(path, data, options, callback);`
  
* This method won't overwrite the file's content.
* The options for this method are:
  * Encoding: specifies the character encoding for the data being appended.
  * Flag: specifies the mode inwhich the data should be appended.
  * Mode: sets the file permissions.

you can also use append files synchronously using `appendFileSync()` method.

[4. deleting a file:](./unlink) 

this can be achieved using `unlink()` method:
`fs.unlink(path, callback);`

* This method only and only delete files and it doesn't delete directories or a part of a file's data.

you can also use `unlinkSync()` method to delete files synchronously!

## Explaining options: 
1. Encodings: encoding ensures that data is properly interpreted when reading and writing files some encoding schemes are:
  * ascii: represent characters using 1 byte! (used for english language based without especial characters)

  * base64: encodes binary data into a text format.(using 64 ascii character) - this often used for embedding binary files in text-based formats e.g. JSON or HTML.
 
 * utf8: default in many systems. represent characters using 1-4 bytes making it efficient for most text including multilingual content.

  * binary: depricated in the favor of utf8 but it represent the raw data.

  * hex: represent binary data into hexadecimal format.

2. Flags: it is an indicator used to signal certain conditions.

  * r: used for reading(but throws an error if the file doesn't exist.)

  * r+: used for read and write.(but throws an error if the file doesn't exist.)

  * w: used for writing.(but throws an error if the file doesn't exist.)

  * w+: used for reading and writing(but throws an error if the file exist!)

  * a: used for appending(it creates the file if doesn't exist.)

  * a+: used for reading and appending(it creates the file if doesn't exist.)

  * rs: used for reading files in synchronous mode.

  * wx: used for writing(fails if the file exists!)

  * ax: used for appending(fails if the file exists!)

3. Mode: it defines permission settings for the file being accessed. mode actually are octal representation of the permissions for owner, group & others.
* In nodejs the prefix `0o` represent octal numbers
* This is how octal numbers work:
  * 0 means no permission.
  * 1 means execute permission.
  * 2 means write permission.
  * 4 means read permission.
you can also use these permissions together by adding them together!

- e.g. 0o666 means this file has permission to read(4) + write(2) for all groups!

- or anther example is: 0o755 which means that the owner has full permission but groups and others have the permission to read and execute!

* Modes are mainly used for file creation and file writings!