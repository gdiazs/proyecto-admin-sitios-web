package net.guillermods.inventario.products;

import jakarta.validation.constraints.NotNull;

public record ProductQuantityDto(@NotNull Integer quantity) {}
