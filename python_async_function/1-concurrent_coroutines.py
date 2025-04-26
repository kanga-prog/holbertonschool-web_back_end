#!/usr/bin/env python3
"""
Module for executing multiple coroutines concurrently and returning their results in ascending order.
"""

import asyncio
import importlib

# Import wait_random from '0-basic_async_syntax.py' using importlib
wait_random = importlib.import_module('0-basic_async_syntax').wait_random

async def wait_n(n: int, max_delay: int) -> list[float]:
    """
    Asynchronous coroutine that runs the wait_random coroutine n times
    with the specified max_delay.
    It returns the list of delays in ascending order.

    Args:
        n (int): The number of times to run wait_random.
        max_delay (int): The maximum delay value.

    Returns:
        list: List of delay times in ascending order.
    """
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]
    delays = []
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)
    return delays
