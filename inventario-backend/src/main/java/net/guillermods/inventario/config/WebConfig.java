package net.guillermods.inventario.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig {


    @Bean @Profile("dev")
	public WebMvcConfigurer corsConfigurerForDev() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**")
				.allowedMethods("GET", "PUT", "POST","DELETE", "OPTIONS")
				.allowedOrigins("http://localhost:5173", "http://127.0.0.1:5173");
			}
		};
	}

    @Bean @Profile("prod")
	public WebMvcConfigurer corsConfigurerForProd() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**")
				.allowedMethods("GET", "PUT", "POST","DELETE", "OPTIONS")
				.allowedOrigins("https://inventario.guillermods.net");
			}
		};
	}
}
