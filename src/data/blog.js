// 📁 src/data/blog.js

// 1. Importation officielle de la photo pour que l'alias Vite (@) fonctionne
import couraAvatar from '@/assets/images/coura-headshot_hu823cd907892391db23d049015f11761e_138508_400x400_resize_q75_box.2790536b4bb31e55a29ef29ddc1002a228ee94ce95e1c622a364bacadb79295e.jpg'

export const blogPosts = [
  {
    id: 1,
    slug: 'sn-emi',
    title: 'Wave Mobile Money devient la première fintech opérant dans plusieurs pays de l’UEMOA à être Établissement de Monnaie Électronique',
    author: {
      name: 'Coura Sene',
      role: 'Directrice Régionale',
      avatar: couraAvatar 
    },
    date: 'April 21, 2022',
    excerpt: 'Jeudi, 21 avril 2022 - Dakar : À la date du 14 avril 2022, Wave Digital Finance, filiale du Groupe Wave Mobile Money (Wave), est devenue la première structure non-bancaire, non-opérateur de télécommunications et opérant dans plusieurs marchés de l’espace UEMOA...',
    content: `
      <p class="mb-4"><strong>Jeudi, 21 avril 2022 - Dakar :</strong> À la date du 14 avril 2022, Wave Digital Finance, filiale du Groupe Wave Mobile Money (Wave), est devenue la première structure non-bancaire, non-opérateur de télécommunications et opérant dans plusieurs marchés de l’espace UEMOA, à se faire accorder la licence d’Établissement de Monnaie Électronique (EME) par la Banque Centrale des États de l’Afrique de l’Ouest - BCEAO.</p>
      
      <p class="mb-4">Cette décision de la Banque Centrale est un signal fort de la reconnaissance grandissante pour de nouveaux modèles d’inclusion financière conduits par des fintechs telles que Wave.</p>
      
      <p class="mb-4">Jusqu’ici la fintech panafricaine menait ses activités <em>mobile money</em> à travers des banques partenaires.</p>
      
      <p class="mb-6">Cette licence EME permettra à Wave de proposer désormais ses services et produits financiers directement aux clients. En plus, elle permettra à la fintech de diversifier sa proposition de valeur et d’offrir plus de services financiers tels que <strong>les paiements marchands, l’épargne, le crédit et les transferts d’argent internationaux</strong> en collaboration avec d’autres partenaires de l’écosystème financier de l’espace UEMOA.</p>

      <p class="mb-4">Par rapport à ce développement, Drew Durbin Président-Directeur Général de Wave se réjouit de cette décision de la Banque Centrale : « Nous sommes très heureux d'avoir reçu notre licence EME. Nous sommes reconnaissants envers la Banque Centrale pour son adhésion à notre vision d'offrir des services financiers radicalement inclusifs et abordables. Les autorités nous ont vu grandir pour devenir le fournisseur de services mobile money le plus important au Sénégal <strong>avec plus de 6 millions d'utilisateurs actifs par mois</strong> en seulement 4 ans, et ce n'est que le début d'une nouvelle ère donnant la priorité au client dans le mobile money dans l'UEMOA. »</p>

      <p class="mb-4">Mme Coura Carine Sène, Directrice Régionale de Wave dans l'UEMOA abonde dans le même sens : « <strong>C'est un moment historique pour nous car cela représente à la fois la reconnaissance du travail abattu ces dernières années et l'ouverture à des perspectives encore plus ambitieuses.</strong> Malgré notre position de leader sur le marché, nous n'étions pas en mesure d'offrir tous les services financiers que nous aurions souhaité aux clients. Avec ce nouveau statut d'Établissement de Monnaie Électronique, nous aurons directement accès à la Banque Centrale, au même pied d'égalité que nos principaux concurrents, et nous aurons toutes les cartes en main pour contribuer plus efficacement à leur mission de promotion de l'inclusion financière dans la région. Nous espérons que nos nouveaux produits attireront plus de clients et permettront plus de revenus à nos partenaires de distribution. »</p>

      <p class="mb-4">Le service mobile money de Wave qui a été lancé en 2018 au Sénégal a déjà réussi à révolutionner l'industrie mobile money établie dans l'espace UEMOA et au-delà depuis plusieurs décennies.</p>

      <p class="mb-4">Le modèle unique de Wave et son approche de promotion de l'inclusion financière basée sur les meilleures avancées technologiques lui permettent d'offrir des paiements de facture gratuits, des retraits et dépôts d'argent sans frais et des transferts à seulement 1%, - le rendant jusqu'à 70% plus abordable comparé aux structures de prix traditionnelles de ses concurrents.</p>

      <p class="mb-8">« <strong>Notre souhait est d'étendre assez rapidement notre licence à d'autres pays de l'UEMOA pour que la totalité de notre base de clientèle dans la région puisse en bénéficier également.</strong> » a ajouté Mme Sène. Un pas de plus dans la mission de Wave de faire de l'Afrique un continent cashless.</p>

      <h3 class="text-xl font-bold text-[#1d1d4d] mb-3">À propos du Groupe Wave Mobile Money</h3>
      <p class="mb-6">Wave Mobile Money offre des services financiers radicalement inclusifs et extrêmement abordables à des millions d'utilisateurs en Afrique. Nous développons des solutions très abordables qui permettent aux clients d'épargner, de transférer et d'emprunter de l'argent leur permettant de réaliser leur rêve. Nous sommes fiers de toujours mettre le client en premier.</p>

      <h3 class="text-xl font-bold text-[#1d1d4d] mb-3">A propos de Wave Finance Digital</h3>
      <p class="mb-6">Wave Digital Finance est une entité du Groupe Wave Mobile Money qui vient d’obtenir une licence d’Établissement de Monnaie Électronique de la Banque Centrale des Etats de l’Afrique de l’Ouest. Son ambition est d’émettre de la monnaie électronique à partir du Sénégal et d’établir des partenariats stratégiques de distribution dans la zone UEMOA.</p>

      <p class="mb-1">Site web : <a href="#" class="text-[#4c49ed] hover:underline">wave.com</a></p>
      <p class="mb-6">LinkedIn : <a href="#" class="text-[#4c49ed] hover:underline">www.linkedin.com/company/wavemm/</a></p>

      <p class="mb-1">Pour plus d’informations, prière de contacter :</p>
      <p class="mb-1">Mme Gnagna KONÉ</p>
      <p class="mb-1">Directrice des relations publiques UEMOA</p>
      <p class="mb-1">Wave Mobile Money</p>
      <p class="mb-10">Email : <a href="mailto:gnagna@wave.com" class="text-[#4c49ed] hover:underline">gnagna@wave.com</a> | Téléphone : +221 76 600 83 71</p>

      <hr class="border-gray-200 mb-6" />

      <p class="italic text-gray-700 mb-6">We work on Wave because we think it's <a href="#" class="text-[#4c49ed] hover:underline">an extremely effective way to improve the world</a>. If that's how you want to spend your career too, <a href="#" class="text-[#4c49ed] hover:underline">come work with us</a>!</p>

      <p class="italic text-gray-700 mb-6">If you liked this post, you can subscribe to <a href="#" class="text-[#4c49ed] hover:underline">our RSS</a> or our mailing list:</p>
    `
  }
]