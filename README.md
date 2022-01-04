## Project Overfiew
`Dec.17.2021 ~Dec.23.2021`
### Goals
- To set up and use TypeScript in a React project

### Stacks used
- Typescript
- React and Context API
- mui

### wireframe
https://www.figma.com/file/h8UzSwtc6siAAww2MuCDl0/invitation-ts?node-id=0%3A1

### changeLog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


### Screenshot
<img src="https://images.velog.io/images/ek615/post/d0654cde-ad5a-410b-b418-5e872a257e98/image.png" width="550"> 

####  [Unreleased]
`Types of changes`
`Added` for new features.
`Changed` for changes in existing functionality.
`Removed` for now removed features.
`Fixed` for any bug fixes.
`Security` in case of vulnerabilities.
`Setting & Install` for anything installed or changed in settings.

[0.0.4]
2021.12.22
`Added`
- GuestInfo.tsx to create a separate Guest card from guest list (to make a reusable component)
`Changed`
- GuestList to add an extra modal for an individual guest card
`Fixed`
- Ts error in GuestInfo (Props TS setting)
- TS error about event.target(error message shown below)
    Overload 3 of 3, '(props: DefaultComponentProps<ExtendButtonBaseTypeMap<IconButtonTypeMap<{}, "button">>>): Element', gave the following error...

[0.0.3]
2021.12.17

`Added`
- Add context folder and GuestsContext.ts
- changeLog format in README.
- React and mui component reference links
`Changed`
- modified states and functions in AddGuest.tsx.
- App.tsx to add a context provider.
`Fixed` 
- (close)TS error in Totals.tsx

[0.0.2]

[0.0.1]

### errorlog

`2021.12.22`
GuestInfo.tsx, Props type
Error message:Binding element 'children' implicitly has an 'any' type.ts(7031)?
`fixed`
export default function GuestInfo({person}:{person:Invited}):JSX.Element ...

`2021.12.17`
`Totals.tsx`
💥 TypeScript error in C:/Users/MKKIM/Desktop/Typescript/invi/react-with-typescript/src/components/Totals.tsx(7,11):   
Type '{}' is missing the following properties from type 'Invited[]': length, pop, push, concat, and 28 more.  TS2740

`fixed` const { guests }: Array<Invited> -> any

`2021.12.13` 
status `OPEN`
after creating scss file, uninstalled and installed yarn.
and got this error:
Failed to load config "standard-with-typescript" to extend from.
Referenced from: C:\Users\MKKIM\Desktop\Typescript\invitation\typescript-react-invitation\react-with-typescript\.eslintrc.js
tried #1 https://stackoverflow.com/questions/63912721/failed-to-load-config-react-to-extend-from 


### To-dos
- [x]`add` a modal for adding a guest 
- [x]`refactor` using React Context api for statemanagement
- [x] `add` remove function to guest card
- [] `fix` eslint & prettier setting

### `Improvement ideas`
- [] `add` test codes (optional)
- [] `firebase` store data in firebase

### References
`React Context`https://reactjs.org/docs/context.html
`mui modal component` https://mui.com/components/modal/
`how to pass value when using mui Radio buttons` https://stackoverflow.com/questions/69762100/mui-radio-pass-the-label-and-value-in-onchange-when-selected

