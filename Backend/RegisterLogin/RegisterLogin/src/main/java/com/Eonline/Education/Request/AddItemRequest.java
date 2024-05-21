package com.Eonline.Education.Request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AddItemRequest {

    @NotNull(message = "Course ID is required")
    private Long courseId;

    @NotNull(message = "Price is required")
    @Min(value = 0, message = "Price must be non-negative")
    private Integer price;
}
