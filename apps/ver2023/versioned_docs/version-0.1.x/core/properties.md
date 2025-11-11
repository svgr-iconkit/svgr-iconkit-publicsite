---
sidebar_position: 1
---

# Icon component properties

For all iconset, it provide below properties:

| Name | Type | Requird | Version | Description |
| --- | --- | --- | --- | --- |
| name | string | Yes | 0.1.20 | Icon name from the iconset |
| variant | string | No | 0.1.20 | Variant from the iconset. In general, it will be 'regular' or default variant from that iconset. | 
| color | string | No | 0.1.20 | The current color of the icon. |
| size | string, number | No | 0.1.20 | The sizing of the icon. |
| fontSize | string, number | No | 0.1.20 | The sizing of the icon. If ```fontSize``` give, it will override ```size``` values. | 


For core Icon component, it provide below extra properties:

| Name | Type | Requird | Version | Description |
| --- | --- | --- | --- | --- |
| content | IconSVG | No | 0.1.20 | The dataset for rendering SVG Icon. | 

