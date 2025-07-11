// package com.Eonline.Education.Configuration;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import org.springframework.security.config.http.SessionCreationPolicy;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.security.web.SecurityFilterChain;
// import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
// import org.springframework.web.cors.CorsConfiguration;
// import org.springframework.web.cors.CorsConfigurationSource;
// import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
// import org.springframework.http.HttpMethod;

// import java.util.List;

// @Configuration
// @EnableWebSecurity
// @EnableMethodSecurity(prePostEnabled = true)
// public class AppConfig {

//     @Bean
//     public SecurityFilterChain securityFilterChain(HttpSecurity http, JwtTokenValidator jwtTokenValidator) throws Exception {
//         http
//                 .cors(cors -> cors.configurationSource(corsConfigurationSource()))
//                 .csrf(csrf -> csrf.disable())
//                 .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
//                 .authorizeHttpRequests(auth -> auth
//                         .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
//                         .requestMatchers("/actuator/health").permitAll()               
//                         .requestMatchers(
//                                 "/", "/api/*", "/auth/**", "/api/auth/**", "/trainee/**", "/trainee/profile",
//                                 "/oauth2/**", "/login/oauth2/**", "/auth/google", "/error"
//                         ).permitAll()
//                         .requestMatchers("/api/admin/**").hasRole("ADMIN")
//                         .requestMatchers("/api/user/**").hasAnyRole("USER", "ADMIN")
//                         .requestMatchers("/api/users/profile").authenticated()
//                         .anyRequest().authenticated()
//                 )
//                 .addFilterBefore(jwtTokenValidator, BasicAuthenticationFilter.class);

//         return http.build();
//     }

//     @Bean
//     public CorsConfigurationSource corsConfigurationSource() {
//         CorsConfiguration cfg = new CorsConfiguration();
//         cfg.setAllowedOriginPatterns(List.of(
//                 "http://localhost",
//                 "http://localhost:5173",
//                 "http://localhost:5174",
//                 "http://localhost:8082",
//                 "http://3.6.36.172:5173",
//                 "http://3.6.36.172:5174",
//                 "http://3.6.36.172:5175",
//                 "http://3.6.36.172:3000",
//                 "https://*.e-education.in",
//                 "https://www.e-education.in",
//                 "https://api.e-education.in",
//                 "https://accounts.google.com"
//         ));

//         cfg.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
//         cfg.setAllowedHeaders(List.of("Authorization", "Cache-Control", "Content-Type"));
//         cfg.setExposedHeaders(List.of("Authorization"));
//         cfg.setAllowCredentials(true);
//         cfg.setMaxAge(3600L);

//         UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//         source.registerCorsConfiguration("/**", cfg);
//         return source;
//     }

//     @Bean
//     public PasswordEncoder passwordEncoder() {
//         return new BCryptPasswordEncoder();
//     }

//     // Register JwtTokenValidator as a Spring-managed bean
//     @Bean
//     public JwtTokenValidator jwtTokenValidator() {
//         return new JwtTokenValidator();
//     }
// }







package com.Eonline.Education.Configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
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
import org.springframework.http.HttpMethod;

import java.util.List;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity(prePostEnabled = true)
public class AppConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http, JwtTokenValidator jwtTokenValidator) throws Exception {
        http
                .cors(cors -> cors.configurationSource(corsConfigurationSource()))
                .csrf(csrf -> csrf.disable())
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                        .requestMatchers("/health", "/actuator/health", "/error").permitAll()
                        .requestMatchers("/", "/api/*", "/auth/**", "/auth/login", "/auth/signup", "/auth/register", "/api/auth/**", "/oauth2/**", "/login/oauth2/**", "/auth/google").permitAll()
                        .requestMatchers("/trainee/**").permitAll()
                        .requestMatchers("/api/admin/**").hasRole("ADMIN")
                        .requestMatchers("/api/user/**").hasAnyRole("USER", "ADMIN")
                        .requestMatchers("/api/users/profile").authenticated()
                        .anyRequest().authenticated()
                )
                .addFilterBefore(jwtTokenValidator, BasicAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration cfg = new CorsConfiguration();
        cfg.setAllowedOriginPatterns(List.of(
                "http://localhost",
                "http://localhost:5173",
                "http://localhost:5174",
                "http://localhost:8082",
                "http://82.29.161.78:5173",
                "http://82.29.161.78:5174",
                "http://82.29.161.78:5175",
                "http://82.29.161.78:3000",
                "https://*.e-education.in",
                "https://www.e-education.in",
                "https://api.e-education.in",
                "https://accounts.google.com"
        ));
        cfg.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        cfg.setAllowedHeaders(List.of("Authorization", "Cache-Control", "Content-Type"));
        cfg.setExposedHeaders(List.of("Authorization"));
        cfg.setAllowCredentials(true);
        cfg.setMaxAge(3600L);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", cfg);
        return source;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public JwtTokenValidator jwtTokenValidator() {
        return new JwtTokenValidator();
    }
}

// Register JwtTokenValidator as a Spring-managed bean







//package com.Eonline.Education.Configuration;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.CorsConfigurationSource;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//
//import java.util.List;
//
//@Configuration
//@EnableWebSecurity
//@EnableGlobalMethodSecurity(prePostEnabled = true)  // Enable method-level security
//public class AppConfig {
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        http
//                .cors(cors -> cors.configurationSource(corsConfigurationSource())) // Attach CORS config
//                .csrf(csrf -> csrf.disable()) // Disable CSRF for API
//                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
//                .authorizeHttpRequests(auth -> auth
//                        .requestMatchers("/api/auth/**").permitAll()  // Make sure auth endpoints are open
//                        .requestMatchers("/api/admin/**").hasRole("ADMIN")
//                        .requestMatchers("/api/user/**").hasAnyRole("USER", "ADMIN")
//                        .anyRequest().authenticated()
//                )
//
//                .addFilterBefore(new JwtTokenValidator(), BasicAuthenticationFilter.class)
//                .httpBasic(); // Remove formLogin() if JWT-based
//
//        return http.build();
//    }
//
//    @Bean
//    public CorsConfigurationSource corsConfigurationSource() {
//        CorsConfiguration cfg = new CorsConfiguration();
//
//        cfg.setAllowedOriginPatterns(List.of( // Allows subdomains dynamically
//
//                "http://localhost:5173",
//                "http://localhost:5174",
//                "http://localhost:8082",
//                "http://localhost:3000",
//                "http://localhost:3306",
//                "http://3.6.36.172:8082",
//                "http://3.6.36.172:3306",
//                "http://3.6.36.172:5173",
//                "http://3.6.36.172:5174",
//                "http://3.6.36.172:3000",
//                "http://3.6.36.172:5175",
//                "https://*.e-education.in",
//                "https://api.e-education.in"
//
//        ));
//
//        cfg.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
//        cfg.setAllowCredentials(true);
//        cfg.setAllowedHeaders(List.of("Authorization", "Cache-Control", "Content-Type"));
//        cfg.setExposedHeaders(List.of("Authorization"));
//        cfg.setMaxAge(3600L);
//
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", cfg);
//        return source;
//    }
//
//    @Bean
//    public PasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
//}



//package com.Eonline.Education.Configuration;
//
//import com.Eonline.Education.Configuration.JwtTokenValidator;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//import org.springframework.web.cors.CorsConfigurationSource;
//
//import java.util.Arrays;
//import java.util.List;
//
//@Configuration
//@EnableWebSecurity
//@EnableGlobalMethodSecurity(prePostEnabled = true)  // Enable method-level security
//public class AppConfig {
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        http
//            .cors().and()  // Ensure CORS is applied before Security
//            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//            .and()
//            .authorizeHttpRequests(authorize -> authorize
//                .requestMatchers("/api/**").authenticated()
//                .anyRequest().permitAll())
//            .addFilterBefore(new JwtTokenValidator(), BasicAuthenticationFilter.class)
//            .csrf().disable()
//            .httpBasic()
//            .and()
//            .formLogin();
//
//        return http.build();
//    }
//
//    @Bean
//    public CorsConfigurationSource corsConfigurationSource() {
//        CorsConfiguration cfg = new CorsConfiguration();
//
//        cfg.setAllowedOrigins(Arrays.asList(
//            "http://localhost:5173",
//            "http://localhost:3000",
//                "http://localhost:8082",
//                "http://13.126.181.47:8082",
//            "http://13.126.181.47:5173",
//                "http://13.126.181.47:3000",
//            "https://e-education.in",
//            "https://api.e-education.in"
//        ));
//
//        cfg.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
//        cfg.setAllowCredentials(true);
//        cfg.setAllowedHeaders(Arrays.asList("Authorization", "Cache-Control", "Content-Type"));
//        cfg.setExposedHeaders(Arrays.asList("Authorization"));
//        cfg.setMaxAge(3600L);
//
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", cfg);
//        return source;
//    }
//
//    @Bean
//    public PasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
//}
