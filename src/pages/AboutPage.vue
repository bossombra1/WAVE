<script setup>
import AboutLayout from '@/components/templates/AboutLayout.vue'
import AboutHeroSection from '@/components/organisms/AboutHeroSection.vue'
import AboutInfraSection from '@/components/organisms/AboutInfraSection.vue'
import TeamSection from '@/components/organisms/TeamSection.vue'
import InvestorsSection from '@/components/organisms/InvestorsSection.vue' // 
import AboutCtaSection from '@/components/organisms/AboutCtaSection.vue'
</script>

<template>
  <AboutLayout>
    
    <AboutHeroSection />

    <AboutInfraSection />

    <TeamSection />

    <InvestorsSection />

    <AboutCtaSection />

  </AboutLayout>
</template>