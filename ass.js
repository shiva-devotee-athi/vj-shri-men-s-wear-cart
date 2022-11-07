async getAllProducts() {
    try {
      let result = await fetch("store.json");
      let data = await result.json();
      let products = data.items;
      // console.log(products);

      products = products.map(item => {
        const { ID, NAME, PIC, SHOP, AMT, FTYPE, LATEST } = item;
        return { ID, NAME, PIC, SHOP, AMT, FTYPE, LATEST };
      });
      return (products);
    } catch (err) {
      console.log(err);
    }

  }