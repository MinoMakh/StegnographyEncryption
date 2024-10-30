package com.encryption.encryption.utils;

import java.awt.image.BufferedImage;

public class EncryptionUtil {

    public static BufferedImage encrypt(BufferedImage image, String secretMessage, String key) {
        String binaryKey = HelperUtil.stringToBinary(key);
        String binarySecretMessage = HelperUtil.stringToBinary(secretMessage);
        int keyCount = 0;
        int messageCount = 0;

        for (int y = 0; y < image.getHeight(); y++) {
            for (int x = 0; x < image.getWidth(); x++) {
                // In case count exceeded the binaryKey reset it
                if (keyCount >= binaryKey.length()) {
                    keyCount = 0;
                }

                // Check if all bits of the secret message have been entered
                if (messageCount < binarySecretMessage.length() && binaryKey.charAt(keyCount) == '1') {
                    // Get RGB value of the pixel
                    int rgb = image.getRGB(x, y);

                    // Extract the red, green, and blue components
                    int red = (rgb >> 16) & 0xFF; // Shift right by 16 bits and mask
                    int green = (rgb >> 8) & 0xFF; // Shift right by 8 bits and mask
                    int blue = rgb & 0xFF; // Mask the last 8 bits

                    // Update red component if there's a corresponding bit to add
                    if (messageCount < binarySecretMessage.length()) {
                        char bitToAdd = binarySecretMessage.charAt(messageCount++);
                        int newLSB = (bitToAdd == '1') ? 1 : 0;
                        red = (red & 0xFE) | newLSB;
                    }

                    // Update green component if there's a corresponding bit to add
                    if (messageCount < binarySecretMessage.length()) {
                        char bitToAdd = binarySecretMessage.charAt(messageCount++);
                        int newLSB = (bitToAdd == '1') ? 1 : 0;
                        green = (green & 0xFE) | newLSB;
                    }

                    // Update blue component if there's a corresponding bit to add
                    if (messageCount < binarySecretMessage.length()) {
                        char bitToAdd = binarySecretMessage.charAt(messageCount++);
                        int newLSB = (bitToAdd == '1') ? 1 : 0;
                        blue = (blue & 0xFE) | newLSB;
                    }

                    // Set the new RGB value
                    rgb = (red << 16) | (green << 8) | blue;
                    image.setRGB(x, y, rgb);
                }

                // Increment the key count after processing
                keyCount++;
                
                // If the message has been fully encrypted, return the image
                if (messageCount >= binarySecretMessage.length()) {
                    return image;
                }
            }
        }

        // Return the image after finishing the encryption process
        return image;
    }
}
