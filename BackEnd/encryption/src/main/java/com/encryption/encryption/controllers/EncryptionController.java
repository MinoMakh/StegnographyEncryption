package com.encryption.encryption.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.util.Base64Utils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.encryption.encryption.utils.EncryptionUtil;
import com.encryption.encryption.utils.HelperUtil;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class EncryptionController {

    @PostMapping("/encrypt-image")
    public ResponseEntity<?> encryptImage(
            @RequestParam("message") String message,
            @RequestParam("image") MultipartFile imageFile) throws IOException {

        // Generate a random key (you may replace this with your key generation logic)
        String key = HelperUtil.generateKey(message);

        // Convert MultipartFile to BufferedImage
        BufferedImage image = ImageIO.read(imageFile.getInputStream());

        // Encrypt the image using your encryption helper
        BufferedImage encryptedImage = EncryptionUtil.encrypt(image, message, key);

        // Convert the encrypted image to Base64
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ImageIO.write(encryptedImage, "png", baos);
        String base64Image = Base64Utils.encodeToString(baos.toByteArray());

        // Return JSON with Base64 image and key
        return ResponseEntity.ok(Map.of("encryptedImage", base64Image, "encryptionKey", key));
    }
}
