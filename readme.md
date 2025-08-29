1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById grabs a single element by its ID.
getElementsByClassName gives a live list of all elements with that class.
querySelector returns the first match, while querySelectorAll returns all matches (static list).

2. How do you create and insert a new element into the DOM?
Use document.createElement("tag") to make it, then use something like appendChild() or append() to put it into the DOM.

3. What is Event Bubbling and how does it work?
Event bubbling means when an event happens on a child element, it “bubbles up” and triggers handlers on its parent elements too.

4. What is Event Delegation in JavaScript? Why is it useful?
Event delegation is when attached one event listener to a parent instead of many children, and use event.target to handle the specific child. It’s useful because it saves memory and works even if new elements are added later.

5. Difference between preventDefault() and stopPropagation()?
preventDefault() stops the default browser action (like a link opening).
stopPropagation() stops the event from bubbling up to parent elements.
