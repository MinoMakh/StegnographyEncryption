package com.encryption.encryption.controllers;

import java.awt.image.BufferedImage;
import java.io.IOException;
import javax.imageio.ImageIO;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.encryption.encryption.utils.DecryptionUtil;
import com.encryption.encryption.utils.HelperUtil;

@RestController
@RequestMapping("/api")
public class DecryptionController {

    @PostMapping("/decrypt-image")
    public ResponseEntity<String> encryptImage(
            @RequestParam("key") String key,
            @RequestParam("image") MultipartFile imageFile) throws IOException {

        // Convert MultipartFile to BufferedImage
        BufferedImage image = ImageIO.read(imageFile.getInputStream());

        // Decrypt the image
        String messageBinary = DecryptionUtil.decrypt(image, key);

        // Convert the binary into a string
        String secretMessage = HelperUtil.binaryToString(messageBinary);
        return ResponseEntity.ok(secretMessage);
    }

}
