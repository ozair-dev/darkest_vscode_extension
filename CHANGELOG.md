# Change Log

All notable changes to the "darkest" extension will be documented in this file.

## [0.0.7] - 2025-04-28

### Added:
- riposte_skill validation.
- extra_battle_loot validation.

### Changed:
- Skill .type only acepted vanilla skill types before, it now accepts custom ones.

### Removed:
- Due to complaint, .on_hit and .on_miss not being present on an effect will no longer be considered a validation error.

### Fixed:
- .move was looking for a string for some reason, works correctly now.
- .rank_damage_modifiers was looking for a string for some reason, works correctly now.
- There was an error in the validation, if a parameter like .mode_effects contained numbers, the entire line was considered to be an error, this has been fixed.
- .target on skills couldn't be blank before, this has been fixed.

### Known bugs:
- A note for the line validation error above, while it has been fixed, if the mode in .mode_effects contains a number (ex. vz_ironclad_fiend_0_effects), it will work perfectly fine, but it doesn't turn blue like other parameters, looking into this issue, but to be clear, purely visual, validation and error messages work as intended.
