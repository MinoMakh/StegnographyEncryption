package com.encryption.encryption.utils;

import java.awt.image.BufferedImage;

public class DecryptionUtil {

    public static String decrypt(BufferedImage image, String key) {
        StringBuilder secretMessage = new StringBuilder();
        String binaryKey = HelperUtil.stringToBinary(key);
        int messageLength = Integer.parseInt(key.split("\\|")[1]);
        int keyCount = 0;

        for (int y = 0; y < image.getHeight(); y++) {
            for (int x = 0; x < image.getWidth(); x++) {
                if (secretMessage.length() >= messageLength) {
                    return secretMessage.toString();
                }

                // In case count exceeded the binaryKey reset it
                if (keyCount >= binaryKey.length()) {
                    keyCount = 0;
                }

                if (binaryKey.charAt(keyCount++) == '1') {
                    // Get RGB value of the pixel
                    int rgb = image.getRGB(x, y);

                    // Extract the red, green, and blue components
                    int red = (rgb >> 16) & 0xFF; // Shift right by 16 bits and mask
                    int green = (rgb >> 8) & 0xFF; // Shift right by 8 bits and mask
                    int blue = rgb & 0xFF; // Mask the last 8 bits

                    secretMessage.append(red & 1);
                    if (secretMessage.length() >= messageLength) {
                        return secretMessage.toString();
                    }
                    secretMessage.append(green & 1);
                    if (secretMessage.length() >= messageLength) {
                        return secretMessage.toString();
                    }
                    secretMessage.append(blue & 1);
                }
            }
        }
        return secretMessage.toString();
    }

}
