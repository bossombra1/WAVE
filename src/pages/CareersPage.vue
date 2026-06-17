<script setup>
// On importe le layout spécifique
import CareersLayout from '../components/templates/CareersLayout.vue'
import CareersHero from '@/components/organisms/CareersHero.vue'
import WorkAtWaveSection from '@/components/organisms/WorkAtWaveSection.vue'
import ValuesGrid from '@/components/organisms/ValuesGrid.vue'
import JobFeedSection from '@/components/organisms/JobFeedSection.vue'

import {
  heroData,
  careerValues,
  careerCulture,
  jobListings,
  departments,
  offices
} from '@/data/careers.js'

defineEmits(['navigate'])
</script>

<template>
  <CareersLayout @navigate="$emit('navigate', $event)">
    
    <CareersHero
      :title="heroData.title"
      :description="heroData.description"
      :image="heroData.image"
    />
    
    <WorkAtWaveSection
      :title="careerCulture.title"
      :description="careerCulture.description"
      :images="careerCulture.images"
    />
    
    <ValuesGrid :values="careerValues" />
    
    <JobFeedSection
      :jobs="jobListings"
      :departments="departments"
      :offices="offices"
    />
    
  </CareersLayout>
</template>