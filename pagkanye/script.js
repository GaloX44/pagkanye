
let sidebarItems = document.querySelectorAll(".sidebar__nav a");

sidebarItems.forEach(function(item) {
    item.addEventListener("click", function () {
        document.querySelector("input[type='checkbox']").checked = false;
    });

    let itemId = item.getAttribute("href");
    itemId = itemId.replace("#", "");
    item.style.backgroundImage = `url(${itemId}.jpg)`;

    let colorsElement = document.querySelector(`colors.${itemId}`);
    if (colorsElement) 
    {
        let colors = window.getComputedStyle(colorsElement).color;
        console.log(colors);
        item.style.color = colors;
    }
    else
    {
        item.style.color = "#aaa"; 
    }

});






document.addEventListener("DOMContentLoaded", function () {

    const divs = document.querySelectorAll(".wrapper");
    const sidebarForm = document.querySelector(".sidebar__form-open");
    const sidebar = document.querySelector(".sidebar");


    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Buscar el tag <colors> más cercano
                    const parentColors = entry.target.closest("colors");

                    if (parentColors) {
                        // Obtener estilos del <colors>
                        const bgColor = window.getComputedStyle(parentColors).backgroundColor;
                        const textColor = window.getComputedStyle(parentColors).color;

                        // Aplicar colores a la .sidebar__form-open
                        if (sidebarForm) {
                            sidebar.style.backgroundColor = bgColor;
                            // sidebar.style.color = textColor;
                            sidebarForm.style.color = textColor;
                            console.log(`El div visible es: ${entry.target.id}, colores ${sidebarForm.style.color} aplicados.`);

                        }

                    }
                }
            });
        },
        { threshold: 0.5 } // Ajusta el umbral si es necesario
    );

    divs.forEach((div) => observer.observe(div));
});

