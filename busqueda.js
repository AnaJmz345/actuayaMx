// Lista de servicios
const servicios = [
    {
        nombreServicio: 'Consultoría en Marketing',
        nombrePersona: 'Juan Pérez',
        descripcion: 'Servicio de consultoría en marketing digital con más de 10 años de experiencia en el sector, ayudando a negocios a mejorar su presencia online.',
        tarifa: '$50.00 por hora'
    },
    {
        nombreServicio: 'Diseño Web Personalizado',
        nombrePersona: 'Ana Gutiérrez',
        descripcion: 'Creación de sitios web únicos y personalizados para empresas y emprendedores. Incluye diseño responsivo y optimización SEO.',
        tarifa: '$80.00 por proyecto'
    },
    {
        nombreServicio: 'Mudanzas',
        nombrePersona: 'Alex Valadez',
        descripcion: 'Contamos con un equipo de 3 personas, tranporte y equipo adecuada para carga y descarga de sus bienes.',
        tarifa: '$80.00 por hora'
    },
    {
        nombreServicio: 'Finanzas Personales',
        nombrePersona: 'Armando Zepeda',
        descripcion: 'Ayuda para mantener en orden tus finanzas personales, entre ellas tu declaración de impuestos y presupuesto mensual.',
        tarifa: '$80.00 por proyecto'
    },
    {
        nombreServicio: 'Mecánico',
        nombrePersona: 'Arturo Villalobos',
        descripcion: 'Revisión de automóvil o motocicleta, chequeo de llantas así como aceite, agua y motor',
        tarifa: '$100-200.00 por proyecto'
    }
];

// Elementos del DOM
const searchInput = document.getElementById('search');
const list = document.getElementById('list');

// Evento de input en el campo de búsqueda
searchInput.addEventListener('input', function(e) {
    const value = e.target.value.trim().toLowerCase();

    // Limpiar la lista antes de agregar nuevos elementos
    list.innerHTML = '';

    // Si no hay valor en el campo de búsqueda, salir sin hacer nada
    if (!value) {
        return;
    }

    // Filtrar servicios que coincidan con el valor de búsqueda
    const filteredServicios = servicios.filter(servicio => servicio.nombreServicio.toLowerCase().includes(value));

    // Mostrar los resultados filtrados
    setList(filteredServicios);
});

// Función para mostrar los resultados filtrados
function setList(results) {
    results.forEach(servicio => {
        const listItem = document.createElement('li');
        listItem.classList.add('result-item');

        listItem.innerHTML = `
            <div>
                <h2>${servicio.nombreServicio}</h2>
                <p><strong>Proveedor:</strong> ${servicio.nombrePersona}</p>
                <p><strong>Descripción:</strong> ${servicio.descripcion}</p>
                <p class="tariff"><strong>Tarifa:</strong> ${servicio.tarifa}</p>
            </div>
        `;
        
        list.appendChild(listItem);
    });

    // Si no se encontraron resultados
    if (results.length === 0) {
        const noResultsItem = document.createElement('li');
        noResultsItem.textContent = 'No se encontraron resultados';
        noResultsItem.classList.add('no-results');
        list.appendChild(noResultsItem);
    }
}







        