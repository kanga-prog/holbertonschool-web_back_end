#!/usr/bin/env python3

import asyncio
import random

async def async_generator():
    for _ in range(10):
        await asyncio.sleep(1)  # Attente asynchrone de 1 seconde
        yield random.uniform(0, 10)  # Génération d'un nombre aléatoire entre 0 et 10
