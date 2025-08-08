<script>
  import { onMount } from "svelte";
  import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";
  import { db } from "$lib/assets/js/firebase";

  let alimentos = [];

  let form = {
    nombre: "",
    marca: "",
    tipo: "",
    descripcion: "",
    precio: "",
    stock: "",
    imagen: "",
    categoria: "",
  };

  let editando = false;
  let idEditando = null;

  const fetchAlimentos = async () => {
    const querySnapshot = await getDocs(collection(db, "alimentos"));
    alimentos = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  };

  onMount(fetchAlimentos);

  const resetFormulario = () => {
    form = {
      nombre: "",
      marca: "",
      tipo: "",
      descripcion: "",
      precio: "",
      stock: "",
      imagen: "",
      categoria: "",
    };
    editando = false;
    idEditando = null;
  };

  const guardar = async () => {
    const datos = {
      ...form,
      precio: Number(form.precio),
      stock: Number(form.stock),
    };

    if (editando) {
      const docRef = doc(db, "alimentos", idEditando);
      await updateDoc(docRef, datos);
    } else {
      await addDoc(collection(db, "alimentos"), datos);
    }

    await fetchAlimentos();
    resetFormulario();
  };

  const eliminarAlimento = async (id) => {
    if (confirm("¿Eliminar este alimento?")) {
      await deleteDoc(doc(db, "alimentos", id));
      await fetchAlimentos();
    }
  };

  const actualizarAlimento = (alimento) => {
    form = { ...alimento };
    editando = true;
    idEditando = alimento.id;
    window.scrollTo({ top: 0, behavior: "smooth" }); // Ir al formulario
  };
</script>

<div class="container py-4">
  <h3 class="text-success text-center mb-4">
    {editando ? "Editar alimento" : "Añadir nuevo alimento"}
  </h3>

  <!-- FORMULARIO -->
  <form
    on:submit|preventDefault={guardar}
    class="bg-white p-4 rounded shadow-sm border border-success mb-5"
  >
    <div class="row g-3">
      <div class="col-md-6">
        <input
          class="form-control"
          placeholder="Nombre"
          bind:value={form.nombre}
          required
        />
      </div>
      <div class="col-md-6">
        <input
          class="form-control"
          placeholder="Marca"
          bind:value={form.marca}
          required
        />
      </div>
      <div class="col-md-6">
        <input
          class="form-control"
          placeholder="Tipo (seco, snack...)"
          bind:value={form.tipo}
          required
        />
      </div>
      <div class="col-md-6">
        <input
          class="form-control"
          placeholder="Categoría (perro, gato...)"
          bind:value={form.categoria}
          required
        />
      </div>
      <div class="col-md-6">
        <input
          type="number"
          class="form-control"
          placeholder="Precio"
          bind:value={form.precio}
          required
        />
      </div>
      <div class="col-md-6">
        <input
          type="number"
          class="form-control"
          placeholder="Stock"
          bind:value={form.stock}
          required
        />
      </div>
      <div class="col-12">
        <input
          class="form-control"
          placeholder="URL de imagen"
          bind:value={form.imagen}
          required
        />
      </div>
      <div class="col-12">
        <textarea
          class="form-control"
          placeholder="Descripción"
          bind:value={form.descripcion}
          rows="2"
          required
        ></textarea>
      </div>
    </div>

    <div class="mt-4 d-flex justify-content-between">
      <button type="submit" class="btn btn-success">
        {editando ? "Guardar cambios" : "Añadir alimento"}
      </button>
      {#if editando}
        <button
          type="button"
          class="btn btn-secondary"
          on:click={resetFormulario}
        >
          Cancelar edición
        </button>
      {/if}
    </div>
  </form>

  <!-- LISTADO DE ALIMENTOS -->
  <h2 class="text-center mb-4 text-success">Alimentos para Mascotas</h2>

  <div class="row">
    {#each alimentos as alimento}
      <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
        <div class="card card-alimento h-100">
          <img
            class="card-img-top"
            src={alimento.imagen}
            alt={alimento.nombre}
            style="height: 220px; object-fit: cover;"
          />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title titulo">{alimento.nombre}</h5>
            <span class="badge rounded-pill categoria-badge mb-2"
              >{alimento.categoria}</span
            >
            <p class="card-text">{alimento.descripcion}</p>
            <ul class="list-group list-group-flush mb-3 mt-auto">
              <li class="list-group-item">
                Marca: <strong>{alimento.marca}</strong>
              </li>
              <li class="list-group-item">
                Tipo: <strong>{alimento.tipo}</strong>
              </li>
              <li class="list-group-item">
                Stock: <strong>{alimento.stock}</strong>
              </li>
              <li class="list-group-item precio">
                Precio: $ {alimento.precio}
              </li>
            </ul>
            <div class="d-flex justify-content-between gap-2">
              <button
                class="btn btn-outline-danger btn-sm w-50"
                on:click={() => eliminarAlimento(alimento.id)}
              >
                🗑️ Borrar
              </button>
              <button
                class="btn btn-outline-primary btn-sm w-50"
                on:click={() => actualizarAlimento(alimento)}
              >
                ✏️ Actualizar
              </button>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  :global(body) {
    background-color: #f0f2f5;
  }

  .card-alimento {
    background-color: white;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
    border: 1px solid #dee2e6;
    border-radius: 0.75rem;
  }

  .card-alimento:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 128, 0, 0.1);
  }

  .titulo {
    color: #2e7d32;
    font-weight: 600;
  }

  .precio {
    color: #28a745;
    font-weight: bold;
  }

  .categoria-badge {
    background-color: #d4edda;
    color: #155724;
  }

  .card-text {
    font-size: 0.9rem;
    color: #333;
  }

  .btn-sm {
    font-size: 0.85rem;
  }
</style>
