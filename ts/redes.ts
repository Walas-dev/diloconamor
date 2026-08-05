const WHATSAPP_NUMBER = '584248836506'

const getWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

export const whatsappLinks = {
  general: getWhatsAppUrl('Hola, buenas tardes. Me gustaría saber más sobre sus arreglos y detalles personalizados.'),
}

export const instragramLink='https://www.instagram.com/diloconamor_mgta'


export const SITE_URL = 'https://diloconamor.com'
export const SHARE_TEXT = 'Regalos y detalles hechos a mano, con cariño 💛'
