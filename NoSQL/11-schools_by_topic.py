#!/usr/bin/env python3
"""Module to find schools by a specific topic."""


def schools_by_topic(mongo_collection, topic):
    """Finds all schools with a specific topic.

    Args:
        mongo_collection: pymongo collection object.
        topic (str): the topic to search for.

    Returns:
        list: list of schools that have the specified topic.
    """
    return list(mongo_collection.find({"topics": topic}))
