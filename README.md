MAWButton
=========

A ripple button inspired by Google material design.

![Demo](https://raw.githubusercontent.com/yuhua-chen/MAWButton/master/demo.gif)


Required
========

 - jQuery
 
Browser Support
===============

Modern browser like Chrome, Safari, FireFox...etc.

Usage
=====
First of all, you have to inlcude the style.

```html
<link rel="stylesheet" href="mawbutton.css">
```

And include script as well.  

```html
<script src="mawbutton.js"></script>
```  

You may add some elements like this:  
```html
<button>Click Me</button>                   <!-- default -->
<button class="green">Click Me</button>     <!-- with default green color -->
<button class="blue">Click Me</button>      <!-- with default blue color -->
<button class="red">Click Me</button>       <!-- with default red color -->
```

To init the mawbutton with default options:

```html
<script>
    $('button').mawbutton();
</script>
```
or with custom options:   
```html
<script>
    $('button').mawbutton({
        speed : 250,
        scale : 2,
        effect : 'ripple'
    });
</script>
```

Options
=======
|Option|Default|Type|Description|
|:-----|:------|:---|:----------|
|`speed` | 300   |int | The duration which are given in milliseconds of effect.|
|`scale` | 3     |int | The size how the ripple will scale to in animation.| 
|`effect`| ripple|string| Determine which effect you want to use.|

Effects
======  

|Name|Effect|
|:--|:--|
|`ripple`| Basically effect like the Google material design. |
|`flash` | Still working on it. |
|`wave` | Still working on it. |  


LICENSE
=======
The MIT License (MIT)

Copyright (c) 2014 Michael Chen , Will Huang , Amin Lee

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.