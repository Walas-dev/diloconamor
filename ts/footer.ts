
import React from 'react';

const WHATSAPP_NUMBER = '584123594400'

const getWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

export const whatsappLinks = {
  general: getWhatsAppUrl('Hola, buenas tardes. Me gustaría saber más sobre sus arreglos y detalles personalizados.'),
}

 export interface RedSocial {
    id: number; name: string; ref: string;
    p?: string; vb: string; type: 'link' | 'share'; icon?: React.ReactNode;
}



