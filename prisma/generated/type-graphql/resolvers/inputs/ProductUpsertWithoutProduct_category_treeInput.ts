import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutProduct_category_treeInput } from "../inputs/ProductCreateWithoutProduct_category_treeInput";
import { ProductUpdateWithoutProduct_category_treeInput } from "../inputs/ProductUpdateWithoutProduct_category_treeInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpsertWithoutProduct_category_treeInput", {})
export class ProductUpsertWithoutProduct_category_treeInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutProduct_category_treeInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutProduct_category_treeInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_category_treeInput, {
    nullable: false
  })
  create!: ProductCreateWithoutProduct_category_treeInput;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;
}
