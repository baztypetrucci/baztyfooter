# baztyFooter

Plugin de jQuery para poder tener Footers siempre pegados al borde inferior de la pagina

## Quick Start

El script solo funcionará si indicas el div necesario para hacer que nuestro Footer quede abajo, y si realmente existe en la página actual. El funcionamiento es que existe un div que estirará la página lo necesario entre el contenido y el footer, haciendo que este quede abajo.

### Basic
<pre lang="javascript"><code>
$.baztyFooter();
</code></pre>


### Opciones

<table>
    <tr>
        <td>
            header
        </td>
        <td>
            Indicas la clase o id para la cabecera de la pagina
        </td>
    </tr>
    <tr>
        <td>
            content
        </td>
        <td>
            Indicas la clase o id para el contenido principal que envuelvo todo el interior de la pagina
        </td>
    </tr>
    <tr>
        <td>
            footer
        </td>
        <td>
            Indicas la clase o id para el footer de la pagina
        </td>
    </tr>
    <tr>
        <td>
            spacer
        </td>
        <td>
            Indicas la clase o id para el div que estirará la pagina para que el footer llegué abajo
        </td>
    </tr>
</table>
