// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Variables globales
    let currentEditingId = null;
    const forms = {
        sede: document.getElementById('sedeForm'),
        empleado: document.getElementById('empleadoForm'),
        vehiculo: document.getElementById('vehiculoForm')
    };
    
    // Menú mobile
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.getElementById('sidebar');
    
    mobileMenuBtn.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
    
    // Cambiar secciones
    const menuLinks = document.querySelectorAll('.menu-link');
    const contentSections = document.querySelectorAll('.content-section');
    const pageTitle = document.getElementById('pageTitle');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remover activo de todos los enlaces
            menuLinks.forEach(l => l.classList.remove('active'));
            
            // Agregar activo al enlace actual
            this.classList.add('active');
            
            // Ocultar todas las secciones
            contentSections.forEach(section => {
                section.classList.remove('active-section');
            });
            
            // Mostrar la sección correspondiente
            const sectionId = this.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active-section');
            
            // Actualizar título de la página
            pageTitle.textContent = this.querySelector('span').textContent;
            
            // Cerrar sidebar en móviles
            if (window.innerWidth <= 576) {
                sidebar.classList.remove('active');
            }
        });
    });
    
    // Funcionalidad de búsqueda
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        // Obtener la sección activa
        const activeSection = document.querySelector('.content-section.active-section');
        const table = activeSection.querySelector('table');
        
        if (table) {
            const rows = table.querySelectorAll('tbody tr');
            
            rows.forEach(row => {
                const rowText = row.textContent.toLowerCase();
                row.style.display = rowText.includes(searchTerm) ? '' : 'none';
            });
        }
    });
    
    // Formularios CRUD
    const addButtons = {
        sede: document.getElementById('addSedeBtn'),
        empleado: document.getElementById('addEmpleadoBtn'),
        vehiculo: document.getElementById('addVehiculoBtn')
    };
    
    const cancelButtons = {
        sede: document.getElementById('cancelSedeBtn'),
        empleado: document.getElementById('cancelEmpleadoBtn'),
        vehiculo: document.getElementById('cancelVehiculoBtn')
    };
    
    const saveButtons = {
        sede: document.getElementById('saveSedeBtn'),
        empleado: document.getElementById('saveEmpleadoBtn'),
        vehiculo: document.getElementById('saveVehiculoBtn')
    };
    
    // Mostrar formulario (para nuevo)
    for (const type in addButtons) {
        addButtons[type].addEventListener('click', function() {
            forms[type].classList.add('active');
            document.getElementById(`form${type.charAt(0).toUpperCase() + type.slice(1)}Title`).textContent = 
                `Nuevo ${type === 'sede' ? 'Sucursal' : type === 'empleado' ? 'Empleado' : 'Vehículo'}`;
            currentEditingId = null;
            // Limpiar formulario
            const form = forms[type];
            form.querySelectorAll('input, select').forEach(input => {
                if (input.type !== 'button') {
                    input.value = '';
                }
            });
        });
    }
    
    // Ocultar formulario
    for (const type in cancelButtons) {
        cancelButtons[type].addEventListener('click', function() {
            forms[type].classList.remove('active');
            currentEditingId = null;
        });
    }
    
    // Guardar formulario
    for (const type in saveButtons) {
        saveButtons[type].addEventListener('click', function() {
            // Aquí iría la lógica para guardar en base de datos
            // Por ahora solo simulamos la funcionalidad
            
            const form = forms[type];
            const inputs = form.querySelectorAll('input, select');
            let isValid = true;
            
            // Validación básica
            inputs.forEach(input => {
                if (input.value.trim() === '' && input.required) {
                    isValid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = '';
                }
            });
            
            if (!isValid) {
                alert('Por favor complete todos los campos requeridos');
                return;
            }
            
            // Simulamos guardar en la tabla correspondiente
            const tableId = `${type}sTable`;
            const table = document.getElementById(tableId);
            
            if (currentEditingId) {
                // Edición de un registro existente
                const row = document.querySelector(`tr[data-id="${currentEditingId}"]`);
                if (row) {
                    // Actualizar la fila con los nuevos datos
                    // En un caso real, esto vendría de la base de datos
                    alert(`Registro con ID ${currentEditingId} actualizado`);
                }
            } else {
                // Nuevo registro
                // Generar un ID único
                const newId = type === 'sede' ? Math.floor(Math.random() * 100) + 6 :
                              type === 'empleado' ? Math.floor(Math.random() * 100) + 106 :
                              `V-${Math.floor(Math.random() * 900) + 100}`;
                
                // Crear nueva fila
                const newRow = document.createElement('tr');
                newRow.setAttribute('data-id', newId);
                
                // Crear celdas con datos de ejemplo
                const cells = [];
                for (let i = 0; i < (type === 'vehiculo' ? 8 : 6); i++) {
                    const cell = document.createElement('td');
                    cells.push(cell);
                }
                
                // ID
                cells[0].textContent = newId;
                
                // Datos específicos según tipo
                if (type === 'sede') {
                    cells[1].textContent = document.getElementById('sedeNombre').value;
                    cells[2].textContent = document.getElementById('sedeDireccion').value;
                    cells[3].textContent = document.getElementById('sedeCiudad').value;
                    cells[4].textContent = document.getElementById('sedeTelefono').value;
                    
                    const estado = document.getElementById('sedeEstado').value;
                    const estadoSpan = document.createElement('span');
                    estadoSpan.className = estado === '1' ? 'badge badge-success' : 
                                          estado === '2' ? 'badge badge-danger' : 'badge badge-warning';
                    estadoSpan.textContent = estado === '1' ? 'Activa' : 
                                            estado === '2' ? 'Inactiva' : 'En mantenimiento';
                    cells[5].appendChild(estadoSpan);
                } 
                else if (type === 'empleado') {
                    cells[1].textContent = document.getElementById('empleadoNombre').value;
                    cells[2].textContent = document.getElementById('empleadoApellido').value;
                    
                    const puesto = document.getElementById('empleadoPuesto').value;
                    cells[3].textContent = puesto === '1' ? 'Gerente' :
                                           puesto === '2' ? 'Vendedor' :
                                           puesto === '3' ? 'Mecánico' :
                                           puesto === '4' ? 'Contador' : 'Asistente';
                    
                    const sede = document.getElementById('empleadoSede').value;
                    cells[4].textContent = sede === '1' ? 'Sede Central' :
                                           sede === '2' ? 'Sede Norte' :
                                           sede === '3' ? 'Sede Sur' :
                                           sede === '4' ? 'Sede Este' : 'Sede Oeste';
                    
                    cells[5].textContent = `Q${document.getElementById('empleadoSalario').value}`;
                    
                    const estado = document.getElementById('empleadoEstado').value;
                    const estadoSpan = document.createElement('span');
                    estadoSpan.className = estado === '1' ? 'badge badge-success' : 
                                          estado === '2' ? 'badge badge-danger' : 
                                          estado === '3' ? 'badge badge-warning' : 'badge badge-info';
                    estadoSpan.textContent = estado === '1' ? 'Activo' : 
                                            estado === '2' ? 'Inactivo' : 
                                            estado === '3' ? 'Vacaciones' : 'Licencia';
                    cells[6].appendChild(estadoSpan);
                }
                else if (type === 'vehiculo') {
                    cells[1].textContent = document.getElementById('vehiculoModelo').value;
                    
                    const marca = document.getElementById('vehiculoMarca').value;
                    cells[2].textContent = marca === '1' ? 'Toyota' :
                                           marca === '2' ? 'Honda' :
                                           marca === '3' ? 'Ford' :
                                           marca === '4' ? 'Chevrolet' :
                                           marca === '5' ? 'Volkswagen' : 'Nissan';
                    
                    cells[3].textContent = document.getElementById('vehiculoAnio').value;
                    cells[4].textContent = document.getElementById('vehiculoColor').value;
                    cells[5].textContent = `Q${document.getElementById('vehiculoPrecio').value}`;
                    
                    const estado = document.getElementById('vehiculoEstado').value;
                    const estadoSpan = document.createElement('span');
                    estadoSpan.className = estado === '1' ? 'badge badge-success' : 
                                          estado === '2' ? 'badge badge-warning' : 
                                          estado === '3' ? 'badge badge-danger' : 'badge badge-info';
                    estadoSpan.textContent = estado === '1' ? 'Disponible' : 
                                            estado === '2' ? 'Reservado' : 
                                            estado === '3' ? 'Vendido' : 'Mantenimiento';
                    cells[6].appendChild(estadoSpan);
                    
                    const sede = document.getElementById('vehiculoSede').value;
                    cells[7].textContent = sede === '1' ? 'Sede Central' :
                                           sede === '2' ? 'Sede Norte' :
                                           sede === '3' ? 'Sede Sur' :
                                           sede === '4' ? 'Sede Este' : 'Sede Oeste';
                }
                
                // Acciones
                const actionCell = document.createElement('td');
                actionCell.className = 'action-cell';
                
                const editBtn = document.createElement('button');
                editBtn.className = 'action-btn edit-btn';
                editBtn.setAttribute('data-id', newId);
                editBtn.innerHTML = '<i class="fas fa-edit"></i>';
                
                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'action-btn delete-btn';
                deleteBtn.setAttribute('data-id', newId);
                deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
                
                actionCell.appendChild(editBtn);
                actionCell.appendChild(deleteBtn);
                
                // Agregar celdas a la fila
                cells.forEach(cell => newRow.appendChild(cell));
                newRow.appendChild(actionCell);
                
                // Agregar fila a la tabla
                table.querySelector('tbody').appendChild(newRow);
                
                // Agregar eventos a los nuevos botones
                addEditDeleteEvents(editBtn, deleteBtn);
                
                alert(`Nuevo ${type === 'sede' ? 'sucursal' : type === 'empleado' ? 'empleado' : 'vehículo'} creado con ID: ${newId}`);
            }
            
            // Limpiar formulario y ocultarlo
            form.querySelectorAll('input, select').forEach(input => {
                if (input.type !== 'button') {
                    input.value = '';
                }
            });
            
            forms[type].classList.remove('active');
            currentEditingId = null;
        });
    }
    
    // Funciones para botones de editar y eliminar
    function addEditDeleteEvents(editBtn, deleteBtn) {
        // Eliminar
        deleteBtn.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            if (confirm('¿Está seguro de eliminar este registro?')) {
                const row = document.querySelector(`tr[data-id="${id}"]`);
                if (row) {
                    row.remove();
                    alert(`Registro con ID ${id} eliminado`);
                }
            }
        });
        
        // Editar
        editBtn.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const row = document.querySelector(`tr[data-id="${id}"]`);
            
            if (row) {
                currentEditingId = id;
                
                // Determinar qué tipo de registro estamos editando
                const section = row.closest('.content-section').id;
                let formType;
                
                if (section === 'sedes') formType = 'sede';
                else if (section === 'empleados') formType = 'empleado';
                else if (section === 'vehiculos') formType = 'vehiculo';
                
                if (formType) {
                    // Mostrar formulario
                    forms[formType].classList.add('active');
                    document.getElementById(`form${formType.charAt(0).toUpperCase() + formType.slice(1)}Title`).textContent = 
                        `Editar ${formType === 'sede' ? 'Sucursal' : formType === 'empleado' ? 'Empleado' : 'Vehículo'}`;
                    
                    // Rellenar formulario con datos actuales
                    // En un caso real, estos vendrían de la base de datos
                    // Aquí simulamos con los valores de la fila
                    
                    if (formType === 'sede') {
                        document.getElementById('sedeNombre').value = row.cells[1].textContent;
                        document.getElementById('sedeDireccion').value = row.cells[2].textContent;
                        document.getElementById('sedeCiudad').value = row.cells[3].textContent;
                        document.getElementById('sedeTelefono').value = row.cells[4].textContent;
                        
                        const estado = row.cells[5].querySelector('span').textContent;
                        document.getElementById('sedeEstado').value = 
                            estado === 'Activa' ? '1' : 
                            estado === 'Inactiva' ? '2' : '3';
                    }
                    else if (formType === 'empleado') {
                        document.getElementById('empleadoNombre').value = row.cells[1].textContent;
                        document.getElementById('empleadoApellido').value = row.cells[2].textContent;
                        
                        const puesto = row.cells[3].textContent;
                        document.getElementById('empleadoPuesto').value = 
                            puesto === 'Gerente' ? '1' :
                            puesto === 'Vendedor' ? '2' :
                            puesto === 'Mecánico' ? '3' :
                            puesto === 'Contador' ? '4' : '5';
                        
                        const sede = row.cells[4].textContent;
                        document.getElementById('empleadoSede').value = 
                            sede === 'Sede Central' ? '1' :
                            sede === 'Sede Norte' ? '2' :
                            sede === 'Sede Sur' ? '3' :
                            sede === 'Sede Este' ? '4' : '5';
                        
                        const salario = row.cells[5].textContent.replace('Q', '');
                        document.getElementById('empleadoSalario').value = salario;
                        
                        const estado = row.cells[6].querySelector('span').textContent;
                        document.getElementById('empleadoEstado').value = 
                            estado === 'Activo' ? '1' : 
                            estado === 'Inactivo' ? '2' : 
                            estado === 'Vacaciones' ? '3' : '4';
                    }
                    else if (formType === 'vehiculo') {
                        document.getElementById('vehiculoModelo').value = row.cells[1].textContent;
                        
                        const marca = row.cells[2].textContent;
                        document.getElementById('vehiculoMarca').value = 
                            marca === 'Toyota' ? '1' :
                            marca === 'Honda' ? '2' :
                            marca === 'Ford' ? '3' :
                            marca === 'Chevrolet' ? '4' :
                            marca === 'Volkswagen' ? '5' : '6';
                        
                        document.getElementById('vehiculoAnio').value = row.cells[3].textContent;
                        document.getElementById('vehiculoColor').value = row.cells[4].textContent;
                        
                        const precio = row.cells[5].textContent.replace('Q', '');
                        document.getElementById('vehiculoPrecio').value = precio;
                        
                        const sede = row.cells[7].textContent;
                        document.getElementById('vehiculoSede').value = 
                            sede === 'Sede Central' ? '1' :
                            sede === 'Sede Norte' ? '2' :
                            sede === 'Sede Sur' ? '3' :
                            sede === 'Sede Este' ? '4' : '5';
                        
                        const estado = row.cells[6].querySelector('span').textContent;
                        document.getElementById('vehiculoEstado').value = 
                            estado === 'Disponible' ? '1' : 
                            estado === 'Reservado' ? '2' : 
                            estado === 'Vendido' ? '3' : '4';
                    }
                }
            }
        });
    }
    
    // Inicializar eventos para botones existentes
    document.querySelectorAll('.edit-btn, .delete-btn').forEach(btn => {
        if (btn.classList.contains('edit-btn')) {
            addEditDeleteEvents(btn, null);
        } else if (btn.classList.contains('delete-btn')) {
            addEditDeleteEvents(null, btn);
        }
    });
    
    // Funcionalidad de reportes
    const applyFiltersBtn = document.getElementById('applyFiltersBtn');
    const generateCsvBtn = document.getElementById('generateCsvBtn');
    
    applyFiltersBtn.addEventListener('click', function() {
        const tipoReporte = document.getElementById('reporteTipo').value;
        const sede = document.getElementById('reporteSede').value;
        const fechaInicio = document.getElementById('reporteFechaInicio').value;
        const fechaFin = document.getElementById('reporteFechaFin').value;
        const estado = document.getElementById('reporteEstado').value;
        const orden = document.getElementById('reporteOrden').value;
        
        // Simulamos la aplicación de filtros
        alert(`Filtros aplicados:\nTipo: ${tipoReporte}\nSede: ${sede}\nFecha Inicio: ${fechaInicio}\nFecha Fin: ${fechaFin}\nEstado: ${estado}\nOrden: ${orden}`);
    });
    
    generateCsvBtn.addEventListener('click', function() {
        // Simulamos la generación de CSV
        alert('Reporte generado en formato CSV. Descargando...');
        
        // En un caso real, aquí se generaría y descargaría el archivo CSV
        // Esta es una simulación de descarga
        const link = document.createElement('a');
        link.href = 'data:text/csv;charset=utf-8,';
        link.download = `reporte_${new Date().toISOString().slice(0, 10)}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
    
    // Simular gráfico de reportes
    const chartCanvas = document.getElementById('reportesChart');
    if (chartCanvas) {
        chartCanvas.innerHTML = '<p><i class="fas fa-chart-bar"></i><br>Gráfico de reportes se mostraría aquí</p>';
    }
});