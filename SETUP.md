# AlphaCouncil — Подключение LLM и Блокчейна

## Содержание

1. [Бесплатные LLM — сравнение и подключение](#1-бесплатные-llm)
2. [Подключение к Mantle Sepolia (блокчейн)](#2-подключение-к-mantle-sepolia)
3. [Полный quick start с живыми данными](#3-полный-quick-start)
4. [Типичные проблемы](#4-типичные-проблемы)

---

## 1. Бесплатные LLM

### Сравнение бесплатных вариантов

| Провайдер | Цена | Лимиты | Рекомендуемая модель | Сложность |
|-----------|------|--------|---------------------|-----------|
| **Groq** | **Бесплатно** | 30 RPM, 14.4K запросов/день (8b модель) | `llama-3.1-8b-instant` | ⭐ Просто |
| **Gemini** | **Бесплатно** | 1,500 запросов/день | `gemini-2.0-flash-lite` | ⭐ Просто |
| **Ollama** | **Полностью бесплатно** | Лимит только ваш GPU | `llama3.1` (7B) | ⭐⭐ Нужен GPU |
| OpenRouter | Бесплатные модели есть | Ограниченно | `llama-3.1-8b-instruct:free` | ⭐ Просто |
| OpenAI | Платно ($0.15-0.60 / 1M токенов) | По кошельку | `gpt-4o-mini` | ⭐ Просто |

**Рекомендация:** Начни с **Groq** — самый щедрый бесплатный тир, не требует кредитной карты, регистрация за 30 секунд.

---

### 1A. Groq (рекомендуемый)

**Почему Groq:**
- ✅ Бесплатно, без кредитной карты
- ✅ 30 RPM (запросов в минуту) — достаточно для нашего пайплайна
- ✅ 14,400 запросов в день на `llama-3.1-8b`
- ✅ 500,000 токенов в день
- ✅ Наш пайплайн делает ~6 LLM-вызовов на событие → ~5 событий/мин максимум
- ✅ Регистрация через email или GitHub

**Регистрация:**

1. Открой https://console.groq.com/keys
2. Нажми "Create API Key"
3. Скопируй ключ (начинается с `gsk_`)

**Настройка .env:**

```bash
# В файле .env в корне проекта:
LLM_PROVIDER=groq
LLM_API_KEY=gsk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
# LLM_MODEL=llama-3.1-8b-instant   # (опционально, это дефолт)
```

**Доступные модели (Groq free tier):**

| Модель | RPM | RPD | TPM | TPD | Параметров |
|--------|-----|-----|-----|-----|-----------|
| `llama-3.1-8b-instant` | 30 | 14,400 | 6K | 500K | 8B |
| `llama-3.3-70b-versatile` | 30 | 1,000 | 12K | 100K | 70B |
| `llama-4-scout-17b-16e-instruct` | 30 | 1,000 | 30K | 500K | 17B×16E |
| `qwen-qwq-32b` | 30 | 1,000 | 6K | 100K | 32B |

**Для более умных ответов** используй 70B модель (меньше лимитов, но мощнее):
```bash
LLM_MODEL=llama-3.3-70b-versatile
```

---

### 1B. Google Gemini (тоже бесплатно)

**Почему Gemini:**
- ✅ Бесплатно, без кредитной карты
- ✅ 1,500 запросов в день
- ✅ gemini-2.0-flash-lite — очень быстрая модель
- ✅ Google аккаунт

**Регистрация:**

1. Открой https://aistudio.google.com/app/apikey
2. Войди через Google аккаунт
3. Нажми "Create API Key"
4. Скопируй ключ

**Настройка .env:**

```bash
LLM_PROVIDER=gemini
LLM_API_KEY=AIzaSyxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
# LLM_MODEL=gemini-2.0-flash-lite  # (опционально, дефолт)
```

---

### 1C. Ollama (локально, полностью бесплатно)

**Почему Ollama:**
- ✅ Полностью бесплатно — никаких API ключей
- ✅ Нет лимитов — работает на твоём железе
- ✅ Приватно — данные не покидают компьютер
- ⚠️ Нужен GPU для приемлемой скорости (6-10 сек/запрос на CPU)

**Установка:**

```bash
# macOS / Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows — скачай с https://ollama.com/download

# Запусти модель (первый раз скачает ~4.7 GB)
ollama run llama3.1
```

**Проверь что работает:**
```bash
ollama list          # должна показаться llama3.1
ollama run llama3.1  # напиши "hi" в интерактивном режиме
```

**Настройка .env:**

```bash
LLM_PROVIDER=ollama
# LLM_API_KEY не нужен
# LLM_MODEL=llama3.1   # (опционально, дефолт)
# OLLAMA_HOST=http://localhost:11434  # (опционально, дефолт)
```

**Другие модели для Ollama:**
```bash
ollama pull mistral       # 7B, хорошо для анализа
ollama pull qwen2.5:14b   # 14B, китайская компания, сильная модель
ollama pull phi3:medium   # Microsoft, компактная
```

---

### 1D. OpenRouter (есть free tier)

**Регистрация:** https://openrouter.ai/

```bash
LLM_PROVIDER=openrouter
LLM_API_KEY=sk-or-v1-xxxxxxxxxxxxxxxx
LLM_MODEL=meta-llama/llama-3.1-8b-instruct:free
```

---

### 1E. Сколько токенов тратит AlphaCouncil?

На **одно on-chain событие** (1 ERC-20 Transfer) пайплайн делает 6 LLM-вызова:

| Агент | System prompt | User message | Примерный размер |
|-------|-------------|-------------|-----------------|
| Collector | ~200 tokens | ~500 tokens | ~700 total |
| Normalizer | ~300 tokens | ~500 tokens | ~800 total |
| ContextBuilder | ~400 tokens | ~1000 tokens | ~1400 total |
| PatternMatcher | ~400 tokens | ~1500 tokens | ~1900 total |
| DigestWriter | ~500 tokens | ~2000 tokens | ~2500 total |
| BiasGuard | ~300 tokens | ~1000 tokens | ~1300 total |
| **Итого** | | | **~8,600 токенов** |

**Groq free tier хватит на:**
- `llama-3.1-8b`: 500,000 TPD / 8,600 ≈ **~58 событий/день**
- Это более чем достаточно для MVP и тестирования

---

## 2. Подключение к Mantle Sepolia (Блокчейн)

### Что тебе нужно

1. **Кошелёк** (MetaMask или аналог)
2. **Test MNT токены** (бесплатно из faucet)
3. **Приватный ключ** кошелька (для деплоя и записи)

### 2A. Настройка кошелька

1. Установи MetaMask: https://metamask.io/download/
2. Создай новый кошелёк (или используй существующий)
3. Добавь сеть Mantle Sepolia вручную:

```
Network Name: Mantle Sepolia
RPC URL: https://rpc.sepolia.mantle.xyz
Chain ID: 5003
Currency Symbol: MNT
Block Explorer: https://explorer.sepolia.mantle.xyz
```

Или зайди на https://chainlist.org/?search=mantle+sepolia и нажми "Add to MetaMask".

### 2B. Получение тестовых MNT токенов (бесплатно)

Есть несколько faucet'ов. Попробуй по порядку:

| Faucet | Количество | Частота | Ссылка |
|--------|-----------|---------|--------|
| **HackQuest** | **4 MNT** | Каждый день | https://hackquest.io/en/faucets/5003 |
| **QuickNode** | ~0.5 MNT | Каждые 12 часов | https://faucet.quicknode.com/mantle/sepolia |
| **Chainlink** | ~0.1 MNT | Ежедневно | https://faucets.chain.link/mantle-sepolia |
| **Thirdweb** | 0.01 MNT | Ежедневно | https://thirdweb.com/mantle-sepolia-testnet |
| **Mantle Official** | Варируется | Ежедневно | https://faucet.mantle.xyz/ |

**Для деплоя 3 контрактов хватит 0.01-0.05 MNT.**

**Пошагово через HackQuest (самый щедрый):**

1. Открой https://hackquest.io/en/faucets/5003
2. Подключи кошелёк (кнопка "Connect Wallet")
3. Нажми "Claim"
4. Подтверди транзакцию в MetaMask
5. Через 10-30 секунд токены придут на кошелёк

### 2C. Получение приватного ключа

**⚠️ Важно:** Никогда не публикуй приватный ключ. Используй только testnet-кошелёк.

1. В MetaMask нажми на три точки (...) рядом с аккаунтом
2. "Account Details"
3. "Show Private Key"
4. Введи пароль
5. Скопируй ключ (64 символа, без `0x`)

### 2D. Деплой контрактов

Запиши приватный ключ в `.env`:

```bash
PRIVATE_KEY=abcdef1234567890abcdef1234567890abcdef1234567890abcdef12345678
```

Затем деплой:

```bash
cd packages/contracts
pnpm install   # установка зависимостей hardhat
pnpm build     # компиляция Solidity
pnpm deploy    # деплой на Mantle Sepolia
```

После деплоя скопируй адреса контрактов в `.env`:

```bash
OBSERVATION_REGISTRY_ADDRESS=0x1234567890abcdef...
MEMORY_ANCHOR_ADDRESS=0xabcdef1234567890...
AGENT_REGISTRY_ADDRESS=0xfedcba0987654321...
```

Проверь на explorer: https://explorer.sepolia.mantle.xyz/address/0xТВОЙ_АДРЕС

---

## 3. Полный Quick Start (с живыми данными)

### Вариант A: Минимальный (без блокчейна, с бесплатным LLM)

```bash
# 1. Клонирование
git clone <repo-url>
cd alphacouncil

# 2. Настройка окружения
cp .env.example .env
# Отредактируй .env:
#   LLM_PROVIDER=groq
#   LLM_API_KEY=gsk_your_key_here

# 3. База данных
docker-compose up -d

# 4. Установка зависимостей
pnpm install

# 5. Создание таблиц
cd packages/database
pnpm push
pnpm generate
cd ../..

# 6. Запуск worker (живые данные с Mantle)
cd apps/worker
pnpm dev

# 7. В другом терминале — dashboard
cd apps/dashboard
pnpm dev
# → http://localhost:3000
```

Worker начнёт читать **реальные ERC-20 Transfer события** с Mantle Sepolia и обрабатывать их через AI pipeline с настоящей LLM моделью.

### Вариант B: Полный (с анкорингом на блокчейн)

Выполни все шаги из Варианта A, плюс:

```bash
# До запуска worker:

# 1. Получи MNT из faucet (см. раздел 2B)

# 2. Добавь в .env:
#    PRIVATE_KEY=your_key_without_0x

# 3. Деплой контрактов
cd packages/contracts
pnpm build
pnpm deploy
# Скопируй адреса в .env

# 4. Запуск worker — теперь с анкорингом
cd apps/worker && pnpm dev
```

---

## 4. Типичные проблемы

### "LLM_API_KEY is required"

**Причина:** В `.env` указан `LLM_PROVIDER=groq` (или другой), но ключ пустой.

**Решение:** Либо получи ключ (см. раздел 1), либо верни `LLM_PROVIDER=mock`.

### "PRIVATE_KEY environment variable is required"

**Причина:** Worker пытается анкорить, но ключ не задан.

**Решение:** Не ошибка — worker продолжит работу, просто не будет анкорить. Чтобы заработал анкоринг, добавь `PRIVATE_KEY` в `.env`.

### "Is Ollama running?"

**Причина:** `LLM_PROVIDER=ollama`, но Ollama не запущена.

**Решение:**
```bash
ollama run llama3.1   # запустит и подождёт загрузки модели
```

### "Fetch failed" при вызове LLM

**Причина:** Проблемы с сетью или неправильный API ключ.

**Решение:**
```bash
# Проверь что ключ работает:
curl https://api.groq.com/openai/v1/models \
  -H "Authorization: Bearer $LLM_API_KEY"
```

### Не вижу данных в dashboard

**Причина:** Worker ещё не обработал события, или событий пока нет.

**Решение:**
```bash
# Проверь что worker запущен и читает блоки
cd apps/worker && pnpm dev

# В другом терминале проверь базу:
cd packages/database && pnpm studio
# → откроет Prisma Studio в браузере
```

### У меня нет GPU для Ollama

**Решение:** Используй **Groq** или **Gemini** — оба бесплатны и не требуют GPU. Ollama на CPU тоже работает, но медленно (10-30 сек на запрос).

---

## Сводка

| Что хочешь | Нужно сделать | Стоимость |
|-----------|--------------|-----------|
| **Живые данные + AI дайджесты** | Groq API key + запустить worker | **Бесплатно** |
| **Telegram бот** | TELEGRAM_BOT_TOKEN от @BotFather | **Бесплатно** |
| **Анкоринг на блокчейн** | MetaMask + MNT из faucet + деплой | **Бесплатно** (тестовые токены) |
| **Полностью локальный AI** | Ollama + GPU | **Бесплатно** (своё железо) |

**Всё можно сделать бесплатно.** Ни одна из функций не требует реальных денег для тестнета.
