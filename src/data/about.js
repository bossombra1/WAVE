
// Importation des photos de l'équipe dirigeante
import drewImage from '@/assets/images/drew-headshot_hu26e580986edb815a810b42dc2193d8ab_653879_400x400_resize_q75_box.b26520ddeabfae69be32b04f93792e0e74838aa20d1b6d6fd1b5828df4e801e6.jpg'
import couraImage from '@/assets/images/coura-headshot_hu823cd907892391db23d049015f11761e_138508_400x400_resize_q75_box.2790536b4bb31e55a29ef29ddc1002a228ee94ce95e1c622a364bacadb79295e.jpg'
import kizitoImage from '@/assets/images/kizito-headshot_hub2eca5c51f37b0ccc07df714757beb60_103781_400x400_resize_q75_box.ae2a2b350b3179fe9e8c2ec35c6ae1b1e61830e120318b7e92b490ef37d938b6.jpg'
import ruthImage from '@/assets/images/ruth-headshot_hu01b5187bd68a6785ec2547464c47ed49_86858_400x400_resize_q75_box.781bd01900d19684cb2b01c8452f5edcfe2b7dd49f83e4a92135c9f829d84eb8.jpg'
import chrisImage from '@/assets/images/chris-headshot_hu3a6b30e735e322e433e7ad81632f6573_54785_400x400_resize_q75_box.eae334c947e5516490746c1c3efa020fac1c34763992d96f81b71ed02272c4fa.jpg'
import malickImage from '@/assets/images/malick-headshot_hu0369d8374e169990d00c0d2b5665fc2a_104864_400x400_resize_q75_box.9486d96c6ad6d25b81e173420d33d28db0bcfa2657ada67e32009b0728a38bea.jpg'
import sidImage from '@/assets/images/sid-headshot_hu62d33f881543e644f55df4f250679cf1_125751_400x400_resize_q75_box.fe110977a7d50c899f1f9092d0c41fa3b17bd519800e3d4b53fd10ff05905e2f.jpg'
import emilyImage from '@/assets/images/emily-headshot_hu893de23c1aac3baf33324c38698325d3_126051_400x400_resize_q75_box.2b083adb1063225d6d9dbecd8614ecaed320d45636f7e6db9c3ea3268f72feb3.jpg'
import katierImage from '@/assets/images/katier-headshot_hu02aa61ae1d9de35cbe238d2676170cb9_137300_400x400_resize_q75_box.b85c56894a3ae900e9d325453c9634a5dfe0686edcf13de583562bd9c033e83d.jpg'
import kevinImage from '@/assets/images/kevin-headshot_hu02aa61ae1d9de35cbe238d2676170cb9_160923_400x400_resize_q75_box.d9c24f0840c7d5156a1f5a006292c0d840afaeb1c33e9c78568f79ee50f088fa.jpg'

// Importation des logos des investisseurs
import sequoiaLogo from '@/assets/images/sequoia.svg'
import stripeLogo from '@/assets/images/stripe.svg'
import foundersLogo from '@/assets/images/founders-fund-2x.png'
import ycLogo from '@/assets/images/y-combinator-2x.png'
import ribbitLogo from '@/assets/images/rabbit.png'
import partechLogo from '@/assets/images/partech.svg'


export const aboutData = {
  // Section 1: Hero Cashless
  hero: {
    title: "Notre mission, faire de <br/>l'Afrique le premier <br/> continent cashless du <br/> monde",
    description: "Sur un continent où plus de la moitié de la<br/> population n'a pas de compte bancaire, Wave offre <br/>le premier réseau de services financiers sans frais <br/>de gestion de compte, disponible instantanément et <br/>partout !",
    images: {
      merchant: "@/assets/images/support-qr.png"
    }
  },

  // Section 2: Infrastructure
  infrastructure: {
    title: "Nous construisons une infrastructure financière qui facilite le quotidien",
    caption: "Chaque jour nous relevons de nouveaux défis pour nos utilisateurs qui bâtissent l'économie de demain",
    paragraphs: [
      "Le succès du mobile money au Kenya a sorti près d'un million de personnes de la pauvreté. Pourtant, plus de 10 ans plus tard, la plupart des Africains n'ont toujours pas accès à des outils d'épargne, de transfert ou de crédit abordables qui leur permettraient d'entreprendre et assurer les besoins de leurs familles.",
      "Wave apporte une solution au problème en utilisant la technologie pour bâtir un réseau financier radicalement inclusif et extrêmement abordable."
    ],
    image: "@/assets/images/man-scanning-agent_hued0fdf3db7592fa860b8c5e72bf36b65_8334351_1000x666_resize_q75_box.b46d31a507d9c6be798c67b1a675191f0d3aa1db21f71393583ddab483a27b6e.jpg"
  },

  // Section 3: Équipe Dirigeante
  teamSection: {
    title: "L'équipe dirigeante",
    introParagraphs: [
      "Notre cofondateur et directeur général, Drew Durbin, est animé depuis toujours par la volonté de <br/>créer des produits simples ayant un fort impact social.",
      "Il a d'abord fondé Sendwave, aujourd'hui la principale entreprise de transferts d'argent digitaux <br/>vers l'Afrique, avant de lancer Wave avec pour mission de rendre la finance digitale à faible coût <br/>accessible à toutes et à tous sur le continent."
    ],
    members: [
      { id: 1, name: "DREW DURBIN", role: "DIRECTEUR GÉNÉRAL", avatar: drewImage },
      { id: 2, name: "COURA SENE", role: "DIRECTRICE RÉGIONALE", avatar: couraImage },
      { id: 3, name: "KIZITO OKUTE", role: "DIRECTEUR DES OPÉRATIONS AGENT", avatar: kizitoImage },
      { id: 4, name: "RUTH LEE", role: "DIRECTEUR TECHNIQUE", avatar: ruthImage },
      { id: 5, name: "CHRIS WILLIAMSON", role: "DIRECTEUR PAIEMENTS", avatar: chrisImage },
      { id: 6, name: "MALICK GUEYE", role: "DIRECTEUR GÉNÉRAL SÉNÉGAL", avatar: malickImage },
      { id: 7, name: "SID SRIDHAR", role: "DIRECTEUR DES AFFAIRES", avatar: sidImage },
      { id: 8, name: "EMILY AUSTIN", role: "DIRECTRICE TALENTS ET CULTURE", avatar: emilyImage },
      { id: 9, name: "KATIER BAMBA", role: "DIRECTEUR GÉNÉRAL CÔTE D'IVOIRE", avatar: katierImage },
      { id: 10, name: "KEVIN ODIORNE", role: "DIRECTEUR FINANCIER", avatar: kevinImage }
    ]
  },

  //  Section 4: Investisseurs 
  investors: [
    { id: 1, name: "Sequoia", logo: sequoiaLogo },
    { id: 2, name: "Stripe", logo: stripeLogo },
    { id: 3, name: "Founders Fund", logo: foundersLogo },
    { id: 4, name: "Y Combinator", logo: ycLogo },
    { id: 5, name: "Ribbit Capital", logo: ribbitLogo },
    { id: 6, name: "Partech", logo: partechLogo }
  ]
}