1. In the component "book-search", subscribe is used but the subscription is no where being caught and destroyed. Failing to unsubscribe may lead to memory leaks and to solve this, either we have to unsubscribe the subscription or can make use of an async pipe.

2. In the component "reading-list", images are used but there is no alternate text associated with them. It can at times result in Web accessibility issues. Similarly, I believe its good to have a link on the tile so that on click, it opens up as a full page modal showing some additional information. At the same time, I think its good to have tooltips on the button's.

3. In the component "reading-list", entire list of all books are loaded in DOM at once. When the list is too large, it can slow down page rendering. Virtual scrolling/ Progressive Rendering are two good options that can be implemented to avoid slowness in rendering. 


Note among the 3 improvements mentioned above, I  made changes to fix point 1 where I used an aync pipe so that it subscribes to the stream directly inside template, without having to store the result in an intermediate property. The subscription will terminate when the component gets destroyed, which makes subscription-handling easier and contributes to cleaner code. 
