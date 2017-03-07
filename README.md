# space-replacer 2.0
A super simple app that replaces spaces with underscores in pasted text.

The tool no longer relies on the prompt method. 

It now uses an "onpaste" event listener in the markup, which triggers the replace function after a 4ms delay.
The delay is added because "onpaste" triggers directly after the paste event, before the text is pasted. 4ms is the minimum delay of the setTimeout function as [per HTML 5.](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout#Minimum_delay_and_timeout_nesting)

The can now complete space replacement in 4 steps:
1. Open Space Replacer
2. Ctrl+V
3. Ctrl+C
4. Close Space Replacer (Ctrl+W)
