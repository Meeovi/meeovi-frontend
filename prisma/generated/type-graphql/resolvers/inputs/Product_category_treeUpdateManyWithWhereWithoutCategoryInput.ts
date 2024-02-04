import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_category_treeScalarWhereInput } from "../inputs/Product_category_treeScalarWhereInput";
import { Product_category_treeUpdateManyMutationInput } from "../inputs/Product_category_treeUpdateManyMutationInput";

@TypeGraphQL.InputType("Product_category_treeUpdateManyWithWhereWithoutCategoryInput", {})
export class Product_category_treeUpdateManyWithWhereWithoutCategoryInput {
  @TypeGraphQL.Field(_type => Product_category_treeScalarWhereInput, {
    nullable: false
  })
  where!: Product_category_treeScalarWhereInput;

  @TypeGraphQL.Field(_type => Product_category_treeUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_category_treeUpdateManyMutationInput;
}
