import { CategoriesRepositoryInMemory } from '../../repositories/in-memory/categoriesRepositoryInMemory';
import { AppError } from '../../../../shared/errors/appError';
import { CreateCategoryUseCase } from './createCategoryUseCase';

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;
describe('Create Category', () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory,
    );
  });

  it('Should be able to create a new category', async () => {
    const category = {
      name: 'Category Test',
      description: 'Category description Test',
    };

    await createCategoryUseCase.execute({
      name: category.name,
      description: category.description,
    });

    const categoryCreated = await categoriesRepositoryInMemory.findByName(
      category.name,
    );

    expect(categoryCreated).toHaveProperty('id');
  });

  it('Should not be able to create a new category with name exists', async () => {
    expect(async () => {
      const category = {
        name: 'Category Test',
        description: 'Category description Test',
      };

      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description,
      });

      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});

// describe("Category create", () => {
//   it("Expect 2 + 2 equal 4", () => {
//     const soma = 2 + 2;
//     const resultado = 4;

//     expect(soma).toBe(resultado)
//   });
//   it("Expect 2 + 2 not to be 5", () => {
//     const soma = 2 + 2;
//     const resultado = 5;

//     expect(soma).not.toBe(resultado);
//   });
// });
