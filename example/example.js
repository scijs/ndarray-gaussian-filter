"use strict"

var lena = require("luminance")(require("lena"))
var savePixels = require("save-pixels")
var blur = require("../gauss")

savePixels(blur(lena, 5), "png").pipe(process.stdout)