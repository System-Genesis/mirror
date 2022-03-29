import entityMirrorModel from '../mongo/model';

const byIdentifierQuery = (identifier: string) => {
  return { $or: [{ goalUserId: identifier }, { personalNumber: identifier }, { identityCard: identifier }] };
};

const getByIdentifier = async (identifier: string) => {
  const ent = await entityMirrorModel.findOne(byIdentifierQuery(identifier));
  return ent;
};

const create = async (entity: object) => {
  const ent = await entityMirrorModel.create(entity);
  return ent;
};

const update = async (identifier: string, updatedFields: object) => {
  const ent = await entityMirrorModel.updateOne(byIdentifierQuery(identifier), updatedFields);
  return ent;
};

const remove = async (identifier: string) => {
  const ent = await entityMirrorModel.deleteOne(byIdentifierQuery(identifier));
  return ent;
};

export default { getByIdentifier, create, update, remove };
