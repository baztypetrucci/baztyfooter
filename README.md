# baztyFooter

Plugin de jQuery para poder tener Footers siempre pegados al borde inferior de la página.

*jQuery plugin for making Footers always attached to the bottom in a page.*

## Quick Start

El script solo funcionará si indicas el div necesario para hacer que nuestro Footer quede abajo, y si realmente existe en la página actual. El funcionamiento es que existe un div que estirará la página lo necesario entre el contenido y el footer, haciendo que este quede abajo.

*The script will only work if you indicate the necessary DIV to make the footer stays attached to the bottom , if it really exist en the actual page. The work here is to put a DIV without content that stretch the page, this is between the content and the footer, this makes all the job, simple, and obviously is responsive.*

### Basic
<pre lang="javascript"><code>
$.baztyFooter();
</code></pre>


### Opciones / Options

<table>
	<tr>
		<td>
			header
		</td>
		<td>
			<p>Indicas la clase o id para la cabecera de la pagina</em></p>
			<p><em>Indicates the class or id for the header of the page.</em></p>
		</td>
	</tr>
	<tr>
		<td>
			content
		</td>
		<td>
			<p>Indicas la clase o id para el contenido principal que envuelvo todo el interior de la pagina</em></p>
			<p><em>Indicates the class or id for the principal content that wraps all the inside of the page</em></p>

		</td>
	</tr>
	<tr>
		<td>
			footer
		</td>
		<td>
			<p>Indicas la clase o id para el footer de la pagina</em></p>
			<p><em>Indicates the class or id for the footer of the page.</em></p>
		</td>
	</tr>
	<tr>
		<td>
			spacer
		</td>
		<td>
			<p>Indicas la clase o id para el div que estirará la pagina para que el footer llegué abajo</em></p>
			<p><em>Indicates the class or id for the Div that will stretch the page until the footer stays in the bottom.</em></p>
		</td>
	</tr>
	<tr>
		<td>
			delta
		</td>
		<td>
			<p>Indicas el nivel de delta en "int" para la medida, en caso de que te sobre o te falte espacio para el footer</em></p>
			<p><em>Indicate the level of delta on "int" for the size, use it in the case that you need to remove or add space for the footer.</em></p>
		</td>
	</tr>
</table>


### Ejemplo / Example

<pre lang="javascript"><code>
$.baztyFooter({
    header:'.titulo-gigante',
    content:'#contenidosInternos',
    delta:100
});
</code></pre>
