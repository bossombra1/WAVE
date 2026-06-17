/**
 * testimonials.js — avis clients affichés dans la section témoignages.
 * On importe les photos : Vite renvoie leur URL finale.
 */
import firmin from '@/assets/images/testimonial-firmin.png'
import awa from '@/assets/images/testimonial-awa.png'

export const testimonials = [
  {
    id: 1,
    name: 'FIRMIN',
    quote: 'Maintenant, je n’utilise que Wave pour envoyer de l’argent à ma famille.',
    photo: firmin,
  },
  {
    id: 2,
    name: 'AITA',
    quote: 'Je recharge mon Woyofal avec Wave. C’est simple, facile et efficace, tu peux tout faire avec sans te déplacer.',
    photo: awa,
  },
]
