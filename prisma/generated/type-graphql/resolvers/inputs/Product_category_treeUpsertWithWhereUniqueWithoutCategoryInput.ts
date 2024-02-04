import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_category_treeCreateWithoutCategoryInput } from "../inputs/Product_category_treeCreateWithoutCategoryInput";
import { Product_category_treeUpdateWithoutCategoryInput } from "../inputs/Product_category_treeUpdateWithoutCategoryInput";
import { Product_category_treeWhereUniqueInput } from "../inputs/Product_category_treeWhereUniqueInput";

@TypeGraphQL.InputType("Product_category_treeUpsertWithWhereUniqueWithoutCategoryInput", {})
export class Product_category_treeUpsertWithWhereUniqueWithoutCategoryInput {
  @TypeGraphQL.Field(_type => Product_category_treeWhereUniqueInput, {
    nullable: false
  })
  where!: Product_category_treeWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_category_treeUpdateWithoutCategoryInput, {
    nullable: false
  })
  update!: Product_category_treeUpdateWithoutCategoryInput;

  @TypeGraphQL.Field(_type => Product_category_treeCreateWithoutCategoryInput, {
    nullable: false
  })
  create!: Product_category_treeCreateWithoutCategoryInput;
}
