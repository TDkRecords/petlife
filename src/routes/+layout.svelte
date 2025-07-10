<script>
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import {
        getAuth,
        onAuthStateChanged,
        signInWithPopup,
        GoogleAuthProvider,
        signOut,
    } from "firebase/auth";
    import { app } from "$lib/assets/js/firebase"; // Asegúrate de que este sea el path correcto
    import { user } from "$lib/stores/user"; // Store reactiva

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    onMount(() => {
        onAuthStateChanged(auth, (u) => {
            user.set(u);
        });
    });

    const login = async () => {
        try {
            await signInWithPopup(auth, provider);
            goto("/calendario");
            // el estado cambiará automáticamente gracias al `onAuthStateChanged`
        } catch (err) {
            console.error("Error al iniciar sesión:", err);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            user.set(null);
            goto("/");
        } catch (err) {
            console.error("Error al cerrar sesión:", err);
        }
    };
</script>

<nav
    class="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm"
>
    <div class="container">
        <a
            class="navbar-brand fw-bold text-success d-flex align-items-center"
            href="/"
        >
            <i class="fas fa-paw me-2"></i>PetLife
        </a>

        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link text-success fw-semibold" href="/">
                        <i class="fas fa-home me-1"></i>Inicio
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <!-- svelte-ignore a11y_invalid_attribute -->
                    <a
                        class="nav-link dropdown-toggle text-success fw-semibold"
                        href="#"
                        id="serviciosDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <i class="fas fa-briefcase-medical me-1"></i>Servicios
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                            <a class="dropdown-item" href="/consultas">
                                <i class="fas fa-user-md me-2 text-success"
                                ></i>Consultas
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="/alimentos">
                                <i class="fas fa-bone me-2 text-success"
                                ></i>Alimentos
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="/adopciones">
                                <i class="fas fa-dog me-2 text-success"
                                ></i>Adopciones
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="/cortes">
                                <i
                                    class="fa-solid fa-scissors me-2 text-success"
                                ></i>Estética
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="nav-item">
                    <a class="nav-link text-success fw-semibold" href="/about">
                        <i class="fas fa-info-circle me-1"></i>Acerca de
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link text-success fw-semibold" href="/team">
                        <i class="fas fa-users me-1"></i>Nosotros
                    </a>
                </li>

                <!-- Condición: Mostrar calendario solo si hay usuario -->
                <div class="d-flex ms-auto">
                    {#if $user}
                        <a
                            class="nav-link text-success fw-semibold"
                            href="/calendario"
                        >
                            <i class="fas fa-calendar me-1"></i>
                            Calendario
                        </a>
                        <button class="nav-link text-danger" on:click={logout}
                            >Cerrar sesión</button
                        >
                    {:else}
                        <button class="btn btn-primary" on:click={login}
                            >Iniciar sesión</button
                        >
                    {/if}
                </div>
            </ul>
        </div>
    </div>
</nav>

<main>
    <slot />
</main>

<footer class="bg-success text-white py-4 mt-5">
    <div class="container text-center">
        <p class="mb-0">&copy; 2025 PetLife. Todos los derechos reservados.</p>
    </div>
</footer>
