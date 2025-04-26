#!/usr/bin/env python3
"""
Create a measure_time function with integers n and max_delay
as arguments that measures the total execution time
for wait_n(n, max_delay), and returns total_time / n.
Your function should return a float.
Use the time module to measure an approximate elapsed time.
"""
import random
import asyncio


async def wait_random(max_delay: int = 10) -> float:
    """
    Asynchronous coroutine that waits for a random delay\
          between 0 and max_delay (inclusive),
    and then returns the delay.

    Args:
        max_delay (int): The maximum delay in seconds (default is 10).

    Returns:
        float: A random delay between 0 and max_delay seconds.
    """
    # Generate a random delay between 0 and max_delay
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
