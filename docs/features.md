# Feature Prioritisation (MoSCoW)

MoSCoW is a method for deciding what to build first. Every feature goes
into one of four groups so the project stays focused and achievable.

## Must have
Without these, the project does not meet its aim.

| Feature | Why it is a Must |
|---|---|
| Neutralise a stuck modifier key (Ctrl, Shift, Alt) | This is the core problem. Needed to answer RQ1 and RQ2. |
| On-screen toggle overlay for modifier keys | Gives the user an alternative way to control modifiers. Supports error recovery. |
| Clear visual indicator of which keys are blocked or active | Visibility of system status (Nielsen). Users must know what the extension is doing. |
| Easy way to switch the extension on and off | User control and freedom (Nielsen). |

## Should have
Important, but the project still works without them.

| Feature | Why it is a Should |
|---|---|
| Popup window showing status and basic settings | Makes the extension easier to configure. Needed for the SUS evaluation (RQ3). |
| Settings saved between sessions (chrome.storage) | Users should not have to reconfigure every time they open Chrome. |
| Choice of which modifier keys to block | Different users have different broken keys. |

## Could have
Nice to have if time allows.

| Feature | Why it is a Could |
|---|---|
| Custom key remapping profiles | Extends the idea, but adds complexity. |
| Keyboard shortcut to toggle the overlay | Helps experienced users (flexibility and efficiency). |
| Adjustable overlay size and position | Supports users with different motor abilities (Fitts's Law). |
| Automatic detection of a key held down for too long | Smarter, but harder to get right. |
| High-contrast or dark theme for the overlay | Accessibility improvement. |

## Won't have (this time)
Deliberately parked so the scope stays manageable.

- Support for browsers other than Google Chrome
- Mobile or tablet support
- OS-level fixes (Windows, macOS, Linux)
- Overriding browser-reserved shortcuts such as Ctrl+W (Chrome does not allow it)
- Publishing to the Chrome Web Store
- Voice control or eye-tracking input

## Minimum shippable version
If time runs short, the project is still complete with:
1. Stuck modifier neutralisation
2. On-screen toggle overlay
3. Visual indicator of key status
4. On/off switch

## Notes
- This list may change after the reality check and the Phase 1 research.
- Any change to the Must list should be recorded here with the reason.