import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_category_treeUpdateWithoutProductInput } from "../inputs/Product_category_treeUpdateWithoutProductInput";
import { Product_category_treeWhereUniqueInput } from "../inputs/Product_category_treeWhereUniqueInput";

@TypeGraphQL.InputType("Product_category_treeUpdateWithWhereUniqueWithoutProductInput", {})
export class Product_category_treeUpdateWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_category_treeWhereUniqueInput, {
    nullable: false
  })
  where!: Product_category_treeWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_category_treeUpdateWithoutProductInput, {
    nullable: false
  })
  data!: Product_category_treeUpdateWithoutProductInput;
}
