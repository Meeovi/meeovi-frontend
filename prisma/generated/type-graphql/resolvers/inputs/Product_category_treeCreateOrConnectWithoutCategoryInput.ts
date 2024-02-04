import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_category_treeCreateWithoutCategoryInput } from "../inputs/Product_category_treeCreateWithoutCategoryInput";
import { Product_category_treeWhereUniqueInput } from "../inputs/Product_category_treeWhereUniqueInput";

@TypeGraphQL.InputType("Product_category_treeCreateOrConnectWithoutCategoryInput", {})
export class Product_category_treeCreateOrConnectWithoutCategoryInput {
  @TypeGraphQL.Field(_type => Product_category_treeWhereUniqueInput, {
    nullable: false
  })
  where!: Product_category_treeWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_category_treeCreateWithoutCategoryInput, {
    nullable: false
  })
  create!: Product_category_treeCreateWithoutCategoryInput;
}
