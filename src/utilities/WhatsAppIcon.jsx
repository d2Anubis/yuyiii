import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

export default function App() {
  return (
    <FloatingWhatsApp 
      phoneNumber="+918657519123" // Set the phone number here
      accountName="Yuyiii" // You can add an account name
      statusMessage="Typically replies within 5 minutes"
      allowClickAway // This will close the chat if the user clicks outside
      notification // Enables notifications on the floating button
      notificationSound // Optional: Enables notification sound
    />
  );
}
