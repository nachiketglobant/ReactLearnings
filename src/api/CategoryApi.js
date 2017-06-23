export var categoryJson = [
  { "id": 1, "description": "R&D" },
  { "id": 2, "description": "Learning" },
  { "id": 3, "description": "POC" }
];

class CategoryApi {
  static getAllCategories() {
    return categoryJson;
  }
}

export default CategoryApi;