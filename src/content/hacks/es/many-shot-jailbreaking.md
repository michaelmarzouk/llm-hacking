---
title: "Many-shot jailbreaking: 256 ejemplos para saltar cualquier alineamiento"
excerpt: "Investigadores de Anthropic mostraron que rellenando la ventana de contexto con 256 falsos ejemplos de Q&A se elude el entrenamiento de seguridad. Más contexto = más superficie de ataque."
category: "JAILBREAK"
severity: "crit"
date: "2026-05-15"
readingTime: "6 min"
author: "Equipo alignment Anthropic"
affects: ["claude-3", "gpt-4-turbo", "gemini-1.5"]
sources:
  - "https://www.anthropic.com/research/many-shot-jailbreaking"
---

## El truco

Toma un modelo con ventana de contexto de 200K+ tokens. Rellénala con **256 falsos ejemplos** donde un "asistente" responde alegremente preguntas dañinas. Luego haz tu pregunta dañina real.

El modelo, condicionado por el patrón in-context, cumple.

## Por qué funciona

Los LLM hacen in-context learning. Más ejemplos, patrón más fuerte. El entrenamiento de seguridad se aplica a posteriori a las salidas del modelo — pero cuando 256 ejemplos en el contexto inmediato muestran al modelo "así respondo aquí", el nuevo patrón domina.

## Los datos

El paper de Anthropic documenta una tasa de éxito que sube de <5 % con un ejemplo a **~80 %** con 256 ejemplos, a través de múltiples categorías de daño.

## Defensas

- **Limitar la longitud efectiva del contexto** para aplicaciones críticas de seguridad
- **Re-aplicar la clasificación de seguridad** a las salidas incluso cuando el contexto es largo
- **Entrenar modelos para detectar** la manipulación de patrones in-context

Fundamentalmente es un problema arquitectónico de cómo los transformers manejan contexto largo. Los parches son mitigaciones, no soluciones.
