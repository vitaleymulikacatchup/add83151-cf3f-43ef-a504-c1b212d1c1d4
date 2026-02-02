# LLM-Friendly Registry Structure

Эта структура реорганизует `registry.json` для более эффективной работы с LLM, уменьшая галлюцинации и улучшая выбор компонентов.

## Структура

```
registry/
├── index.json             ← КАТАЛОГ (LLM всегда видит)
├── intents.json           ← ПОЧЕМУ / КОГДА (WHY / WHEN)
├── components/
│   ├── FeatureCardSeven.json
│   ├── FeatureCardEight.json
│   └── ...
└── schemas/
    ├── FeatureCardSeven.schema.json
    └── ...
```

## Файлы

### `index.json` - Легковесный каталог

Содержит минимальную информацию для выбора компонента:
- `category` - категория компонента
- `intent` - назначение компонента (почему/когда использовать)
- `bestFor` - лучшие случаи использования
- `avoidWhen` - когда НЕ использовать
- `requires` - обязательные требования (например, `features[]`)
- `import` - путь импорта

**LLM всегда видит этот файл** для выбора компонента.

### `intents.json` - Маппинг интентов

Связывает интенты с компонентами:
```json
{
  "sequential process": ["FeatureCardSeven", "FeatureProcessSteps"],
  "horizontal timeline": ["FeatureCardEight", "TimelineHorizontalCardStack"],
  "hero with media": ["HeroBillboard"]
}
```

Помогает LLM выбирать компоненты по смыслу, а не угадывать.

### `components/*.json` - Детальная информация

Загружается **ТОЛЬКО после выбора компонента**:
- `name` - имя компонента
- `description` - описание
- `constraints` - ограничения и правила
- `propsSchema` - упрощённая схема пропсов (без className)
- `usageExample` - пример использования
- `do` - что делать
- `dont` - чего не делать
- `editRules` - правила редактирования

### `schemas/*.schema.json` - Полные схемы

Полные схемы пропсов (включая все className) для генерации кода.

## Использование

### Для LLM

1. **Выбор компонента**: Используй `index.json` + `intents.json`
2. **Детали компонента**: Загрузи `components/{ComponentName}.json` после выбора
3. **Генерация кода**: Используй `schemas/{ComponentName}.schema.json` для полной схемы пропсов

### Преимущества

- ✅ Уменьшение токенов в 3-5 раз
- ✅ Снижение галлюцинаций
- ✅ Предсказуемые правки
- ✅ Масштабируемость для разных моделей

## Обновление

Для обновления структуры после изменений в `registry.json`:

```bash
node transform-registry.js
```
