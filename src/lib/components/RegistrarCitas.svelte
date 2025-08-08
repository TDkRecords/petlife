<script>
  import { onMount } from "svelte";
  import { db } from "$lib/assets/js/firebase";
  import {
    collection,
    getDocs,
    addDoc,
    serverTimestamp,
  } from "firebase/firestore";

  let usuarios = [];
  let usuarioSeleccionado = "";
  let tipo = "";
  let fecha = "";
  let citas = [];

  async function obtenerUsuarios() {
    const snapshot = await getDocs(collection(db, "usuarios"));
    usuarios = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }

  async function obtenerCitas() {
    const snapshot = await getDocs(collection(db, "citas"));
    citas = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }

  async function registrarCita() {
    console.log("usuarioSeleccionado:", usuarioSeleccionado);
    console.log("tipo:", tipo);
    console.log("fecha:", fecha);

    if (
      typeof usuarioSeleccionado !== "string" ||
      usuarioSeleccionado.trim() === "" ||
      typeof tipo !== "string" ||
      tipo.trim() === "" ||
      typeof fecha !== "string" ||
      fecha.trim() === ""
    ) {
      alert("Por favor completa todos los campos.");
      return;
    }

    await addDoc(collection(db, "citas"), {
      uid: usuarioSeleccionado,
      tipo,
      fecha,
      creacion: serverTimestamp(),
    });

    await obtenerCitas();
    tipo = "";
    fecha = "";
  }

  onMount(() => {
    obtenerUsuarios();
    obtenerCitas();
  });
</script>

<div class="container mt-4">
  <div class="card border-success mb-4">
    <div class="card-header bg-success text-white">
      <i class="bi bi-calendar-plus"></i> Registrar Cita
    </div>
    <div class="card-body bg-light">
      <div class="row mb-3">
        <div class="col">
          <label class="form-label">Usuario</label>
          <select class="form-select" bind:value={usuarioSeleccionado}>
            <option value="">Selecciona un usuario</option>
            {#each usuarios as user}
              <option value={user.id}
                >{user.nombres} {user.apellidos} ({user.correo})</option
              >
            {/each}
          </select>
        </div>
        <div class="col">
          <label class="form-label">Tipo</label>
          <input type="text" class="form-control" bind:value={tipo} />
        </div>
        <div class="col">
          <label class="form-label">Fecha</label>
          <input
            type="datetime-local"
            class="form-control"
            bind:value={fecha}
          />
        </div>
      </div>
      <button class="btn btn-success" on:click={registrarCita}>Registrar</button
      >
    </div>
  </div>

  <div class="card">
    <div class="card-header bg-success text-white">
      <i class="bi bi-calendar-check"></i> Todas las Citas
    </div>
    <ul class="list-group list-group-flush">
      {#if citas.length === 0}
        <li class="list-group-item">No hay citas registradas aún.</li>
      {:else}
        {#each citas as cita}
          <div class="p-2 border-b">
            <strong>Nombre:</strong>
            {usuarios.find((u) => u.id === cita.uid)?.nombres}
            {usuarios.find((u) => u.id === cita.uid)?.apellidos} |
            <strong>C.C:</strong>
            {usuarios.find((u) => u.id === cita.uid)?.cedula} |
            <strong>Tipo:</strong>
            {cita.tipo} |
            <strong>Fecha:</strong>
            {new Date(cita.fecha).toLocaleString()}
          </div>
        {/each}
      {/if}
    </ul>
  </div>
</div>
