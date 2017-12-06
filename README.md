# GoodParallax
Very simple and easy to use parallax animation plugin.

## Demo
Play with demo here: [Demo](http://svyatik.github.io/GoodParallax/demo)

## Features
- Smooth work;
- Very easy to set up and play;
- No jQuery. Plugin has been coded on pure JavaScript;
- Mobile phone support

## How to use
- just include the plugin to your project...
```html
<script src="dist/good-parallax.min.js"></script>
```
- init the plugin
```javascript
new GoodParallax().init();
```

##### Next, we need to add class .parallax to an element and provide a link for your image:
```html
 <section class="parallax" data-img="img/path_to_your_image"></section>
```

##### You can use package managers to install the plugin:
- From NPM:
```
npm install GoodParallax
```

## Customize The Plugin
You can change the parallax speed or use different class.
```javascript
// Plugin customization
new GoodParallax().init({
    speed: 8.0
});
```
##### Avalaible Options
|Key         |Default value|Description                                                    |
|------------|-------------|---------------------------------------------------------------|
|speed       |5.0          |Set the parallax animation speed. Higher number - slower effect|
|className   |parallax     |Use your own class for parallax animation                      |

## Some tips and recomendations
- You can skip the data-img attribute and add the image via backgroud-image property from CSS. That's more proper way either js blocks the image rendering
- Compress and shrink your images. In my opinion, FullHD is enough for size.
- For mobile devices are more properly to include image with more smaller size, for example, not more than 768px by width.

Hope you like it :)
