package net.guillermods.inventario.products;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
@EqualsAndHashCode
public class Product {

    @Id
    private String id;

    @NotBlank(message = "name must be provided")
    private String name;

    @NotBlank(message = "description must be provided")
    private String description;

    @NotNull(message = "quantity must be provided")
    private Integer quantity;

    @NotBlank(message = "imageUrl url must be provided")
    private String imageUrl;

}