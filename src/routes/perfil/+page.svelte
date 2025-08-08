<script>
  import { auth, db } from "$lib/assets/js/firebase";
  import { onAuthStateChanged, signOut } from "firebase/auth";
  import { doc, getDoc } from "firebase/firestore";
  import { onMount } from "svelte";
  import { user } from "$lib/stores/user";
  import { goto } from "$app/navigation";

  let datos = null;

  onMount(() => {
    onAuthStateChanged(auth, async (u) => {
      if (!u) {
        goto("/login");
        return;
      }

      user.set(u);

      const ref = doc(db, "usuarios", u.uid);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        datos = snap.data();
      } else {
        datos = null;
      }
    });
  });

  const logout = async () => {
    await signOut(auth);
    user.set(null);
    goto("/");
  };
</script>

<section
  class="min-vh-100 d-flex align-items-center justify-content-center bg-white"
>
  <div
    class="card shadow-lg p-4 bg-green-subtle"
    style="width: 100%; max-width: 700px;"
  >
    <h2 class="text-center text-success mb-4">Mi Perfil</h2>

    {#if datos}
      <div class="row">
        <div class="col-md-6 mb-3">
          <strong>Nombres:</strong>
          <div class="form-control bg-white">{datos.nombres}</div>
        </div>
        <div class="col-md-6 mb-3">
          <strong>Apellidos:</strong>
          <div class="form-control bg-white">{datos.apellidos}</div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 mb-3">
          <strong>Edad:</strong>
          <div class="form-control bg-white">{datos.edad}</div>
        </div>
        <div class="col-md-8 mb-3">
          <strong>Número de Cédula:</strong>
          <div class="form-control bg-white">{datos.cedula}</div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <strong>Ciudad:</strong>
          <div class="form-control bg-white">{datos.ciudad}</div>
        </div>
        <div class="col-md-6 mb-3">
          <strong>País:</strong>
          <div class="form-control bg-white">{datos.pais}</div>
        </div>
      </div>

      <div class="mb-3">
        <strong>Residencia:</strong>
        <div class="form-control bg-white">{datos.residencia}</div>
      </div>

      <div class="mb-3">
        <strong>Correo electrónico:</strong>
        <div class="form-control bg-white">{datos.email}</div>
      </div>

      <div class="text-center mt-4">
        <button class="btn btn-outline-danger" on:click={logout}>
          <i class="fas fa-sign-out-alt me-1"></i> Cerrar sesión
        </button>
      </div>
    {:else}
      <p class="text-center text-muted">Cargando datos del perfil...</p>
    {/if}
  </div>
</section>

<style>
  .bg-green-subtle {
    background-color: #e6f4ea;
  }
</style>
