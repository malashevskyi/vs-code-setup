# vs-code-setup

## Contents
- [Prerequisites](#prerequisites)
- [VS Code shortcuts](#vs-code-shortcuts)
- [Extensions](#extensions)
<!--- [Ubuntu shortcuts](#ubuntu-shortcuts)
- [Windows shortcuts](#windows-shortcuts)
- [Google chrome shortcuts](#google-chrome-chortcuts)-->

## Prerequisites
- I use `vs code insiders` instead of `vs code`, but I have both of them. To open file with insider use: <br>
  `code-insiders file-name`
  - create alias to open files with `c file-name`
    ```markdown
    #Ubuntu/Window
    #inside ~/.bashrc
    alias c='code-insiders'
    ```
- I disabled `Caps Lock` key to get some additional keyboard shortcuts for VS Code and Chrome extensions
    - For ubuntu I installed [`Tweak`](https://linuxconfig.org/how-to-install-tweak-tool-on-ubuntu-20-04-lts-focal-fossa-linux)
    - To change `Caps Lock` go Tweaks / Keyboard & Mouse / Additional Layout Options / Caps Lock behavior
    - I checked `Make Caps Lock an additional Menu key`, I don't have menu key in my keyboard, it recognize in `vs code shortcuts` as `Caps Lock` but without any effect. <br><br>
    - For windows I installed [`AutoHotkey`](https://www.autohotkey.com/) [`video`](https://www.youtube.com/watch?v=lxLNtBYjkjU)
    - I have a useless button on my keybord `Pause Break` on the top-right corner that doesn't do anything when I press it;
    - I use a real button, because when i choose a non-existent button it shows `unknown` in vs code shortcuts and of course, doesn't work.
    ```ahk
    ;my config for AutoHotkey
    
    #NoEnv  ; Re`ommended for performance and compatibility with future AutoHotkey releases.
    ; #Warn  ; Enable warnings to assist with detecting common errors.
    SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
    SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

    CapsLock::Browser_Home
    return
    ```
    - So I got a lot of usefull additional shortcuts (e.g. `Caps Lock + arrows`, `Caps Lock + Shift / Win / Ctrl / Alt`)


## VS Code shortcuts
  ### settings
  - **Ctrl + comma** - open settings
  ### copy
  - **Ctrl + Shift + D** - copy line down
  - **Ctrl + Alt + P** - copy workspace path (your project's root folder) (install the [`extension`](https://github.com/malashevskyi/copy-workspace-path-vs-code-extension))
  ### change
  - **Ctrl + PageDown** - open previuos editor (previous tab)
  - **Ctrl + PageUp** - open next editor (next tab)
  ### move
  - **Ctrl + Shift + PageDown** - move editor (tab) left
  - **Ctrl + Shift + PageUp** - move editor (tab) rigth
  - **Ctrl + ArrowDown / ArrowUp** - move line up / down
  - **Shift + Alt + ArrowUp / Shift + Alt + ArrowDown** - move cursor by 7 line up / down
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
  
  - **Alt + F** - separate terminal from vs code side by side with correct directory <br>
    - [`video`](https://youtu.be/x5GzCohd4eo?t=640) | [`configuration`](https://code.visualstudio.com/docs/editor/integrated-terminal#_configuration)<br>
    - **Name** - Terminal: Focus on Terminal View.
    ```json
    #Ubuntu
    "terminal.integrated.shell.linux": "/usr/bin/gnome-terminal",
    "terminal.integrated.cwd": "${cwd}",
    
    #Windows
    "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\git-bash.exe",
    "terminal.integrated.cwd": "${cwd}"
    ```
    
 
## Extensions
  - [`copy-workspace-path`](https://github.com/malashevskyi/copy-workspace-path-vs-code-extension)
  - [`One Dark Pro`](https://github.com/Binaryify/OneDark-Pro) - theme
  - [`Shortcut Menu Bar`](https://github.com/GorvGoyl/Shortcut-Menu-Bar-VSCode-Extension) - additional icons
  ![Shortcut Menu Bar Screenshot](screenshots/1.png)
