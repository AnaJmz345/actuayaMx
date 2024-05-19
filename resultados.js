// Lista de servicios
const servicios = [
    {
        nombreServicio: 'Consultoría en Marketing',
        nombrePersona: 'Juan Pérez',
        descripcion: 'Servicio de consultoría en marketing digital con más de 10 años de experiencia en el sector, ayudando a negocios a mejorar su presencia online.',
        tarifa: '$50.00 por hora',
        id: "1"
    },
    {
        nombreServicio: 'Diseño Web Personalizado',
        nombrePersona: 'Ana Gutiérrez',
        descripcion: 'Creación de sitios web únicos y personalizados para empresas y emprendedores. Incluye diseño responsivo y optimización SEO.',
        tarifa: '$80.00 por proyecto',
        id: "2"
    },
    {
        nombreServicio: 'Mudanzas',
        nombrePersona: 'Alex Valadez',
        descripcion: 'Contamos con un equipo de 3 personas, transporte y equipo adecuado para carga y descarga de sus bienes.',
        tarifa: '$80.00 por hora',
        id: "3",
    },
    {
        nombreServicio: 'Finanzas Personales',
        nombrePersona: 'Armando Zepeda',
        descripcion: 'Ayuda para mantener en orden tus finanzas personales, entre ellas tu declaración de impuestos y presupuesto mensual.',
        tarifa: '$80.00 por proyecto',
        id: "4"
    },
    {
        nombreServicio: 'Mecánico',
        nombrePersona: 'Arturo Villalobos',
        descripcion: 'Revisión de automóvil o motocicleta, chequeo de llantas así como aceite, agua y motor',
        tarifa: '$100-200.00 por proyecto',
        id: "5"
    },
    {
        nombreServicio: 'Fotografía Profesional',
        nombrePersona: 'Laura Martínez',
        descripcion: 'Servicios de fotografía para eventos, sesiones personales y comerciales. Incluye edición y entrega digital de las imágenes.',
        tarifa: '$150.00 por sesión',
        id: "6"
    },
    {
        nombreServicio: 'Entrenamiento Personal',
        nombrePersona: 'Carlos Mendoza',
        descripcion: 'Programas personalizados de entrenamiento físico adaptados a tus objetivos y necesidades, con seguimiento y evaluación constante.',
        tarifa: '$40.00 por hora',
        id: "7"
    },
    {
        nombreServicio: 'Clases de Inglés',
        nombrePersona: 'María Rodríguez',
        descripcion: 'Clases de inglés personalizadas para todos los niveles, enfocadas en conversación, gramática y preparación para exámenes.',
        tarifa: '$30.00 por hora',
        id: "8"
    },
    {
        nombreServicio: 'Decoración de Interiores',
        nombrePersona: 'Isabel Fernández',
        descripcion: 'Asesoramiento y diseño de interiores para viviendas y oficinas, creando espacios funcionales y estéticamente agradables.',
        tarifa: '$200.00 por proyecto', 
        id: "9"
    },
    {
        nombreServicio: 'Reparación de Computadoras',
        nombrePersona: 'Jorge Ramírez',
        descripcion: 'Servicios de reparación y mantenimiento de computadoras, incluyendo limpieza de virus, instalación de software y actualización de hardware.',
        tarifa: '$60.00 por proyecto',
        id: "10"
    }
];

// Obtener el parámetro de búsqueda de la URL
function getSearchQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('search') ? urlParams.get('search').toLowerCase() : '';
}

// Filtrar los servicios según el parámetro de búsqueda
function filterServicios(query) {
    return servicios.filter(servicio => servicio.nombreServicio.toLowerCase().includes(query));
}

// Elemento de la lista donde se mostrarán los resultados
const list = document.getElementById('list');

// Función para mostrar los resultados filtrados
function setList(results) {
    // Limpiar cualquier resultado previo
    list.innerHTML = '';

    // Mostrar los resultados filtrados
    results.forEach(servicio => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item', 'mb-3');

        listItem.innerHTML = `
            <div class="service-item" onclick=showDetails(${servicio.id})>
                <h5 class="mb-1">${servicio.nombreServicio}</h5>
                <p class="mb-1"><strong>Proveedor:</strong> ${servicio.nombrePersona}</p>
                <p class="mb-1"><strong>Descripción:</strong> ${servicio.descripcion}</p>
                <p class="mb-0"><strong>Tarifa:</strong> ${servicio.tarifa}</p>
            </div>
        `;
        
        list.appendChild(listItem);
    });

    // Si no se encontraron resultados
    if (results.length === 0) {
        const noResultsItem = document.createElement('li');
        noResultsItem.textContent = 'No se encontraron resultados';
        noResultsItem.classList.add('list-group-item', 'text-center', 'no-results');
        list.appendChild(noResultsItem);
    }
}

// Manejar el evento de envío del formulario de búsqueda
document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const searchInput = document.getElementById('search');
    const searchValue = searchInput.value.trim().toLowerCase();
    
    if (searchValue) {
        const encodedSearchValue = encodeURIComponent(searchValue);
        window.location.href = `resultados.html?search=${encodedSearchValue}`;
    }
});

// Ejecutar la búsqueda inicial cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    const searchQuery = getSearchQuery();
    const filteredServicios = filterServicios(searchQuery);
    setList(filteredServicios);
});

function showDetails(serviceId) {
    window.location.href = `details.html?id=${serviceId}`;
    
}