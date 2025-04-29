#!/usr/bin/env python3
"""
This module defines async_comprehension to collect values
from the async_generator using async comprehension.
"""

from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    Collects 10 random float numbers from async_generator
    using an asynchronous comprehension.

    Returns:
        List[float]: A list of 10 random float numbers.
    """
    return [num async for num in async_generator()]
