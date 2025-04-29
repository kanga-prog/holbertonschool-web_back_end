#!/usr/bin/env python3
"""
This module contains the coroutine measure_runtime that\
      runs async_comprehension
four times in parallel and measures the total runtime.
"""


import asyncio
import time
from typing import List

# Importing async_comprehension from the previous task
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Runs async_comprehension four times in parallel using asyncio.gather,
    and measures the total runtime.
    Returns:
        float: The total runtime of the four parallel\
              executions of async_comprehension.
    """
    start_time = time.time()  # Start measuring time

    # Run the async_comprehension function four times in parallel
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )

    end_time = time.time()  # End measuring time

    # Return the total runtime
    return end_time - start_time
