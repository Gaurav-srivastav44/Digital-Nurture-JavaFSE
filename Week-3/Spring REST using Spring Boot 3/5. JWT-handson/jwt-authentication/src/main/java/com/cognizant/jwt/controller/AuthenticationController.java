package com.cognizant.jwt.controller;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Date;
import java.util.Map;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@RestController
public class AuthenticationController {

    private static final String SECRET_KEY = "mysecretkeymysecretkeymysecretkey12";

    @GetMapping(value = "/authenticate", produces = MediaType.APPLICATION_JSON_VALUE)
    public Map<String, String> authenticate(@RequestHeader("Authorization") String authorizationHeader) {
        String base64Credentials = authorizationHeader.substring("Basic ".length());
        byte[] decodedBytes = Base64.getDecoder().decode(base64Credentials);
        String credentials = new String(decodedBytes, StandardCharsets.UTF_8);
        String[] values = credentials.split(":", 2);
        String username = values[0];
        String password = values.length > 1 ? values[1] : "";

        String token = Jwts.builder()
                .setSubject(username)
                .claim("username", username)
                .claim("password", password)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 600000))
                .signWith(Keys.hmacShaKeyFor(SECRET_KEY.getBytes(StandardCharsets.UTF_8)), SignatureAlgorithm.HS256)
                .compact();

        return Map.of("token", token);
    }
}
