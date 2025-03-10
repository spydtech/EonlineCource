package com.Eonline.Education.Configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)  // Enable method-level security
public class AppConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeHttpRequests(authorize -> authorize
                         .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()               
                        .requestMatchers("/api/**").authenticated() // Secure API endpoints
                        .requestMatchers("/manifest.json", "/icon.png", "/static/**").permitAll() // Allow access to static resources
                        .anyRequest().permitAll()) // Allow all other requests
                .addFilterBefore(new JwtTokenValidator(), BasicAuthenticationFilter.class) // Add JWT validation filter
                .csrf().disable() // Disable CSRF for stateless APIs
                .cors().configurationSource(corsConfigurationSource()); // Enable CORS

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration cfg = new CorsConfiguration();
        cfg.setAllowedOrigins(Arrays.asList(
                "http://localhost:5173",
                "http://localhost:5174",
                "http://localhost:8082",
                "https://localhost:5173",
                "https://localhost:5174",
                "https://localhost:8082",
                 "http://15.206.164.0:8082",
                "http://13.126.181.47",
                "http://13.126.181.47:8082",
                "http://13.126.181.47:5173",
                "https://13.126.181.47:5173",
                "http://13.126.181.47:5174",
                "https://13.126.181.47:5174",
                "http://13.126.181.47:5175",
                "https://13.126.181.47:5175"
        ));
        cfg.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS")); // Allowed HTTP methods
        cfg.setAllowCredentials(true); // Allow credentials (e.g., cookies)
        cfg.setAllowedHeaders(Arrays.asList("Authorization", "Cache-Control", "Content-Type")); // Allowed headers
        cfg.setExposedHeaders(Arrays.asList("Authorization")); // Exposed headers
        cfg.setMaxAge(3600L); // Max age for CORS preflight requests

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", cfg); // Apply CORS configuration to all endpoints
        return source;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(); // Use BCrypt for password encoding
    }
}
