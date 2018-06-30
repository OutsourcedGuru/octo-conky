# octo-conky
A Conky script for querying an OctoPrint API for print-related details

## Overview
This functionality adds to the existing [octoprint-lcd-theme-black-pearl](https://github.com/OutsourcedGuru/octoprint-lcd-theme-black-pearl) Conky theme for OctoPrint.

## Installation

```
mkdir ~/sites && cd ~/sites
git clone https://github.com/OutsourcedGuru/octo-conky.git
cd octo-conky
npm install
nano ~/.conkyrc
```

Add to existing .conkyrc file the two lines before the `]]` line which include `octo-conky` in them:
```
#
${offset 5}${voffset -290}${color d7d7d7}${font neuropol:size=18}charming-pascal
${offset 5}${color aad7aa}${voffset -6}${font Nimbus Mono L,size:4,style:bold}Black Pearl ${font neuropol:size=8}v1.0.1
${offset 5}${voffset 5}${font font Nimbus Mono L,size:4,style:bold}${execpi 3000 node ~/sites/octo-conky version}
${offset 5}${voffset 10}${font font Nimbus Mono L,size:4,style:bold}${execpi 10 node ~/sites/octo-conky temp}
]]
```

![img_0037](https://user-images.githubusercontent.com/15971213/42129168-b8ed3402-7c71-11e8-9a56-28a8deac83ad.jpg)

