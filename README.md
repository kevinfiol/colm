colm
===

**colm** is a browser extension that replaces `about:newtab` with
a minimal, customizable, Markdown-powered webpage that utilizes responsive columns. It aims to be similar
in functionality to other [startpages](http://startpages.github.io/), while
allowing the user to customize its content *without* having to edit an HTML file.

#### Installation

Visit [https://addons.mozilla.org/en-US/firefox/addon/colm/](https://addons.mozilla.org/en-US/firefox/addon/colm/) to install.
This is a Web-Extension, and so requires Firefox 57 or greater.

To begin adding content, enter Edit Mode by clicking `edit`. From there,
you can add columns which can be edited using Markdown. For a guide on Markdown,
please look [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Several options are available in the `options` menu:

#### Dimensions and Background Styles
You can modify the width and height of the columns container input boxes.
The background color can be changed via a color picker.

#### Font Options
Font color can be modified using a color picker.
To change your font, you must
add custom CSS (See: [font-family attribute](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)).

#### Custom CSS
A custom CSS editor is available via the `options` menu. You can change your font here, or apply any other global CSS rule. To modify styles for the columns container,
use the `.column-container` class.

Note: Modifying the CSS can potentially obscure the page controls. For this reason,
it is advised to only modify the styles of `column-container`.

#### Local Images
Local image files can be loaded via the `options` menu. Images must be a jpg/jpeg, png, or gif file, and must
be under 1MB in size. When images are loaded, they are assigned a unique 4-character ID. To reference
a local file in Markdown, prepend its unique ID with `local_`, and use this combination in place of a
typical image URL. Local images are not exported when you export your settings to JSON.

Examples:

<pre class="code" data-lang="Markdown"><code>// Using a regular image URL
![](https://www.google.com/image.jpg)

// Using a local file, with unique ID 'uq4r'
![](local_PpDUkovcYw)
</code></pre>

#### Import, Export, or Clear Settings
You may export your configuration to a .json file, and import it at a later time if need be.
This is useful if you want to keep a backup of your config, or if you want to use your config
across multiple browsers. Local images are not exported.

You may also clear your settings to return to default settings.