## Project Overfiew
- TypeScript
- React & Context API
- mui

### wireframe
https://www.figma.com/file/h8UzSwtc6siAAww2MuCDl0/invitation-ts?node-id=0%3A1




### changeLog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

####  [Unreleased]
`Types of changes`
`Added` for new features.
`Changed` for changes in existing functionality.
`Removed` for now removed features.
`Fixed` for any bug fixes.
`Security` in case of vulnerabilities.
`Setting & Install` for anything installed or changed in settings.

[0.0.3]
2021.12.17

`Add`
- Add context folder and GuestsContext.ts
- changeLog format in README.
- React and mui component reference links
`Changed`
- modified states and functions in AddGuest.tsx.
- App.tsx to add a context provider.
`Fix` 
- (open)TS error in Totals.tsx

[0.0.2]

[0.0.1]

### errorlog


`2021.12.17`
`Totals.tsx`
💥 TypeScript error in C:/Users/MKKIM/Desktop/Typescript/invi/react-with-typescript/src/components/Totals.tsx(7,11):   
Type '{}' is missing the following properties from type 'Invited[]': length, pop, push, concat, and 28 more.  TS2740

`2021.12.13` 
status `OPEN`
after creating scss file, uninstalled and installed yarn.
and got this error:
Failed to load config "standard-with-typescript" to extend from.
Referenced from: C:\Users\MKKIM\Desktop\Typescript\invitation\typescript-react-invitation\react-with-typescript\.eslintrc.js
tried #1 https://stackoverflow.com/questions/63912721/failed-to-load-config-react-to-extend-from 


### To-dos
- [x]`add` a modal for adding a guest 
- [x]`add` React Context
- []`fix` eslint & prettier setting (still open as of 17-Dec) 
- []`refactor` codes in TS

`optional`
- []`add` unit text codes 
- [] `firebase` store data in firebase

### References
`React Context`https://reactjs.org/docs/context.html
`mui modal component` https://mui.com/components/modal/