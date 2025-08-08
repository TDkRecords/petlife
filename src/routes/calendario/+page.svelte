<script>
  import { onMount } from "svelte";
  import { obtenerCitas } from "$lib/assets/js/citas";
  import { user } from "$lib/stores/user";
  import { get } from "svelte/store";
  import { db } from "$lib/assets/js/firebase";
  import { doc, getDoc } from "firebase/firestore";

  let citas = [];
  let u = null;
  let userData = null;

  onMount(async () => {
    u = get(user);
    if (u) {
      // Obtener datos adicionales del usuario
      const ref = doc(db, "usuarios", u.uid);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        userData = snap.data();
      }

      // Cargar citas del usuario
      citas = await obtenerCitas(u.uid);
    }
  });

  /**
   * Convierte un objeto con .seconds de Firestore o
   * una cadena ISO a formato legible.
   */
  const formatoFecha = (fechaObj) => {
    if (!fechaObj) return "Fecha no disponible";

    let date;
    if (fechaObj.seconds) {
      date = new Date(fechaObj.seconds * 1000);
    } else if (typeof fechaObj === "string") {
      date = new Date(fechaObj);
    }

    if (!date || isNaN(date.getTime())) {
      return "Fecha no disponible";
    }

    return date.toLocaleString("es-CO", {
      dateStyle: "full",
      timeStyle: "short",
    });
  };
</script>

<section class="container my-5 min-vh-100">
  <div class="row g-4">
    {#if u && userData}
      <!-- Tarjeta de perfil con datos extendidos -->
      <div class="col-md-4">
        <div class="card border-success shadow-sm h-100">
          <div class="card-header bg-success text-white">
            <h5 class="mb-0"><i class="fas fa-user-circle me-2"></i>Perfil</h5>
          </div>
          <div class="card-body bg-success-subtle">
            <p>
              <strong>Nombres:</strong>
              {userData.nombres}
              {userData.apellidos}
            </p>
            <p><strong>Cédula:</strong> {userData.cedula}</p>
            <p><strong>Correo:</strong> {u.email}</p>
          </div>
        </div>
      </div>
    {/if}

    <!-- Lista de citas -->
    <div class="col-md-8">
      <div class="card shadow-sm border-0 h-100">
        <div class="card-header bg-light border-bottom">
          <h5 class="mb-0 text-success">
            <i class="fas fa-calendar-check me-2"></i>Mis Citas
          </h5>
        </div>
        <div class="card-body">
          {#if citas.length > 0}
            <ul class="list-group list-group-flush">
              {#each citas as cita}
                <li class="list-group-item">
                  <div class="fw-semibold text-success mb-1">
                    Fecha de la cita: {formatoFecha(cita.fecha)}
                  </div>
                  <div>
                    <strong>Tipo:</strong>
                    {cita.tipo || "No especificado"}
                  </div>
                  <small class="text-muted">
                    Creación: {formatoFecha(cita.creacion)}
                  </small>
                </li>
              {/each}
            </ul>
          {:else}
            <div class="text-center text-muted">
              <i class="fas fa-calendar-times fa-2x mb-2"></i>
              <p>No tienes citas registradas aún.</p>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</section>
