package culturalmerge.culturalmerge.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.constraints.NotBlank;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Value("${spring.security.user.name:admin}")
    private String realUser;

    @Value("${spring.security.user.password:admin123}")
    private String realPass;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginDTO dto) {
        if (realUser.equals(dto.getUsername()) && realPass.equals(dto.getPassword())) {
            // In una app reale devi generare JWT/Session, qui solo “OK”
            return ResponseEntity.ok("Login eseguito");
        }
        return ResponseEntity.status(401).body("Credenziali errate");
    }

    public static class LoginDTO {
        @NotBlank
        private String username;
        @NotBlank
        private String password;

        public LoginDTO() {
        }

        public LoginDTO(String username, String password) {
            this.username = username;
            this.password = password;
        }

        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }
}