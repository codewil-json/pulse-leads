<template>
  <section class="space-y-6">
    <div class="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
      <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{{ t('dashboard.overview') }}</p>
          <h2 class="mt-2 text-3xl font-semibold text-slate-900">{{ t('dashboard.title') }}</h2>
        </div>
        <p class="text-sm text-slate-500">{{ t('dashboard.subtitle') }}</p>
      </div>
    </div>

    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <div class="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{{ t('dashboard.totalLeads') }}</p>
        <p class="mt-4 text-4xl font-semibold text-slate-900">128</p>
        <p class="mt-3 text-sm text-emerald-600">+14% {{ t('dashboard.vsLastMonth') }}</p>
      </div>
      <div class="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{{ t('dashboard.conversionRate') }}</p>
        <p class="mt-4 text-4xl font-semibold text-slate-900">24%</p>
        <p class="mt-3 text-sm text-emerald-600">+6% {{ t('dashboard.vsLastMonth') }}</p>
      </div>
      <div class="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{{ t('dashboard.openDeals') }}</p>
        <p class="mt-4 text-4xl font-semibold text-slate-900">32</p>
        <p class="mt-3 text-sm text-emerald-600">{{ t('dashboard.closingToday') }}</p>
      </div>
      <div class="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{{ t('dashboard.revenue') }}</p>
        <p class="mt-4 text-4xl font-semibold text-slate-900">$12.4k</p>
        <p class="mt-3 text-sm text-emerald-600">+18% {{ t('dashboard.vsLastMonth') }}</p>
      </div>
    </div>

    <div class="grid gap-6 xl:grid-cols-[1.7fr_1fr]">
      <div class="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold text-slate-900">{{ t('dashboard.leadsOverview') }}</h3>
          <span class="rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-600">{{ t('dashboard.thisMonth') }}</span>
        </div>
        <div class="mt-6 h-[260px] overflow-hidden rounded-3xl bg-slate-50 p-6">
          <div class="relative h-full w-full">
            <svg viewBox="0 0 720 260" class="h-full w-full">
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="rgba(99,102,241,0.28)" />
                  <stop offset="100%" stop-color="rgba(99,102,241,0)" />
                </linearGradient>
              </defs>
              <path d="M40 210 C110 170 190 120 260 140 C330 160 410 140 480 150 C550 160 620 140 680 120"
                fill="none"
                stroke="#6366f1"
                stroke-width="5"
                stroke-linecap="round"
              />
              <path d="M40 210 C110 170 190 120 260 140 C330 160 410 140 480 150 C550 160 620 140 680 120 L680 260 L40 260 Z"
                fill="url(#chartGradient)"
                opacity="0.85"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold text-slate-900">{{ t('dashboard.recentLeads') }}</h3>
          <button class="text-sm font-semibold text-violet-600 hover:text-violet-700">{{ t('button.viewAll') }}</button>
        </div>
        <div class="mt-6 space-y-4">
          <div class="flex items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <div class="flex items-center gap-4">
              <span class="flex h-12 w-12 items-center justify-center rounded-3xl bg-pink-100 text-sm font-semibold text-pink-700">MC</span>
              <div>
                <p class="font-semibold text-slate-900">Maria Clara</p>
                <p class="mt-1 text-sm text-slate-500">{{ t('sources.instagram') }}</p>
              </div>
            </div>
            <span class="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">{{ t('leadStatus.new') }}</span>
          </div>
          <div class="flex items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <div class="flex items-center gap-4">
              <span class="flex h-12 w-12 items-center justify-center rounded-3xl bg-emerald-100 text-sm font-semibold text-emerald-700">JS</span>
              <div>
                <p class="font-semibold text-slate-900">João Silva</p>
                <p class="mt-1 text-sm text-slate-500">{{ t('sources.whatsapp') }}</p>
              </div>
            </div>
            <span class="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">{{ t('leadStatus.contact') }}</span>
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
