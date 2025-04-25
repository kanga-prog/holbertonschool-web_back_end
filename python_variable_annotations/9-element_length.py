#!/usr/bin/env python3
import typing


def element_length(lst: typing.Iterable[typing.Sequence]) ->\
      typing.List[typing.Tuple[typing.Sequence, int]]:
    """
    Given an iterable of sequences, return a list of tuples, where each tuple
    contains a sequence from the input iterable and its length.
    Example:
    >>> element_length([['a', 'b', 'c'], ('d', 'e')])
    [(['a', 'b', 'c'], 3), [('d', 'e'), 2]]
    >>> element_length([('one',), ('two',), ('three',)])
    [(('one',), 1), (('two',), 1), (('three',), 1)]
    >>> element_length([])
    []
    """
    return [(i, len(i)) for i in lst]
