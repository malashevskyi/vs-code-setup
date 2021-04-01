# vs-code-setup [website](https://vs-code-cheatsheet.web.app/)
my vs-code setup, extensions, shortcuts cheatsheet, vs code features

## Contents
- [VS Code shortcuts](#vs-code-shortcuts)
- [Setup](#setup)
- [Features](#features)
- [Extensions](#extensions)

## VS Code shortcuts
  - see [`my cheatsheet`](https://vs-code-cheatsheet.web.app/) - more than one hundred keyboard shortcuts plus additional commands<br>
  <!-- ![vs code shortcuts](assets/images/og.jpg) -->

## Setup
- I use `vs code insiders` instead of `vs code`, but I have both of them. To open file with insider use:
  `code-insiders file-name`
  - create alias to open files with `c file-name`
    ```js
    // Ubuntu/Window
    // inside ~/.bashrc or ~/.zshrc
    alias c='code-insiders'
    ```
- I disabled `Caps Lock` key to get some additional keyboard shortcuts for VS Code and Chrome extensions
    #### For **Ubuntu** I installed [`Tweak`](https://linuxconfig.org/how-to-install-tweak-tool-on-ubuntu-20-04-lts-focal-fossa-linux)
    - To change `Caps Lock` go Tweaks / Keyboard & Mouse / Additional Layout Options / Caps Lock behavior
    - I checked `Caps Lock is disabled`, it still recognize the key in `vs code shortcuts` as `Caps Lock` but without any effect.
    ![tweak settings screenshot](screenshots/9.png)
    <br><br>
    #### For **Mint**
    - settings -> keyboard - layouts - options - Caps Lock behavior -> Caps Lock is disabled
    <br><br>
    #### For **Windows** I installed AutoHotkey [`website`](https://www.autohotkey.com/) [`video installation`](https://www.youtube.com/watch?v=lxLNtBYjkjU)
    - Here my config for AutoHotkey:
      ```ahk
      #NoEnv  ; Re`ommended for performance and compatibility with future AutoHotkey releases.
      ; #Warn  ; Enable warnings to assist with detecting common errors.
      SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
      SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

      CapsLock::Ins
      return
      ```
    - I replace `CapsLock` with `Insert` key
    - I use a real button, because when i choose a non-existent button it shows `unknown` in vs code shortcuts and of course, doesn't work.
    <br>
    So, I use `CapsLock` in linux and `Insert` in Windows
     <br>
    
- Disable file filtering in sidebar and set **A** and **Shift + A** to create file and create folder
  ```js
  // settings.json
  "workbench.list.automaticKeyboardNavigation": false
  
  // keybindings.json
    {
      "key": "a",
      "command": "explorer.newFile",
      "when": "filesExplorerFocus && !inputFocus"
    },
    {
      "key": "shift+a",
      "command": "explorer.newFolder",
      "when": "filesExplorerFocus && !inputFocus"
    }
  ```
- If a shortcut doesn't work:
  - may help [`Detecting keybinding conflicts`](https://code.visualstudio.com/docs/getstarted/keybindings#_detecting-keybinding-conflicts)
  - also pay attantion on 'when' column.
    ![Shortcut Menu Bar Screenshot](screenshots/8.png)
- move cursor by 7 line up / down (or how much you want)
  ```json
    {
      "key": "shift+alt+up",
      "command": "cursorMove",
      "args": {
        "to": "up",
        "by": "line",
        "value": 7
      },
      "when": "editorTextFocus"
    },
    {
      "key": "shift+alt+down",
      "command": "cursorMove",
      "args": {
        "to": "down",
        "by": "line",
        "value": 7
      },
      "when": "editorTextFocus"
    },
  ```

## Features
  - Refactor (`Ctrl + Shift + R`)
    - remove / add braces (return)
    ![remove / add braces gif.gif](gifs/1.gif)
  - Create keybindings snippets
    - F1 => Open Keyboard Shortcuts (JSON)
    ```javascript
       {
          "key": "capslock 1",
          "command": "editor.action.insertSnippet",
          "when": "editorTextFocus",
          "args": {
            "snippet": "console.log('${1:log}', ${2})"
          }
        },
    ```
    will output `console.log('log', )`
 
## Extensions
  - [`copy-workspace-path`](https://github.com/malashevskyi/copy-workspace-path-vs-code-extension)
  - [`One Dark Pro`](https://github.com/Binaryify/OneDark-Pro) - theme
  - [`Shortcut Menu Bar`](https://github.com/GorvGoyl/Shortcut-Menu-Bar-VSCode-Extension) - additional icons <br>
  ![Shortcut Menu Bar Screenshot](screenshots/1.png)
  - [`Auto Rename Tag`](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
  - [`Better Comments`](https://github.com/aaron-bond/better-comments)<br>
  ![Better Comments](screenshots/2.png)
  - [`Bookmarks`](https://github.com/alefragnani/vscode-bookmarks) - It helps you to navigate in your code, moving between important positions easily and quickly.
  - [`Bracket Pair Colorizer 2`](https://github.com/CoenraadS/Bracket-Pair-Colorizer-2)<br>
   ![Bracket Pair Colorizer 2](screenshots/3.png)<br>
  - [`Code Spell Checker`](https://github.com/streetsidesoftware/vscode-spell-checker)
  - [`Color Info`](https://github.com/mattbierner/vscode-color-info)<br>
  ![Color Info](screenshots/5.png)<br>
  - [`Comment tagged templates`](https://github.com/mjbvz/vscode-comment-tagged-templates)<br>
  ![Comment tagged templates](screenshots/4.png)<br>
  - [`Clang-Format`](https://github.com/xaverh/vscode-clang-format-provider)
  - [`ES7 React/Redux/GraphQL/React-Native snippets`](https://github.com/dsznajder/vscode-es7-javascript-react-snippets)
  - [`ESLint`](https://github.com/Microsoft/vscode-eslint)
  - [`File Utils`](https://github.com/sleistner/vscode-fileutils) - easy duplicate a file or a directory
  - [`Gist`](https://github.com/kenhowardpdx/vscode-gist)
  - [`GitLens - Git supercharged`](https://github.com/eamodio/vscode-gitlens)
  - [`Guides`](https://github.com/spywhere/vscode-guides) - visual vertical code lines
  - [`hex-to-rgba`](https://github.com/DakshMiglani/VSCode-Hex-To-RGBA)
  - [`htmltagwrap`](https://github.com/bgashler1/vscode-htmltagwrap)
  - [`Image preview`](https://github.com/kisstkondoros/gutter-preview)
  - [`Import cost`](https://github.com/wix/import-cost)<br>
  ![Comment tagged templates](screenshots/5.png)<br>
  - [`Sass`](https://github.com/TheRealSyler/vscode-sass-indented)
  - [`Markdown Preview Enhanced`](https://github.com/shd101wyy/vscode-markdown-preview-enhanced)
  - [`Nest Comments`](https://github.com/philsinatra/NestedCommentsVSCode)
    ```html
    <!-- <body>
      <!~~ <nav>
        <!~~ <ul>
          <!~~ <li></li> ~~>
        </ul> ~~>
      </nav> ~~>
    </body> -->
    ```
  - [`Next.js snippets`](https://github.com/pulkitgangwar/next.js-snippets)
  - [`npm`](https://github.com/Microsoft/vscode-npm-scripts)
  - [`Path Intellisense`](https://github.com/ChristianKohler/PathIntellisense)
  - [`Prettier - Code formatter`](https://github.com/prettier/prettier-vscode)
  - [`Settings Sync`](https://github.com/shanalikhan/code-settings-sync)
  - [`Shader languages support for VS Code`](https://github.com/stef-levesque/vscode-shader)
  - [`Simple icons`](https://github.com/LaurentTreguier/vscode-simple-icons)
  - [`Tabnine Autocomplete AI: JavaScript, Python, TypeScript, PHP, Go, Java, Ruby, C/C++, HTML/CSS, C#, Rust, SQL, Bash, Kotlin, React`](https://github.com/codota/tabnine-vscode)
  - [`vscode-faker`](https://github.com/deerawan/vscode-faker)<br>
  ![Comment tagged templates](screenshots/6.png)<br>
  - [`vscode-styled-components`](https://github.com/styled-components/vscode-styled-components)
  - [`DotENV`](https://github.com/mikestead/vscode-dotenv)
  - [`Highlight Matching Tag`](https://github.com/vincaslt/vscode-highlight-matching-tag)
  - [`Log File Highlighter`](https://github.com/emilast/vscode-logfile-highlighter)
  - [`vscode-live-server`](https://github.com/ritwickdey/vscode-live-server)
  - [`Open In Default Browser`](https://github.com/peakchen90/vscode-open-in-default-browser)
  - [`REST Client`](https://github.com/Huachao/vscode-restclient)
  - [`Debugger for Chrome`](https://github.com/Microsoft/vscode-chrome-debug)


    
