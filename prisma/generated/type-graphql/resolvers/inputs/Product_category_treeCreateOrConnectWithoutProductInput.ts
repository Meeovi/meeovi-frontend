import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_category_treeCreateWithoutProductInput } from "../inputs/Product_category_treeCreateWithoutProductInput";
import { Product_category_treeWhereUniqueInput } from "../inputs/Product_category_treeWhereUniqueInput";

@TypeGraphQL.InputType("Product_category_treeCreateOrConnectWithoutProductInput", {})
export class Product_category_treeCreateOrConnectWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_category_treeWhereUniqueInput, {
    nullable: false
  })
  where!: Product_category_treeWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_category_treeCreateWithoutProductInput, {
    nullable: false
  })
  create!: Product_category_treeCreateWithoutProductInput;
}
