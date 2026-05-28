<template>
  <div class="min-h-screen bg-slate-50 text-slate-900">
    <div class="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 lg:px-8">
      <div class="lg:hidden mb-4 flex items-center justify-between rounded-[32px] bg-white p-4 shadow-sm">
        <div class="flex items-center gap-3">
          <div class="flex h-12 w-12 items-center justify-center rounded-3xl bg-violet-600 text-xl font-semibold text-white shadow-lg shadow-violet-600/10">4</div>
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{{ t('brandTitle') }}</p>
            <p class="text-xs text-slate-400">{{ t('brandSubtitle') }}</p>
          </div>
        </div>
        <button
          class="inline-flex h-11 w-11 items-center justify-center rounded-3xl border border-slate-200 text-slate-500 shadow-sm"
          @click="isMobileOpen = !isMobileOpen"
          :aria-expanded="isMobileOpen"
          :aria-label="t('languageTitle')"
        >
          <span v-if="!isMobileOpen">☰</span>
          <span v-else>✕</span>
        </button>
      </div>

      <div class="relative flex gap-6 lg:grid lg:grid-cols-[280px_1fr]">
        <div v-if="isMobileOpen" class="fixed inset-0 z-20 bg-slate-900/30 lg:hidden" @click="isMobileOpen = false"></div>

        <aside
          class="fixed inset-y-0 left-0 z-30 w-72 space-y-8 overflow-y-auto rounded-r-[32px] border border-slate-200 bg-white p-6 shadow-xl transition-transform duration-300 ease-out lg:static lg:translate-x-0 lg:block"
          :class="isMobileOpen ? 'translate-x-0' : '-translate-x-full'"
        >
          <div class="mb-4 flex items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <div class="flex h-12 w-12 items-center justify-center rounded-3xl bg-violet-600 text-xl font-semibold text-white shadow-lg shadow-violet-600/10">4</div>
              <div>
                <p class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{{ t('brandTitle') }}</p>
                <p class="text-xs text-slate-400">{{ t('brandSubtitle') }}</p>
              </div>
            </div>
            <button
              class="inline-flex h-10 w-10 items-center justify-center rounded-3xl border border-slate-200 text-slate-500 transition hover:bg-slate-100 lg:hidden"
              @click="isMobileOpen = false"
              aria-label="Fechar navegação"
            >
              ✕
            </button>
          </div>

          <div class="mb-6 rounded-[28px] bg-slate-50 p-4">
            <label class="sr-only" for="locale-select">{{ t('languageTitle') }}</label>
            <select
              id="locale-select"
              v-model="selectedLocale"
              @change="setLocale(selectedLocale)"
              class="h-10 w-full rounded-3xl border border-slate-200 bg-white px-3 pr-8 text-sm text-slate-700 shadow-sm outline-none transition focus:border-violet-600 focus:ring-2 focus:ring-violet-100"
            >
              <option
                v-for="option in languageOptions"
                :key="option.code"
                :value="option.code"
              >
                {{ option.flag }} {{ option.label }}
              </option>
            </select>
          </div>

          <nav class="space-y-2">
            <router-link
              v-for="item in navItems"
              :key="item.path"
              :to="item.path"
              class="flex w-full items-center gap-3 rounded-3xl px-4 py-3 text-left text-sm font-semibold transition"
              :class="route.path === item.path ? 'bg-violet-600 text-white shadow-sm shadow-violet-600/20' : 'text-slate-700 hover:bg-slate-100'"
            >
              <span>{{ item.icon }}</span>
              {{ item.label }}
            </router-link>
          </nav>

          <div class="mt-10 rounded-[28px] bg-slate-50 p-5">
            <div class="flex items-center gap-3">
              <div class="flex h-12 w-12 items-center justify-center rounded-3xl bg-violet-600 text-lg font-semibold text-white">WS</div>
              <div>
                <p class="text-sm font-semibold text-slate-900">{{ t('user.name') }}</p>
                <p class="text-xs text-slate-500">{{ t('user.role') }}</p>
              </div>
            </div>
            <p class="mt-4 text-sm text-slate-500">{{ t('user.description') }}</p>
          </div>
        </aside>

        <main class="min-h-screen flex-1">
          <transition name="fade-slide" mode="out-in">
            <router-view v-slot="{ Component }">
              <component :is="Component" class="space-y-6" />
            </router-view>
          </transition>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from './i18n'

const route = useRoute()
const isMobileOpen = ref(false)
const { locale, t, setLocale, languageOptions } = useI18n()
const selectedLocale = ref(locale.locale)

watch(
  () => route.path,
  () => {
    isMobileOpen.value = false
  }
)

watch(
  () => locale.locale,
  (value) => {
    selectedLocale.value = value
  }
)

const navItems = computed(() => [
  { label: t('nav.dashboard'), path: '/', icon: '📊' },
  { label: t('nav.leads'), path: '/leads', icon: '👥' },
  { label: t('nav.settings'), path: '/settings', icon: '⚙️' },
  { label: t('nav.reports'), path: '/reports', icon: '📈' },
  { label: t('nav.integrations'), path: '/integrations', icon: '🔌' },
])
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}

svg {
  display: block;
}
</style>