#!/usr/bin/env python3
"""
This module contains an asynchronous generator function `async_generator`
that yields random numbers between 0 and 10 after waiting 1 second each time.
"""


import random
import asyncio
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """
    Asynchronous generator that loops 10 times, asynchronously waits 1 second
    each time, and yields a random float number between 0 and 10.

    Yields:
        float: A random float number between 0 and 10.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
