---
name: CSS Selectors
author: '@bashbaugh'
---

CSS Selectors can be used to apply CSS rules to specific element(s).

## Selecting elements

### Color all `p` elements red

```css
p {
  color: red;
}
```

### Make all images 200 pixels wide

```css
img {
  width: 200px;
}
```

## Selecting classes

### Color all elements with class `myClass` bold

```css
/** <div class="myClass you-can-have-multiple space-separated classes">Orpheus is the best</div> **/

.myClass {
  fontWeight: bold;
}
```

## Combing selectors

### Only make `p` elements with class `myClass` bold

```css
p.myClass {
  fontWeight: bold;
}
