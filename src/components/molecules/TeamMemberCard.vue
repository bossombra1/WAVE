<script setup>
import TeamAvatar from '@/components/atoms/TeamAvatar.vue'

defineProps({
  member: {
    type: Object,
    required: true,
    validator: (m) => 'name' in m && 'role' in m && 'avatar' in m
  }
})
</script>
 
<template>
  <div class="member-card group">
    <TeamAvatar :src="member.avatar" :alt="member.name" />
    
    <div class="member-info">
      <h4 class="member-name">
        {{ member.name }}
      </h4>
      <p class="member-role">
        {{ member.role }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.member-card {
  display: flex;
  flex-direction: column;
  width: 70%;
  cursor: pointer;
}

.member-info {
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: center; /* Aligné proprement sous l'image gauche */
}

/* Typographie du Nom : Bleu Nuit, Épaisse et compacte */
.member-name {
  font-size: 15px;
  font-weight: 800;
  line-height: 1.3;
  color: #1d1d4d;
  margin: 0;
  letter-spacing: -0.01em;
}

/* Typographie du Rôle : Bleu-gris discret */
.member-role {
  font-size: 13.5px;
  font-weight: 500;
  line-height: 1.4;
  color: #6b7a95;
  margin: 0;
}
</style>