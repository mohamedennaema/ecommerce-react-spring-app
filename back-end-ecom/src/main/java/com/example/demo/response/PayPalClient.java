package com.example.demo.response;

import com.paypal.core.PayPalHttpClient;
import com.paypal.core.PayPalEnvironment;

public class PayPalClient {

    private static final String clientId = "AQLN0K662Wltcdm-lHlCG5sxOerNqzE1ZiADI6VZguXFOtKcDTJ9y7QBDIuCvnrNbTAh9O3I1sAxE5iU";
    private static final String secretKey = "EAtBpyKYVlKowWesRr-IhiU-fH5RGoC91RwS6mpGVpnlWjqwV_UQubzw_yarSuco6JvIgJS8DLEnNfuO";

    // Create an environment
    private static final PayPalEnvironment environment = new PayPalEnvironment.Sandbox(clientId, secretKey);

    // Create a PayPalHttpClient
    public static PayPalHttpClient client() {
        return new PayPalHttpClient(environment);
    }
}
