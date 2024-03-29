---
sidebar_position: 2
---

# Properties

## IconsetBaseProps

For all iconset, it's extending from ```Component<IconBaseProps>``` and inherit from ```SVGAttributes<SVGSVGElement>``` for react or ```SVGProps``` for react-native provided by react-native-svg. 

| Name | Type | Requird | Version | Description |
| --- | --- | --- | --- | --- |
| id | ```string``` | No | 0.1.20 | The element id for render |
| name | ```string``` | No | 0.1.20 | Icon name from the iconset. Optional if passing ```content``` property for rendering svg content directly |
| variant | ```string``` | No | 0.1.20 | Variant from the iconset. In general, it will be default variant from that iconset or 'regular'. | 
| color | ```string``` | No | 0.1.20 | The current color of the icon. It won't be effective if the iconset's ```colorize``` is ```false``` . |
| size | ```string``` \| ```number``` | No | 0.1.20 | The sizing of the icon. |
| fontSize | ```string``` \| ```number``` | No | 0.1.20 | The sizing of the icon. If ```fontSize``` give, it will override ```size``` values. | 
| content | ```IconVariant``` \| ```IconSVG``` | No | 0.2.0 | The stroke size of the icon. |


## Icon component

If you import ```Icon``` component from ```@svgr-iconkit/core```, it will provide additional properties from ```IconsetBaseProps``` for specified rendering.

| Name | Type | Requird | Version | Description |
| --- | --- | --- | --- | --- |
| content | ```IconSVG``` \| ```Record<string, IconSVG>``` | No | 0.1.20 | The dataset for rendering SVG Icon by custom iconset. | 

## Svg content

All svg content are exported as javascript object (JSON) and formatted as ```IconSVG``` typescript type.

### IconSVG

| Name | Type | Requird | Version | Description |
| --- | --- | --- | --- | --- |
| name | ```string``` | Yes | 0.1.20 | Icon name |
| width | ```number``` | No | 0.1.20 | Viewbox width | 
| height | ```number``` | No | 0.1.20 | Viewbox height | 
| attrs | ```Record<string, any>``` | No | 0.1.20 | Original svg file attributes | 
| data | ```IconSVGNode[]``` | Yes | 0.1.20 | Array of the svg content | 

### IconSVGNode

| Name | Type | Requird | Version | Description |
| --- | --- | --- | --- | --- |
| tagName | ```string``` | Yes | 0.1.20 | Svg tag name |
| attrs | ```Record<string, any>``` | No | 0.1.20 | Original svg node attributes | 
| children | ```IconSVGNode[]``` | No | 0.1.20 | Children of the svg node | 
