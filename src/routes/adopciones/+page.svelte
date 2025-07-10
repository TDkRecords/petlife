<script>
    export let data;
    import "$lib/assets/css/style.css";
</script>

<section class="py-5 bg-light">
    <div class="container">
        <h2 class="text-success fw-bold mb-4 text-center">
            <i class="fas fa-paw me-2"></i>Animales en adopción
        </h2>

        {#if data.pets.length > 0}
            <div class="row g-4">
                {#each [...new Map(data.pets.map( (p) => [p.id, p], )).values()] as pet (pet.id)}
                    <div class="col-md-4">
                        <div class="card h-100 shadow-sm">
                            <img
                                src={pet.photos[0]?.medium ||
                                    "https://via.placeholder.com/400x300?text=Sin+foto"}
                                class="card-img-top"
                                alt={pet.name}
                            />
                            <div class="card-body text-center">
                                <h5 class="fw-semibold">{pet.name}</h5>
                                <p class="text-muted mb-1">
                                    {pet.breeds.primary}
                                </p>
                                <p class="mb-0">
                                    <i
                                        class="fas fa-map-marker-alt text-success me-1"
                                    ></i>{pet.contact.address.city}, {pet
                                        .contact.address.state}
                                </p>
                            </div>
                            <div
                                class="card-footer bg-white border-0 text-center"
                            >
                                <a
                                    href={pet.url}
                                    target="_blank"
                                    class="btn btn-success btn-sm fw-semibold"
                                >
                                    <i class="fas fa-external-link-alt me-1"
                                    ></i> Ver más
                                </a>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        {:else}
            <div class="alert alert-warning text-center">
                No se encontraron animales disponibles para adopción en este
                momento.
            </div>
        {/if}
    </div>
</section>
