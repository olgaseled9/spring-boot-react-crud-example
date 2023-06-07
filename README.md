## How to build.

#### Java SE version 11 is required to run the application
*App data is not saved between different launches of the app.*

1.Open terminal in project directory. Build project:

```bash
$ ./gradlew clean build
```

2. Run server:

```bash
$ ./gradlew bootRun
```
Server started :  [http://localhost:8888](http://localhost:8888)

To stop, type 'Ctrl +C' in the terminal window where the command is running.

3. Open terminal in project directory, do the command: 

```bash
$ ./gradlew npmInstall
```

3. Run client:

```bash
$ ./gradlew npmStart
```
Open in browser:  [http://localhost:3000](http://localhost:3000)

To stop, type 'Ctrl +C' in the terminal window where the command is running.