#!/usr/bin/env python3
import random
import asyncio


async def wait_random(max_delay: int = 10) -> float:
    """
    Asynchronous coroutine that waits for a random delay \
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
