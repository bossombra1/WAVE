// src/data/businessFeatures.js

import bulkpayIcon        from '@/assets/images/bulkpay.png'
import portalBulkpay      from '@/assets/images/business-portal-bulkpay.svg'
import patternLilacRight  from '@/assets/images/angle_pattern_lilac_right_crop.png'

import bizappIcon         from '@/assets/images/bizapp.png'
import merchantScan       from '@/assets/images/merchantscan.png'
import patternBlueLeft    from '@/assets/images/round_pattern_light_blue_alt.png'

import collectionsIcon    from '@/assets/images/collections.png'
import collectionsVisual  from '@/assets/images/collections_2.png'

import checkoutIcon       from '@/assets/images/checkoutapi.png'
import checkoutVisual     from '@/assets/images/checkout-app.svg'
import patternLilacLeft   from '@/assets/images/angle_pattern_lilac_left_crop.png'

export const businessFeatures = [
  {
    id: 'mass-payments',
    badgeText: 'Paiements en masse',
    badgeIcon: bulkpayIcon,
    title: "Envoyez de l'argent à n'importe qui : 1 % pour vous, gratuit pour le destinataire",
    description: "Envoyez de l'argent à n'importe qui simplement avec son numéro de téléphone — qu'il ait Wave ou un smartphone, ou non — et il peut le récupérer instantanément auprès de n'importe quel agent Wave.",
    visualImg:    portalBulkpay,
    patternImg:   patternLilacRight,
    patternClass: 'pattern-lilac-right',
    imageClass:   'img--bulkpay',
    isDarkBg:     true,
    imageRight:   true
  },
  {
    id: 'business-app',
    badgeText: "L'appli Business",
    badgeIcon: bizappIcon,
    title: "Acceptez les paiements physiques de dizaines de millions d'utilisateurs de Wave",
    description: "Augmentez vos ventes grâce à des paiements plus pratiques, sécurisés et gratuits pour les clients. Les premiers 20 000 CFA de paiement sont gratuits pour vous chaque jour, avec des frais de 1 % par la suite.",
    visualImg:    merchantScan,
    patternImg:   patternBlueLeft,
    patternClass: 'pattern-blue-left',
    imageClass:   'img--merchantscan',
    isDarkBg:     false,
    imageRight:   false
  },
  {
    id: 'collections',
    badgeText: 'Collecte',
    badgeIcon: collectionsIcon,
    title: "Déposez facilement l'argent de votre réseau",
    description: "Permettez à vos agents, distributeurs ou partenaires de déposer leurs fonds directement sur votre compte Wave Business depuis n'importe quel point de vente Wave, réduisant ainsi les risques liés au transport d'espèces.",
    visualImg:    collectionsVisual,
    patternImg:   null,
    patternClass: null,
    imageClass:   'img--collections',
    isDarkBg:     true,
    imageRight:   true
  },
  {
    id: 'checkout-api',
    badgeText: 'API Checkout',
    badgeIcon: checkoutIcon,
    title: "Augmentez les ventes sur votre site web",
    description: "Transformez davantage de paniers d'achat sur votre site en ventes finalisées grâce aux meilleures API du marché.",
    visualImg:    checkoutVisual,
    patternImg:   patternLilacLeft,
    patternClass: 'pattern-lilac-left',
    imageClass:   'img--checkout',
    isDarkBg:     false,
    imageRight:   false
  }
]