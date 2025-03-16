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
                        .requestMatchers("/api/").authenticated()
                        .anyRequest().permitAll())
                .addFilterBefore(new JwtTokenValidator(), BasicAuthenticationFilter.class)
                .csrf().disable()
                .cors().configurationSource(corsConfigurationSource())
                .and()
                .httpBasic()
                .and()
                .formLogin();

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        return request -> {
            CorsConfiguration cfg = new CorsConfiguration();
           cfg.setAllowedOrigins(Arrays.asList(
                    "http://localhost:5173",
                    "http://localhost:3000",
                    "http://localhost:5174",
                    "http://localhost:8082",
                    "http://13.126.181.47:3000",
                    "http://13.126.181.47:8082",
                    "https://13.126.181.47:8082", // Added HTTPS backend
                    "http://13.126.181.47:3306",
                    "http://13.126.181.47:5173",
                    "http://13.126.181.47:5174",
                    "http://13.126.181.47:5175",
                    "https://e-education.in",
                    "https://e-education.in:8082",
                    "http://15.206.164.0",
                    "http://15.206.164.0:8082"
                ));

            cfg.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
            cfg.setAllowCredentials(true);
            cfg.setAllowedHeaders(Arrays.asList("*")); // Allow all headers
            cfg.setAllowedHeaders(Arrays.asList("Authorization", "Cache-Control", "Content-Type"));
            cfg.setExposedHeaders(Arrays.asList("Authorization"));
            cfg.setMaxAge(3600L);
            return cfg;
        };
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
