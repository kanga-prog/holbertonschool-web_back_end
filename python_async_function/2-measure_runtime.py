#!/usr/bin/env python3
"""
Module for measuring the execution time of wait_n
"""

import asyncio
import time
from concurrent_coroutines import wait_n

def measure_time(n: int, max_delay: int) -> float:
    """
    Measures the total execution time for the wait_n coroutine,
    and returns the time per execution.

    Args:
        n (int): The number of times to run the wait_n coroutine.
        max_delay (int): The maximum delay to be used by wait_n.

    Returns:
        float: The average time per execution (total_time / n).
    """
    start_time = time.time()  # Capture the start time
    asyncio.run(wait_n(n, max_delay))  # Run the wait_n coroutine
    end_time = time.time()  # Capture the end time

    total_time = end_time - start_time  # Calculate total time
    return total_time / n  # Return the average time per execution
