<script>
  import { auth, db } from "$lib/assets/js/firebase";
  import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
  } from "firebase/auth";
  import { doc, setDoc, getDoc } from "firebase/firestore";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { user } from "$lib/stores/user";

  let email = "";
  let password = "";
  let esRegistro = false;
  let mensaje = "";

  // Datos personales
  let nombres = "";
  let apellidos = "";
  let edad = "";
  let cedula = "";
  let ciudad = "";
  let pais = "";
  let residencia = "";

  onMount(() => {
    onAuthStateChanged(auth, (u) => {
      user.set(u);
      if (u) goto("/perfil");
    });
  });

  const enviar = async () => {
    mensaje = "";
    try {
      if (esRegistro) {
        const cred = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const uid = cred.user.uid;

        await setDoc(doc(db, "usuarios", uid), {
          nombres,
          apellidos,
          edad,
          cedula,
          ciudad,
          pais,
          residencia,
          email,
        });

        mensaje = "¡Usuario registrado exitosamente!";
        goto("/perfil");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        mensaje = "Inicio de sesión exitoso.";
        goto("/perfil");
      }
    } catch (error) {
      mensaje = error.message;
    }
  };
</script>

<section
  class="min-vh-100 d-flex align-items-center justify-content-center bg-white"
>
  <div
    class="card shadow-lg p-4 bg-green-subtle"
    style="width: 100%; max-width: 600px;"
  >
    <h2 class="text-center text-success mb-4">
      {esRegistro ? "Registrarse" : "Iniciar sesión"}
    </h2>

    <form on:submit|preventDefault={enviar}>
      {#if esRegistro}
        <div class="row">
          <div class="col-md-6 mb-3">
            <input
              class="form-control"
              placeholder="Nombres"
              bind:value={nombres}
              required
            />
          </div>
          <div class="col-md-6 mb-3">
            <input
              class="form-control"
              placeholder="Apellidos"
              bind:value={apellidos}
              required
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 mb-3">
            <input
              type="number"
              class="form-control"
              placeholder="Edad"
              bind:value={edad}
              required
            />
          </div>
          <div class="col-md-8 mb-3">
            <input
              class="form-control"
              placeholder="Número de Cédula"
              bind:value={cedula}
              required
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <input
              class="form-control"
              placeholder="Ciudad"
              bind:value={ciudad}
              required
            />
          </div>
          <div class="col-md-6 mb-3">
            <input
              class="form-control"
              placeholder="País"
              bind:value={pais}
              required
            />
          </div>
        </div>
        <div class="mb-3">
          <input
            class="form-control"
            placeholder="Dirección de residencia"
            bind:value={residencia}
            required
          />
        </div>
      {/if}

      <div class="mb-3">
        <input
          type="email"
          class="form-control"
          placeholder="Correo electrónico"
          bind:value={email}
          required
        />
      </div>
      <div class="mb-3">
        <input
          type="password"
          class="form-control"
          placeholder="Contraseña"
          bind:value={password}
          required
        />
      </div>
      <div class="d-grid gap-2">
        <button class="btn btn-success" type="submit">
          {esRegistro ? "Crear cuenta" : "Iniciar sesión"}
        </button>
      </div>
    </form>

    <div class="text-center mt-3">
      <a href="#" on:click={() => (esRegistro = !esRegistro)}>
        {esRegistro
          ? "¿Ya tienes cuenta? Inicia sesión"
          : "¿No tienes cuenta? Regístrate"}
      </a>
    </div>

    {#if mensaje}
      <div class="alert alert-info mt-3 text-center">{mensaje}</div>
    {/if}
  </div>
</section>

<style>
  .bg-green-subtle {
    background-color: #e6f4ea;
  }
</style>
