<template>
  <section class="space-y-6">
    <div class="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
      <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{{ t('integrations.title') }}</p>
          <h2 class="mt-2 text-3xl font-semibold text-slate-900">{{ t('integrations.title') }}</h2>
        </div>
        <p class="text-sm text-slate-500">{{ t('integrations.subtitle') }}</p>
      </div>
    </div>

    <div class="grid gap-4 lg:grid-cols-2">
      <div class="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold text-slate-900">{{ t('integrations.whatsapp') }}</h3>
          <span class="rounded-full bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700">{{ t('integrations.connected') }}</span>
        </div>
        <p class="mt-3 text-sm text-slate-500">{{ t('integrations.whatsappDesc') }}</p>
      </div>
      <div class="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold text-slate-900">{{ t('integrations.instagram') }}</h3>
          <span class="rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-600">{{ t('integrations.warning') }}</span>
        </div>
        <p class="mt-3 text-sm text-slate-500">{{ t('integrations.instagramDesc') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../i18n'

const { t } = useI18n()
</script>
