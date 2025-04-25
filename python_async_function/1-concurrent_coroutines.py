#!/usr/bin/env python3
"""
Module for executing multiple coroutines concurrently and
    returning their results in ascending order.
"""

import asyncio
from basic_async_syntax import wait_random


async def wait_n(n: int, max_delay: int) -> list:
    """
    Asynchronous coroutine that runs the wait_random 
        coroutine n times with the specified max_delay.
    It returns the list of delays in ascending order.

    Args:
        n (int): The number of times to run the wait_random coroutine.
        max_delay (int): The maximum delay to be used 
            by each wait_random coroutine.

    Returns:
        list: A list of delays, sorted in ascending order without using sort().
    """
    tasks = [wait_random(max_delay) for _ in range(n)]
    delays = await asyncio.gather(*tasks)
    return [delay for delay in sorted(delays)]
