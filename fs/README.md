# fs(File System):
The `fs` (File System) module in Node.js is a core module that provides an interface to interact with the file system on your computer. It enables you to perform various file operations such as reading, writing, updating, and deleting files or directories.

## features:
The `fs` module in Node.js has a broad set of functionalities for interacting with the file system. Here's a comprehensive list of its capabilities:

  * consider that most of the below methods can be used synchronously and asynchronously 
  * there are 3 ways to use these methods asynchronously:
    - using callbacks
    - using promises:
      + using async/await
      + using then() & catch()

  * keep in mind that async/await and then & catch methods are ways to work with promises! and not inherently a part of promise itself.

### Basic File Operations:

[checkout here!](./basicFileOperations/)
1. Read files: Read the contents of a file.
2. Write files: Create or overwrite a file with new data.
3. Append files: Add data to an existing file.
4. Delete files: Remove a file.

### Directory Operations:

[checkout here!](./directoryOperations/)
1. Create directories: Make new directories.
2. Read directory contents: List files and directories within a directory.
3. Delete directories: Remove an empty directory.