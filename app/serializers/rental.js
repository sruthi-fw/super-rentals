import Serializer from '@ember-data/serializer';

function toAttributes(rental) {
  return {
    title: rental.title,
    owner: rental.owner,
    city: rental.city,
    bedrooms: rental.bedrooms,
    image: rental.image,
    description: rental.description,
  };
}

export default class RentalSerializer extends Serializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    // Accept either an array payload (findAll) or a single object (findRecord)
    const modelType = primaryModelClass.modelName;

    if (Array.isArray(payload)) {
      return {
        data: payload.map((item) => ({
          id: String(item.id),
          type: modelType,
          attributes: toAttributes(item),
        })),
      };
    }

    // single record
    return {
      data: {
        id: String(payload.id),
        type: modelType,
        attributes: toAttributes(payload),
      },
    };
  }

  // Keep a minimal serialize for completeness (used when pushing records out)
  serialize(snapshot, options) {
    const attrs = {};
    snapshot.eachAttribute((key) => {
      attrs[key] = snapshot.attr(key);
    });
    return attrs;
  }
}
