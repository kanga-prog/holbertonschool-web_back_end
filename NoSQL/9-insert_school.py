#!/usr/bin/env python3
"""Module to insert a document in a MongoDB collection using kwargs."""

def insert_school(mongo_collection, **kwargs):
    """Inserts a new document in a collection based on kwargs.

    Args:
        mongo_collection: pymongo collection object.
        **kwargs: key-value pairs representing the document fields.

    Returns:
        The _id of the newly inserted document.
    """
    return mongo_collection.insert_one(kwargs).inserted_id
