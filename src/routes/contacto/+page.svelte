<!-- Página de Contacto - PetLife -->
<section class="py-5 bg-light">
    <div class="container">
        <h2 class="text-center text-success fw-bold mb-4">
            <i class="fas fa-envelope me-2"></i>Contáctanos
        </h2>

        <div class="row g-5">
            <!-- Formulario de contacto -->
            <div class="col-md-6">
                <form>
                    <div class="mb-3">
                        <label for="nombre" class="form-label">Nombre</label>
                        <input
                            type="text"
                            class="form-control"
                            id="nombre"
                            placeholder="Tu nombre completo"
                            required
                        />
                    </div>
                    <div class="mb-3">
                        <label for="correo" class="form-label"
                            >Correo electrónico</label
                        >
                        <input
                            type="email"
                            class="form-control"
                            id="correo"
                            placeholder="nombre@ejemplo.com"
                            required
                        />
                    </div>
                    <div class="mb-3">
                        <label for="asunto" class="form-label">Asunto</label>
                        <input
                            type="text"
                            class="form-control"
                            id="asunto"
                            placeholder="Consulta, cita, etc."
                            required
                        />
                    </div>
                    <div class="mb-3">
                        <label for="mensaje" class="form-label">Mensaje</label>
                        <textarea
                            class="form-control"
                            id="mensaje"
                            rows="5"
                            placeholder="Escribe tu mensaje aquí..."
                            required
                        ></textarea>
                    </div>
                    <button type="submit" class="btn btn-success w-100">
                        <i class="fas fa-paper-plane me-2"></i>Enviar mensaje
                    </button>
                </form>
            </div>

            <!-- Información de contacto -->
            <div class="col-md-6">
                <div class="mb-4">
                    <h5 class="fw-bold text-success">
                        <i class="fas fa-map-marker-alt me-2"></i>Dirección
                    </h5>
                    <p>Calle 17 #24-61, Pasto, Nariño - Colombia</p>
                </div>
                <div class="mb-4">
                    <h5 class="fw-bold text-success">
                        <i class="fab fa-whatsapp me-2"></i>WhatsApp
                    </h5>
                    <p>
                        <a
                            href="https://wa.me/+573113041496"
                            class="text-decoration-none text-success"
                            target="_blank"
                        >
                            +57 311 304 1496 — Escríbenos por WhatsApp
                        </a>
                    </p>
                </div>
                <div class="mb-4">
                    <h5 class="fw-bold text-success">
                        <i class="fas fa-clock me-2"></i>Horario
                    </h5>
                    <p>
                        Lunes a sábado: 8:00 a.m. – 6:00 p.m.<br />Domingo:
                        Atención de urgencias
                    </p>
                </div>
                <!-- Mapa con ubicación en Calle 17 #24-61 -->
                <div class="ratio ratio-16x9">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15922.08131746475!2d-77.2829171!3d1.2129266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e296d0e6d0a92cb%3A0x5a8319fcaee63f77!2sCl.%2017%20%2324-61%2C%20Pasto%2C%20Nari%C3%B1o!5e0!3m2!1ses-419!2sco!4v1720587759001!5m2!1ses-419!2sco"
                        width="100%"
                        height="100%"
                        style="border:0;"
                        allowfullscreen
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    >
                    </iframe>
                </div>
            </div>
        </div>
    </div>
</section>
