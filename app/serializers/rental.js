import Serializer from '@ember-data/serializer';

export default class RentalSerializer extends Serializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    // The API returns an array of rental objects directly
    // We need to transform them into JSON-API format
    const modelType = primaryModelClass.modelName;

    if (Array.isArray(payload)) {
        console.log('Payload is an array:', payload);
      return {
        data: payload.map((item) => ({
          id: String(item.id),
          type: modelType,
          attributes: item.attributes,
        })),
      };
    }

    console.log('Payload is a single object:', payload);    
    // Single record
    return {
      data: {
        id: String(payload.id),
        type: modelType,
        attributes: item.attributes,
      },
    };
  }

  serialize(snapshot, options) {
    const attrs = {};
    snapshot.eachAttribute((key) => {
      attrs[key] = snapshot.attr(key);
    });
    return attrs;
  }
}