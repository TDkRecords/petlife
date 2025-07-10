<script>
    import logo from "$lib/assets/images/petlifeLogo.png";
    import ConsultaVeterinaria from "$lib/assets/images/ConsultaVeterinaria.png";
    import adopcion from "$lib/assets/images/adopcion.png";
    import "$lib/assets/css/style.css";
</script>

<section class="bg-success text-white text-center py-5">
    <div class="container">
        <h1 class="display-4 fw-bold">
            <i class="fas fa-paw me-2"></i>Bienvenido a PetLife
        </h1>
        <p class="lead mt-3">
            Salud, nutrición, estética y amor para tus mascotas. Todo en un solo
            lugar.
        </p>
        <a href="#servicios" class="btn btn-light mt-4 fw-semibold">
            <i class="fas fa-stethoscope me-2"></i>Descubre nuestros servicios
        </a>
    </div>
</section>

<section class="py-5 bg-light">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-6 mb-4 mb-md-0">
                <img
                    src={logo}
                    class="img-fluid rounded shadow"
                    alt="Equipo PetLife"
                />
            </div>
            <div class="col-md-6">
                <h2 class="text-success fw-bold mb-3">
                    <i class="fas fa-users me-2"></i>¿Quiénes somos?
                </h2>
                <p>
                    En <strong>PetLife</strong> somos una clínica veterinaria comprometida
                    con el bienestar animal. Nuestro equipo está formado por veterinarios,
                    estilistas y amantes de los animales que trabajan juntos para
                    brindarte atención integral y personalizada.
                </p>
            </div>
        </div>
    </div>
</section>

<section id="servicios" class="py-5">
    <div class="container">
        <h2 class="text-success fw-bold mb-5 text-center">
            <i class="fas fa-hand-holding-medical me-2"></i>Servicios
            principales
        </h2>
        <div class="row g-4">
            <div class="col-md-4">
                <div class="card h-100 shadow-sm">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7lCMXstjzD7IAPoRnAlSkgTxxEfhmOdTCFA&s"
                        class="card-img-top"
                        alt="Consultas"
                    />
                    <div class="card-body text-center">
                        <i class="fas fa-user-md fa-2x text-success mb-2"></i>
                        <h5 class="fw-semibold">Consultas veterinarias</h5>
                        <p>
                            Evaluación general, diagnóstico y tratamiento con
                            profesionales certificados.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card h-100 shadow-sm">
                    <img
                        src="https://cdn0.expertoanimal.com/es/posts/1/4/3/que_hacer_si_mi_perro_come_muy_rapido_20341_600.jpg"
                        class="card-img-top"
                        alt="Alimentos"
                    />
                    <div class="card-body text-center">
                        <i class="fas fa-bone fa-2x text-success mb-2"></i>
                        <h5 class="fw-semibold">Alimentos y nutrición</h5>
                        <p>
                            Venta de alimentos balanceados y asesoría
                            nutricional personalizada.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card h-100 shadow-sm">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrAtcLTQff8ifBjM6fJEUhf5BPshcmP7Y9w&s"
                        class="card-img-top"
                        alt="Estética"
                    />
                    <div class="card-body text-center">
                        <i class="fas fa-cut fa-2x text-success mb-2"></i>
                        <h5 class="fw-semibold">Estética y peluquería</h5>
                        <p>
                            Baños, cortes, limpieza de oídos y todo lo que tu
                            mascota necesita para verse genial.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="adopciones" class="py-5 bg-light">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-6 order-md-2 mb-4 mb-md-0">
                <img
                    src={adopcion}
                    class="img-fluid rounded shadow"
                    alt="Adopciones"
                />
            </div>
            <div class="col-md-6">
                <h2 class="text-success fw-bold mb-3">
                    <i class="fas fa-dog me-2"></i>Adopciones responsables
                </h2>
                <p>
                    En PetLife creemos en las segundas oportunidades.
                    Colaboramos con refugios locales para promover la adopción
                    de perros y gatos que buscan un hogar lleno de amor.
                </p>
                <a href="/adopciones" class="btn btn-success mt-3 fw-semibold"
                    ><i class="fas fa-paw me-2"></i>Ver animales en adopción</a
                >
            </div>
        </div>
    </div>
</section>

<section id="calendario" class="py-5">
    <div class="container">
        <h2 class="text-success fw-bold mb-4 text-center">
            <i class="fas fa-calendar-alt me-2"></i>Calendario de atención
        </h2>
        <p class="text-center col-md-10 mx-auto">
            Ofrecemos turnos programados para evitar tiempos de espera. También
            organizamos jornadas de vacunación y desparasitación comunitaria.
        </p>
        <div class="text-center mt-4">
            <a href="/calendario" class="btn btn-outline-success fw-semibold"
                ><i class="fas fa-calendar-check me-2"></i>Solicitar turno</a
            >
        </div>
    </div>
</section>

<section class="py-5 bg-light">
    <div class="container">
        <h2 class="text-success fw-bold mb-5 text-center">
            <i class="fas fa-comments me-2"></i>Lo que dicen nuestros clientes
        </h2>
        <div class="row g-4">
            <div class="col-md-4">
                <div class="card border-0 shadow-sm h-100">
                    <div class="card-body">
                        <p>
                            <i class="fas fa-quote-left text-success me-2"
                            ></i>Excelente atención y muy buenos profesionales.
                            Mi perro adora venir aquí.
                        </p>
                        <p class="fw-semibold text-success mb-0">
                            – Laura Gómez
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card border-0 shadow-sm h-100">
                    <div class="card-body">
                        <p>
                            <i class="fas fa-quote-left text-success me-2"
                            ></i>Adopté a mi gatita gracias a PetLife. Son muy
                            responsables y humanos.
                        </p>
                        <p class="fw-semibold text-success mb-0">
                            – Jorge Ramírez
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card border-0 shadow-sm h-100">
                    <div class="card-body">
                        <p>
                            <i class="fas fa-quote-left text-success me-2"
                            ></i>El servicio de estética es espectacular. Mi
                            perrito siempre sale feliz.
                        </p>
                        <p class="fw-semibold text-success mb-0">
                            – Ana Beltrán
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="contacto" class="py-5 text-center">
    <div class="container">
        <h2 class="text-success fw-bold mb-4">
            <i class="fas fa-envelope me-2"></i>¿Tienes preguntas?
        </h2>
        <p class="mb-4">
            Estamos aquí para ayudarte. Contáctanos por teléfono, WhatsApp o
            visítanos directamente.
        </p>
        <a href="/contacto" class="btn btn-success fw-semibold">
            <i class="fas fa-phone-alt me-2"></i>Contactar ahora
        </a>
    </div>
</section>
