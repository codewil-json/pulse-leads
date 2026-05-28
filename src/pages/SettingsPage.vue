<template>
  <section class="space-y-6">
    <div class="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
      <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{{ t('settings.title') }}</p>
          <h2 class="mt-2 text-3xl font-semibold text-slate-900">{{ t('settings.title') }}</h2>
        </div>
        <p class="text-sm text-slate-500">{{ t('settings.subtitle') }}</p>
      </div>
    </div>

    <div class="grid gap-4 lg:grid-cols-2">
      <div class="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
        <h3 class="text-lg font-semibold text-slate-900">{{ t('settings.profile') }}</h3>
        <p class="mt-3 text-sm text-slate-500">{{ t('settings.subtitle') }}</p>
        <div class="mt-6 space-y-4">
          <div class="rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <p class="text-sm font-semibold text-slate-900">{{ t('user.name') }}</p>
            <p class="mt-1 text-sm text-slate-500">{{ t('user.role') }}</p>
          </div>
          <div class="rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <p class="text-sm font-semibold text-slate-900">{{ t('settings.notifications') }}</p>
            <p class="mt-1 text-sm text-slate-500">{{ t('settings.connectedDevice') }}</p>
          </div>
        </div>
      </div>
      <div class="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
        <h3 class="text-lg font-semibold text-slate-900">{{ t('settings.security') }}</h3>
        <p class="mt-3 text-sm text-slate-500">{{ t('settings.subtitle') }}</p>
        <div class="mt-6 space-y-4">
          <div class="rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <p class="text-sm font-semibold text-slate-900">{{ t('settings.password') }}</p>
          </div>
          <div class="rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <p class="text-sm font-semibold text-slate-900">{{ t('settings.sessions') }}</p>
            <p class="mt-1 text-sm text-slate-500">{{ t('settings.connectedDevice') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../i18n'

const { t } = useI18n()
</script>
