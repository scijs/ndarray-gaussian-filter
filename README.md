ndarray-gaussian-filter
=======================
An FFT based Gaussian filter for ndarrays.

# Example

```javascript
var lena = require("luminance")(require("lena"))
var savePixels = require("save-pixels")
var blur = require("ndarray-gaussian-filter")
savePixels(blur(lena, 5), "png").pipe(process.stdout)
```

Writes the following png to stdout:

<img src="https://raw.github.com/mikolalysenko/ndarray-gaussian-filter/master/example/blur.png">

# Install

```
npm install ndarray-gaussian-filter
```

# API

### `require("ndarray-gaussian-filter")(array,radius[,wrap])`
Filters an ndarray using a Gaussian filter.

* `array` is an ndarray
* `sigma` is the radius of the Gaussian filter. Can be either a scalar or array
* `wrap` is checks whether the filter is applied as a circular convolution or uses `0` boundary. Default is `false`. Can be set as an array to select boundary conditions independently for each axis.

**Returns** `array`

# Credits
(c) 2014 Mikola Lysenko. MIT License