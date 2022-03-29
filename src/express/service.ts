import repo from '../mongo/repo';

const getByIdentifier = async (identifier: string) => {
  const result = await repo.getByIdentifier(identifier);
  return result;
};

const create = async (entity: object) => {
  const result = await repo.create(entity);
  return result;
};

const update = async (identifier: string, updatedFields: object) => {
  const result = await repo.update(identifier, updatedFields);
  return result;
};

const remove = async (identifier: string) => {
  const result = await repo.remove(identifier);
  return result;
};

export default { getByIdentifier, create, update, remove };
