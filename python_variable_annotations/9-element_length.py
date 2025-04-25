#!/usr/bin/env python3
import typing
"""
Module for calculating the length of each element in a list of iterables.
"""


def element_length(lst: typing.Iterable[typing.Sequence]) ->\
      typing.List[typing.Tuple[typing.Sequence, int]]:
    """
      Returns a list of tuples where each tuple contains\
          an element from the input list
    and its length.

    Args:
        lst (Iterable[Sequence]): A list of iterable \
            objects (such as strings, lists, etc.)

    Returns:
        List[Tuple[Sequence, int]]: A list of tuples, each containing\
              an element and its length.
    """
    return [(i, len(i)) for i in lst]
