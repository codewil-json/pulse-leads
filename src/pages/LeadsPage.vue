<template>
  <section class="space-y-6">
    <div class="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
      <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{{ t('leads.title') }}</p>
          <h2 class="mt-2 text-3xl font-semibold text-slate-900">{{ t('leads.title') }}</h2>
        </div>
        <button
          class="inline-flex items-center rounded-full bg-violet-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
          @click="openModal"
        >
          {{ t('button.newLead') }}
        </button>
      </div>
    </div>

    <div class="grid gap-4">
      <div class="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <p class="font-semibold text-slate-900">{{ t('leads.active') }}</p>
          <span class="rounded-full bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700">{{ leads.length }} {{ t('leads.newToday') }}</span>
        </div>
        <div class="mt-6 space-y-4">
          <div
            v-for="lead in leads"
            :key="lead.id"
            class="rounded-3xl border border-slate-200 bg-slate-50 p-4"
          >
            <div class="flex items-center justify-between gap-4">
              <div>
                <p class="font-semibold text-slate-900">{{ lead.name }}</p>
                <p class="mt-1 text-sm text-slate-500">{{ t(`sources.${lead.source}`) }} · {{ t(`leadStatus.${lead.status}`) }}</p>
              </div>
              <span class="rounded-full px-3 py-1 text-xs font-semibold" :class="lead.badgeClass">{{ t(`sources.${lead.source}`) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <transition name="modal-fade">
      <div
        v-if="isModalOpen"
        class="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/50 px-4 py-6"
      >
        <div class="w-full max-w-xl rounded-[32px] bg-white p-6 shadow-2xl">
          <div class="flex items-center justify-between gap-4">
            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{{ t('leads.addLeadTitle') }}</p>
              <h3 class="mt-2 text-2xl font-semibold text-slate-900">{{ t('leads.addLeadSubtitle') }}</h3>
            </div>
            <button
              class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:bg-slate-100"
              @click="closeModal"
            >
              ✕
            </button>
          </div>

          <form @submit.prevent="submitLead" class="mt-6 space-y-5">
            <div class="grid gap-4 sm:grid-cols-2">
              <label class="space-y-2 text-sm font-medium text-slate-700">
                {{ t('leads.name') }}
                <input
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="Ex: Juliana Pereira"
                  class="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                />
              </label>
              <label class="space-y-2 text-sm font-medium text-slate-700">
                {{ t('leads.channel') }}
                <select
                  v-model="form.channel"
                  class="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                >
                  <option value="whatsapp">{{ t('sources.whatsapp') }}</option>
                  <option value="instagram">{{ t('sources.instagram') }}</option>
                  <option value="indication">{{ t('sources.indication') }}</option>
                  <option value="email">{{ t('sources.email') }}</option>
                </select>
              </label>
            </div>

            <div class="grid gap-4 sm:grid-cols-2">
              <label class="space-y-2 text-sm font-medium text-slate-700">
                {{ t('leads.status') }}
                <select
                  v-model="form.status"
                  class="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                >
                  <option value="new">{{ t('leadStatus.new') }}</option>
                  <option value="contact">{{ t('leadStatus.contact') }}</option>
                  <option value="proposal">{{ t('leadStatus.proposal') }}</option>
                  <option value="closed">{{ t('leadStatus.closed') }}</option>
                  <option value="lost">{{ t('leadStatus.lost') }}</option>
                </select>
              </label>
              <label class="space-y-2 text-sm font-medium text-slate-700">
                {{ t('leads.source') }}
                <input
                  v-model="form.source"
                  type="text"
                  placeholder="Ex: Instagram"
                  class="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                />
              </label>
            </div>

            <div class="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                @click="closeModal"
              >
                {{ t('button.cancel') }}
              </button>
              <button
                type="submit"
                class="inline-flex items-center justify-center rounded-full bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
              >
                {{ t('button.saveLead') }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useI18n } from '../i18n'

const { t } = useI18n()
const isModalOpen = ref(false)
const leads = ref([
  {
    id: 1,
    name: 'Lucas Souza',
    channel: 'whatsapp',
    status: 'proposal',
    source: 'telephone',
    badgeClass: 'bg-violet-100 text-violet-700',
  },
  {
    id: 2,
    name: 'Ana Flávia',
    channel: 'indication',
    status: 'closed',
    source: 'indication',
    badgeClass: 'bg-emerald-100 text-emerald-700',
  },
  {
    id: 3,
    name: 'Bruno Rodrigues',
    channel: 'instagram',
    status: 'contact',
    source: 'instagram',
    badgeClass: 'bg-amber-100 text-amber-700',
  },
])

const form = reactive({
  name: '',
  channel: 'whatsapp',
  status: 'new',
  source: 'whatsapp',
})

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  form.name = ''
  form.channel = 'whatsapp'
  form.status = 'new'
  form.source = 'whatsapp'
}

const submitLead = () => {
  leads.value.unshift({
    id: Date.now(),
    name: form.name || 'Novo Lead',
    channel: form.channel,
    status: form.status,
    source: form.source || form.channel,
    badgeClass: getBadgeClass(form.source || form.channel),
  })
  closeModal()
}

const getBadgeClass = (source) => {
  if (source === 'instagram') return 'bg-amber-100 text-amber-700'
  if (source === 'indication') return 'bg-emerald-100 text-emerald-700'
  if (source === 'whatsapp') return 'bg-sky-100 text-sky-700'
  return 'bg-slate-100 text-slate-700'
}
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
