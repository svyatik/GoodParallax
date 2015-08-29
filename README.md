# GoodParallax
Very simple and easy to use parallax animation plugin.

## Demo
Please, watch demo here: [Demo](http://svyatik.github.io/GoodParallax)

## Features
- No jQuery. Plugin was written only on JavaScript;
- Smooth working;
- Very easy to set up and customize;
- It's OpenSorce. Free to use for commercial and non-comercial projects.

## How to use
- Just download it: https://github.com/svyatik/GoodParallax/blob/master/js/GoodParallax.js
- Include to your project:
```html
<script src="js/GoodParallax.js"></script>
```
- And start the plugin
```javascript
new GoodParallax ().init ();
```

##### Of course, You can use package managers:
- From NPM:
```
npm install GoodParallax
```

##### In the next, we need to set the background image in the block:
```html
 <section class="parallax" data-img="img/path_to_your_image"></section>
```

## Customize The Plugin
You can change the parallax speed or Turn On the plugin on the mobile devices.
```javascript
new GoodParallax ().init ({
    speed: 5.0
});
```
##### Avalaible Options
|Key         |Default value|Description                            |
|------------|-------------|---------------------------------------|
|speed       |3.0          |Set the parallax animation speed       |
|workOnMobile|false        |Turn on/off animation on mobile devices|

In the future, I will add more cool features :)
