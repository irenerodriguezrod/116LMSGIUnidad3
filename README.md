# 100LMSGIUnidad3
Unidad 3 Manipulación de documentos web

## TEORÍA
### Seleccionar elementos en el DOM
1. Método tradicional

| **Método de Búsqueda**              | **Descripción**                                   | **Si no lo encuentra...**              |
|--------------------------------------|--------------------------------------------------|-----------------------------------------|
| `.getElementById(id)`               | Busca un elemento HTML por su **id**.           | Devuelve **uno** o `null`.             |
| `.getElementsByClassName(class)`    | Busca elementos con la **clase** `class`.       | Devuelve una **lista de nodos `[]`**.  |
| `.getElementsByName(value)`         | Busca elementos con el **atributo `name`**.     | Devuelve una **lista de nodos `[]`**.  |
| `.getElementsByTagName(tag)`        | Busca elementos por su **etiqueta HTML**.       | Devuelve una **lista de nodos `[]`**.  |

2. Metodos modernos de búsqueda
   
| **Método de Búsqueda**       | **Descripción**                                                 | **Si no lo encuentra...** |
|------------------------------|-----------------------------------------------------------------|---------------------------|
| `.querySelector(sel)`        | Busca el **primer** elemento que coincide con el selector CSS `sel`. | Devuelve `null`.          |
| `.querySelectorAll(sel)`     | Busca **todos** los elementos que coinciden con el selector CSS `sel`. | Devuelve `[]`.            |

3. Buscar elementos desde otros


| Métodos              | Descripción                                                      | Si no lo encuentra |
|----------------------|------------------------------------------------------------------|--------------------|
|**ELEMENT** .matches(sel) | Comprueba si un elemento coincide con una selección CSS         | false            |
|**ELEMENT** .closest(sel)`| Devuelve el primer elemento más cercano que coincide con el selector | NULL         |


4. Navegar entre los nodos
   

| Propiedad de nodos HTML | Descripción                                                    | Si está vacío |
|-------------------------|----------------------------------------------------------------|----------------|
| **ARRAY** .childNodes   | Devuelve una lista de nodos hijos (incluye nodos de texto y comentarios). | *NULL*        |
| **NODE**.parentNode     | Devuelve el nodo padre del nodo                                | *NULL*         |
| **NODE**.firstChild     | Devuelve el primer nodo hijo                                   | *NULL*         |
| **NODE**.lastChild      | Devuelve el último nodo hijo                                   | *NULL*         |
| **NODE**.previousSibling | Devuelve el nodo hermano anterior                              | *NULL*         |
| **NODE**.nextSibling    | Devuelve el nodo hermano siguiente                             | *NULL*         |

 5. Navegar entre elementos HTML
    
| Propiedad de elementos HTML | Descripción                                                    | Si está vacío |
|---------------------------------|----------------------------------------------------------------|----------------|
| **ARRAY** .children             | Devuelve una lista de elementos HTML hijos                     | []        |
| **ELEMENT**.parentELEMENT       | Devuelve el padre del Elemento                                 | *NULL*         |
| **NODE**.firstElementChild      | Devuelve el primer elemento hijo                               | *NULL*         |
| **NODE**.lastElementChild       | Devuelve el último elemento hijo                               | *NULL*         |
| **NODE**.previousElementSibling | Devuelve el elemento hermano anterior                          | *NULL*         |
| **NODE**.nextElementSibling     | Devuelve el elemento hermano siguiente                         | *NULL*         |

### Modificar el contenido DOM

| **Propiedad**       | **Descripción**                                                                          |
|---------------------|----------------------------------------------------------------------------------------|
| `STRING .nodeName`  | Devuelve el nombre del nodo. **Sólo lectura**.                                         |
| `STRING .textContent` | Devuelve (o cambia) el contenido de texto del elemento.                              |
| `STRING .innerText`  | Devuelve (o cambia) el contenido de texto renderizado (tiene en cuenta los estilos CSS). |
| `STRING .outerText`  | Igual a `.innerText`, pero al reemplazar también reemplaza la etiqueta contenedora.   |
