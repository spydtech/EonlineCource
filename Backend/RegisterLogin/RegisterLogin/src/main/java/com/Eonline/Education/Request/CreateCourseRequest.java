package com.Eonline.Education.Request;

import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class CreateCourseRequest {

    @NotBlank(message = "Title is required")
    private String title;

    @NotBlank(message = "Description is required")
    private String description;

    @NotNull(message = "Price is required")
    @Positive(message = "Price must be positive")
    private int price;

    @PositiveOrZero(message = "Discounted price must be non-negative")
    private int discountedPrice;

    @NotNull(message = "Discount percentage is required")
    @PositiveOrZero(message = "Discount percentage must be non-negative")
    @Max(value = 100, message = "Discount percentage cannot exceed 100")
    private int discountPercent;

    private String imageUrl;

    // Custom constructor to set default values for optional fields
    public CreateCourseRequest() {
        this.discountedPrice = 0; // Default value for discounted price
        this.imageUrl = ""; // Default value for image URL
    }
}
