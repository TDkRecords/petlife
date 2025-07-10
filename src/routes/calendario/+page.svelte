<script>
    import { onMount } from "svelte";
    import { obtenerCitas } from "$lib/assets/js/citas";
    import { user } from "$lib/stores/user";
    import { get } from "svelte/store";

    let citas = [];
    let u = null;

    onMount(async () => {
        u = get(user);
        if (u) {
            citas = await obtenerCitas(u.uid);
        }
    });
</script>

<section class="container my-5" style="height: 100dvh;">
    <div class="row">
        <!-- Información del usuario -->
        {#if u}
            <div class="col-md-4 mb-4">
                <div class="card border-success shadow-sm">
                    <div
                        class="card-header bg-success text-white d-flex justify-content-between align-items-center"
                    >
                        <h5 class="mb-0">
                            <i class="fas fa-user-circle me-2"></i>Perfil
                        </h5>
                    </div>
                    <div
                        class="card-body d-flex flex-column align-items-center text-center bg-success-subtle"
                    >
                        {#if u.photoURL}
                            <img
                                src={u.photoURL}
                                alt="Foto de perfil"
                                class="rounded-circle shadow mb-3"
                                style="width: 120px; height: 120px; object-fit: cover;"
                            />
                        {/if}
                        <p class="mb-1">
                            <strong>Nombre:</strong>
                            {u.displayName || "No disponible"}
                        </p>
                        <p class="mb-0">
                            <strong>Correo:</strong>
                            {u.email || "No disponible"}
                        </p>
                    </div>
                </div>
            </div>
        {/if}

        <!-- Lista de citas -->
        <div class="col-md-8">
            <div class="card shadow-sm border-0">
                <div class="card-header bg-light border-bottom">
                    <h5 class="mb-0 text-success">
                        <i class="fas fa-calendar-alt me-2"></i>Tus Citas
                    </h5>
                </div>
                <div class="card-body">
                    {#if citas.length > 0}
                        <ul class="list-group list-group-flush">
                            {#each citas as cita}
                                <li
                                    class="list-group-item d-flex justify-content-between align-items-start"
                                >
                                    <div>
                                        <div class="fw-semibold text-success">
                                            Fecha: {new Date(
                                                cita.fecha?.seconds * 1000,
                                            ).toLocaleDateString()}
                                        </div>
                                        <div>
                                            Tipo: {cita.tipo?.join(", ") ||
                                                "No especificado"}
                                        </div>
                                    </div>
                                    <span class="badge bg-success rounded-pill">
                                        #{cita.id.slice(0, 6)}
                                    </span>
                                </li>
                            {/each}
                        </ul>
                    {:else}
                        <p class="text-muted">No tienes citas registradas.</p>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</section>
