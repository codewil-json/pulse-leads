<template>
  <section class="space-y-6">
    <div class="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
      <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{{ t('reports.title') }}</p>
          <h2 class="mt-2 text-3xl font-semibold text-slate-900">{{ t('reports.title') }}</h2>
        </div>
        <p class="text-sm text-slate-500">{{ t('reports.subtitle') }}</p>
      </div>
    </div>

    <div class="grid gap-4 xl:grid-cols-2">
      <div class="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
        <h3 class="text-lg font-semibold text-slate-900">{{ t('reports.revenueTitle') }}</h3>
        <p class="mt-3 text-sm text-slate-500">{{ t('reports.subtitle') }}</p>
        <div class="mt-6 space-y-3">
          <div class="rounded-3xl bg-slate-50 p-4">
            <p class="text-sm text-slate-500">Abril</p>
            <p class="mt-2 text-2xl font-semibold text-slate-900">$10.1k</p>
          </div>
          <div class="rounded-3xl bg-slate-50 p-4">
            <p class="text-sm text-slate-500">Maio</p>
            <p class="mt-2 text-2xl font-semibold text-slate-900">$12.4k</p>
          </div>
        </div>
      </div>
      <div class="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
        <h3 class="text-lg font-semibold text-slate-900">{{ t('reports.activityTitle') }}</h3>
        <p class="mt-3 text-sm text-slate-500">{{ t('reports.subtitle') }}</p>
        <div class="mt-6 grid gap-3">
          <div class="rounded-3xl bg-slate-50 p-4">
            <p class="text-sm font-semibold text-slate-900">{{ t('reports.contacted') }}</p>
            <p class="mt-1 text-sm text-slate-500">36</p>
          </div>
          <div class="rounded-3xl bg-slate-50 p-4">
            <p class="text-sm font-semibold text-slate-900">{{ t('reports.proposals') }}</p>
            <p class="mt-1 text-sm text-slate-500">22</p>
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
