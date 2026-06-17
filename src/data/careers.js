/**
 * careers.js — Données centralisées pour la page Carrières
 */

// Imports des images pour le carrousel
import waveStaffGroup from '@/assets/images/wave-staff-group_hubeca15715a2865ff6aeea21ab6bf12c6_44869955_1510x1000_resize_q75_bgffffff_box_2.57deda83d0bc1c2fc1dce1d1e026fae2f00624263587d7f269b088e4c1b72818.jpg'
import waveStaffGroup2 from '@/assets/images/wave-staff-group2_hu7ccda5c0366fc6edd57f731a9bc47096_36518819_1722x1000_resize_q75_bgffffff_box_2.dd60b5fdb15be17a0f8ea168479e77f9609d9775f095539d335c010d6db0cab9.jpg'
import waveHackathon from '@/assets/images/wave-hackathon_hu0a1df0b224f4c3bfe70ff8936bef9764_51909984_1516x1000_resize_q75_bgffffff_box_2.e87819325d4b74390d6f888d777b69345fa9472ef996d711593de75c8ee7239b.jpg'
import waveSupport from '@/assets/images/wave-support_huf3d2640287705a9cb9a58e39b542a9b8_41574497_1454x1000_resize_q75_bgffffff_box_2.6852a9da87631070ae12aebfcb9324b7c6890b128527e2e4f636da26a0ebe52c.jpg'

/**
 * Données du héro de la page Carrières
 */
export const heroData = {
  title: 'Une révolution monétaire qui commence par l\'Afrique',
  description: 'Notre équipe développe des services bancaires modernes et abordables pour ceux qui en ont le plus besoin. Rejoignez-nous !',
  image: waveStaffGroup
}
 
/**
 * Valeurs de l'entreprise (4 items)
 */
export const careerValues = [
  {
    number: '01',
    title: 'Notre mission passe avant nos égos',
    description: 'Nous n\'oublions jamais ce pour quoi nous œuvrons — améliorer le quotidien de toutes les personnes qui touchent à nos produits. Les personnes qui utilisent Wave pour travailler, envoyer de l\'argent à leurs proches et mettre de côté ce qu\'ils gagnent sont nos vrais patrons.'
  },
  {
    number: '02',
    title: 'Nous profitons de nos vies à fond — sans remettre au lendemain',
    description: 'Collectivement, nos clients sont notre priorité, mais individuellement nous prenons le temps de vivre pleinement. Que ce soit en adaptant nos horaires à notre vie personnelle, en nous déconnectant ou en prenant de longs congés lorsqu\'on en a besoin.'
  },
  {
    number: '03',
    title: 'Nous sommes d\'une franchise absolue',
    description: 'Dans beaucoup d\'entreprises, admettre ses erreurs est vu comme un signe de faiblesse, et avoir une communication franche en cas de difficulté est tabou. Chez Wave, être honnête à propos de ses erreurs est considéré comme un signe de grandeur et donner des avis francs à ses collaborateurs, comme un signe de générosité.'
  },
  {
    number: '04',
    title: 'Nous maximisons nos capacités à apprendre',
    description: 'Nous réajustons constamment nos objectifs et méthodes pour être plus efficaces et à l\'aise dans notre travail. Et surtout, nous le faisons régulièrement. Plus vite nous nous remettons en question et nous améliorons, en tant que compagnie et en tant qu\'individus, plus vite nous accomplirons notre mission.'
  }
]

/**
 * Section culture (texte + images carrousel)
 */
export const careerCulture = {
  title: 'Travailler chez Wave',
  description: 'Nos offres d\'emploi sont conçues selon un barème interne, en toute transparence afin que votre paie soit basée sur vos compétences et votre expérience, rien d\'autre.',
  images: [
    waveStaffGroup,
    waveStaffGroup2,
    waveHackathon,
    waveSupport
  ]
}

/**
 * Offres d'emploi disponibles
 */
export const jobListings = [
  {
    id: 1,
    title: 'Agent & Distribution Admin Manager',
    location: 'Cameroon (CM)',
    department: 'operations',
    office: 'cameroon'
  },
  {
    id: 2,
    title: 'Agent Operations Regional Lead',
    location: 'Ouagadougou, Burkina Faso',
    department: 'operations',
    office: 'burkina-faso'
  },
  {
    id: 3,
    title: 'Agent Operations Regional Lead',
    location: 'Abidjan, Côte d\'Ivoire',
    department: 'operations',
    office: 'ivory-coast'
  },
  {
    id: 4,
    title: 'Senior Product Manager',
    location: 'Dakar, Senegal',
    department: 'product',
    office: 'senegal'
  },
  {
    id: 5,
    title: 'Backend Engineer',
    location: 'Remote / Lagos, Nigeria',
    department: 'engineering',
    office: 'remote'
  },
  {
    id: 6,
    title: 'Frontend Engineer',
    location: 'Remote / Dakar, Senegal',
    department: 'engineering',
    office: 'remote'
  },
  {
    id: 7,
    title: 'UX/UI Designer',
    location: 'Remote',
    department: 'design',
    office: 'remote'
  },
  {
    id: 8,
    title: 'Marketing Manager - West Africa',
    location: 'Dakar, Senegal',
    department: 'marketing',
    office: 'senegal'
  }
]

/**
 * Options pour le filtre département
 */
export const departments = [
  { value: 'operations', label: 'Operations' },
  { value: 'product', label: 'Product' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'design', label: 'Design' },
  { value: 'marketing', label: 'Marketing' }
]

/**
 * Options pour le filtre bureau
 */
export const offices = [
  { value: 'cameroon', label: 'Cameroon' },
  { value: 'burkina-faso', label: 'Burkina Faso' },
  { value: 'ivory-coast', label: 'Côte d\'Ivoire' },
  { value: 'senegal', label: 'Senegal' },
  { value: 'remote', label: 'Remote' }
]
