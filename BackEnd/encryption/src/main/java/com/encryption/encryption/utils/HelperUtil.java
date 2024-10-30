package com.encryption.encryption.utils;

import java.util.UUID;

public class HelperUtil {

    /// Returns the binary representation of a string
    public static String stringToBinary(String string) {
        StringBuilder binaryString = new StringBuilder();

        // Loop through the characters in the string
        for (char character : string.toCharArray()) {
            // Convert character to binary string and make sure its 8 bits long
            String binaryChar = String.format("%8s", Integer.toBinaryString(character)).replace(' ', '0');
            binaryString.append(binaryChar);
        }
        return binaryString.toString();
    }

    // Returns an ASCII string representation of a binary string
    public static String binaryToString(String binary) {
        StringBuilder text = new StringBuilder();
    
        // Loop through the binary string in 8-bit chunks
        for (int i = 0; i < binary.length(); i += 8) {
            // Check if there are enough bits left for a full byte
            if (i + 8 <= binary.length()) {
                // Get 8-bit segment
                String byteString = binary.substring(i, i + 8);
    
                // Convert binary to decimal integer, then to character
                int charCode = Integer.parseInt(byteString, 2);
                char character = (char) charCode;
    
                // Append character to the result
                text.append(character);
            } else {
                // Handle remaining bits (if any)
                String byteString = binary.substring(i); // Get the remaining bits
                int charCode = Integer.parseInt(byteString, 2);
                char character = (char) charCode;
    
                // Append character to the result
                text.append(character);
            }
        }
        return text.toString();
    }

    /// Returns a unique key id of 128 bits
    public static String generateKey(String secretMessage) {
        String uniqueKey = UUID.randomUUID().toString();
        // Add the length
        uniqueKey += "|" + HelperUtil.stringToBinary(secretMessage).length();
        return uniqueKey;
    }

    
}
