#!/usr/bin/env python3
"""Module to update topics of a school document based on the name."""


def update_topics(mongo_collection, name, topics):
    """Changes all topics of a school document based on the name.

    Args:
        mongo_collection: pymongo collection object.
        name (str): the name of the school to update.
        topics (list): list of strings representing the topics.

    Returns:
        None
    """
    mongo_collection.update_one(
        {"name": name},  # Sélectionner le document par son nom
        {"$set": {"topics": topics}}  # Mettre à jour le champ topics
    )
