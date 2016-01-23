# Chrome infinite scroller robot

This chrome extension contains simple code to scroll to the bottom of a web page repeatedly. The reason why would want to do this is mostly for web scraping reasons. For example, Twitter search results are displayed with the [infinite scroll display](https://en.wiktionary.org/wiki/infinite_scroll), which prevents web scrapes from capturing all the content.


## Installation

1. Download this repository.
2. [Install Google Chrome](https://www.google.fr/chrome/browser/desktop/)
3. Type ``chrome://extensions/`` in Google Chrome's search bar.
4. Click on ``Developer mode``.
5. Click on ``Load unpacked extension``.
6. Choose the repository you downloaded at step 1.

Normally you should now have a Winnie-the-Pooh icon in extension bar.

## Example

Twitter has an [advanced search](https://twitter.com/search-advanced) tool. Once you've chosen various parameters, you can use this extension to scroll to the bottom of the page (it may take some time). You can right-click and click on ``Save as`` to download the HTML content of the page. It's then up to you to scrape the HTML manually with a method of your choice. I personally recommend using a shell script because the files will probably be voluminous. For example, supposing one saves the HTML to ``tweets.html``, one may extract the timestamp of each post with ``cat tweets.html | grep 'class="tweet-timestamp js-permalink js-nav js-tooltip"' > timestamps.txt``.
