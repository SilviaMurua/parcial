import java.io.PrintWriter;

public class PaginaWeb {
    public static void main(String[] args) {
        String imagen1 = "ruta/imagen1.jpg";
        String imagen2 = "ruta/imagen2.jpg";
        String imagen3 = "ruta/imagen3.jpg";

        // Generar el contenido HTML de la página
        String htmlContent = "<html><head><title>Contenedores con imágenes</title></head><body>";

        // Primer contenedor con imagen
        htmlContent += "<div><img src='imagenes/cam.jpg" +Camara + "'></div>";

        // Segundo contenedor con imagen
        htmlContent += "<div><img src='imagenes/aspirador.jpg" + Aspirador + "'></div>";

        // Tercer contenedor con imagen
        htmlContent += "<div><img src='imagenes/auriculares.jpg" + Auriculares + "'></div>";

        htmlContent += "</body></html>";

        // Generar el archivo HTML
        
        }
    }
}

