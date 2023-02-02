const router = require('express').Router();
const { Category, Product, ProductTag } = require('../../models');

// The `/api/categories` endpoint


router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const CategoryData = await Category.findAll({
      include: [{ model: Product, attributes: ['product_name', 'price'] }]
    });

    res.status(200).json(CategoryData);

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id',async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categorynData = await Category.findByPk(req.params.id, {
   
      include: [{model:Product}]
    });

    if (!categorynData) {
      res.status(404).json({ message: 'No location found with this id!' });
      return;
    }

    res.status(200).json(categorynData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/',async (req, res) => {
  // create a new category
  try {
    const CategoryDate = await Category.create(req.body,{include: [{model:Product},{model:ProductTag},{model:Category}]});
    res.status(200).json(CategoryDate);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id',async (req, res) => {
  // update a category by its `id` value
  try {
    const categorynData = await Category.update({
      where: {
        id: req.params.id
      }
    });

    if (!categorynData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categorynData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.delete('/:id',async (req, res) => {
  // delete a category by its `id` value
  try {
    const categorynData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categorynData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categorynData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;