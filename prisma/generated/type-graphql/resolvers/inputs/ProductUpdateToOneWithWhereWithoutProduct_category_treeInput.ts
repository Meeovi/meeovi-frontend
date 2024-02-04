import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateWithoutProduct_category_treeInput } from "../inputs/ProductUpdateWithoutProduct_category_treeInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpdateToOneWithWhereWithoutProduct_category_treeInput", {})
export class ProductUpdateToOneWithWhereWithoutProduct_category_treeInput {
  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutProduct_category_treeInput, {
    nullable: false
  })
  data!: ProductUpdateWithoutProduct_category_treeInput;
}
