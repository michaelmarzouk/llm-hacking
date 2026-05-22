---
title: "Many-shot jailbreaking : 256 exemples pour contourner n'importe quel alignement"
excerpt: "Les chercheurs d'Anthropic ont montré qu'en remplissant la fenêtre de contexte avec 256 faux exemples de Q&R, on contourne l'entraînement de sécurité. Plus de contexte = plus de surface d'attaque."
category: "JAILBREAK"
severity: "crit"
date: "2026-05-15"
readingTime: "6 min"
author: "Équipe alignment Anthropic"
affects: ["claude-3", "gpt-4-turbo", "gemini-1.5"]
sources:
  - "https://www.anthropic.com/research/many-shot-jailbreaking"
---

## L'astuce

Prends un modèle avec une fenêtre de contexte de 200K+ tokens. Bourre-la de **256 faux exemples** où un « assistant » répond joyeusement à des questions dangereuses. Puis pose ta vraie question dangereuse.

Le modèle, amorcé par le pattern in-context, obéit.

## Pourquoi ça marche

Les LLM font du in-context learning. Plus il y a d'exemples, plus le pattern est fort. L'entraînement de sécurité s'applique a posteriori aux sorties du modèle — mais quand 256 exemples dans le contexte immédiat montrent au modèle « voilà comment je réponds ici », le nouveau pattern domine.

## Les chiffres

Le papier d'Anthropic documente un taux de succès de l'attaque qui grimpe de <5 % avec un exemple à **~80 %** à 256 exemples, sur plusieurs catégories de dommages.

## Défenses

- **Plafonner la longueur effective du contexte** pour les applications sensibles
- **Re-appliquer la classification de sécurité** sur les sorties même quand le contexte est long
- **Entraîner les modèles à détecter** la manipulation de pattern in-context

C'est fondamentalement un problème architectural de la façon dont les transformers gèrent le contexte long. Les patchs sont des mitigations, pas des solutions.
