# Flex grid lists

Listados en modo lista o grilla con manejo de tamaños de columnas y el switch de un tipo a otro al cambiar una clase CSS del contenedor.

Los componentes que provee el paquete son:

- `list-card`: Ítem del listado
- `list-row`: Cotenedor de uno o muchos `list-card` que se mostrarán en modo lista (uno debajo del otro)
- `grid-row`: Cotenedor de uno o muchos `list-card` que se mostrarán en modo grilla

La estructura html básica es:

```
<article class="list-card">
    <div class="list-card__header">
        ...
    </div>
    <div class="list-card__body">
        ...
    </div>
    <div class="list-card__footer">
        ...
    </div>
</article>
```

## Instalación:

El paquete se encuentra disponible en el repositorio de npm con el nombre "flex-grid-lists"

```
npm i -S flex-grid-lists
```

## Uso:

Para comenzar a utilizarlo, es necesario incluir el css (normal o minified) que se encuentra en la carpeta `node_modules/flex-grid-lists/dist`, o bien incluyendo y compilando el `.scss` que se encuentra en `node_modules/flex-grid-lists/resources/styles`.

### Tipo seteado por el contenedor:

#### Modo lista

- Cada `list-card` mostrará sus elementos internos (`list-card__header`, `list-card__body`, `list-card__footer`) a modo de columnas (uno al lado del otro)

```
<div class="list-row">
    <article class="list-card">
        ...
    </article>
</div>
```

#### Modo grilla

- Cada `list-card` mostrará sus elementos internos (`list-card__header`, `list-card__body`, `list-card__footer`) a modo de filas (uno debajo del otro)
- Para especificar las columnas que se mostrarán en las distintas resoluciones es necesario agregarle a cada `list-card` la clase `grid-{tamaño}-{columnas}`
- La grilla está basada en 12 columnas (es una variable de SASS por lo que se puede modificar a gusto) e inspirada en la grilla de bootstrap

```
<div class="grid-row">
    <article class="list-card grid-xs-6 grid-sm-4">
        ...
    </article>
</div>
```

Todos los Viewports soportados son:

- xs: <544px,
- sm: >=544px,
- md: >=768px,
- lg: >=992px,
- xl: >=1200px,
- tv: >= 1824px

Ver [demos](https://digbang.github.io/flex-grid-lists/type-by-container.html)

### Tipo seteado por modificador:

También se puede forzar el tipo mediante un modificador, sin necesidad de utilizar los contenedores `list-row` o `grid-row`.

#### Modo grilla

```
<article class="list-card list-card--grid">
    ...
</article>
```

#### Modo lista

```
<article class="list-card list-card--list">
    ...
</article>
```

Ver [demos](https://digbang.github.io/flex-grid-lists/type-by-modifier.html)

## Desarrollo:

### Requerimientos

- nodejs

### Instalación

```
git clone git@github.com:digbang/flex-grid-lists.git
cd flex-grid-lists
npm i
```

### Compilado

Para compilar el código SASS se utiliza GULP.

#### Generar CSS Minificado

```
gulp
```

#### Generar CSS sin minificar + sourcemaps
```
gulp dev
```
