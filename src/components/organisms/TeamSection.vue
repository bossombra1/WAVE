<script setup>
import BaseHeading from '@/components/atoms/BaseHeading.vue'
import BaseText from '@/components/atoms/BaseText.vue'
import TeamMemberCard from '@/components/molecules/TeamMemberCard.vue'
import { aboutData } from '@/data/about.js'

// Extraction des données de l'équipe
const { teamSection } = aboutData
</script>

<template>
  <section class="team-section">
    <div class="team-container">
      
      <div class="team-header">
        <BaseHeading level="2" class="team-title">
          {{ teamSection.title }}
        </BaseHeading>
        
        <div class="team-intro">
  <BaseText 
    v-for="(text, index) in teamSection.introParagraphs" 
    :key="index"
    class="team-p"
    v-html="text"
  />
</div>
      </div>

      <div class="team-grid">
        <TeamMemberCard 
          v-for="member in teamSection.members" 
          :key="member.id" 
          :member="member"
        />
      </div>

    </div>
  </section>
</template>

<style scoped>
.team-section {
  width: 100%;
  background-color: #ffffff;
  padding: 64px 0;
}

@media (min-width: 768px) {
  .team-section {
    padding: 100px 0;
  }
}

.team-container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;
}

@media (min-width: 1024px) {
  .team-container {
    padding-left: 48px;
    padding-right: 48px;
  }
}

.team-header {
  max-width: 900px;         /* Limite la largeur pour avoir la même découpe de texte */
  margin-bottom: 56px;
  margin-left: auto;        /* Centre le bloc horizontalement */
  margin-right: auto;       /* Centre le bloc horizontalement */
  display: flex;
  flex-direction: column;
  gap: 32px;                /* Espace généreux entre le titre et les blocs de texte */
  text-align: left;       /* Centre le titre et chaque ligne de paragraphe */
}

.team-title {
  font-size: 32px;
  font-weight: 800;
  line-height: 1.15;
  color: #1d1d4d;
  letter-spacing: -0.02em;
  text-align: center;
}

@media (min-width: 768px) {
  .team-title {
    font-size: 42px;
  }
}

.team-intro {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.team-p {
  font-size: 16px;
  line-height: 1.65;
  color: #52627a;
}

@media (min-width: 768px) {
  .team-p {
    font-size: 18px;
  }
}

/* Grille CSS optimisée */
.team-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr)); /* 2 colonnes sur mobile */
  column-gap: 20px;
  row-gap: 48px;
}

@media (min-width: 640px) {
  .team-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr)); /* 3 colonnes sur tablette */
  }
}

@media (min-width: 1024px) {
  .team-grid {
    grid-template-columns: repeat(5, minmax(0, 1fr)); /* 5 colonnes sur PC */
    column-gap: 5px;
  }
}
</style>