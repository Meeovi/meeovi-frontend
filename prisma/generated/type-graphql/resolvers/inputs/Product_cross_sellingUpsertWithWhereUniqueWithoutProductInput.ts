import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_cross_sellingCreateWithoutProductInput } from "../inputs/Product_cross_sellingCreateWithoutProductInput";
import { Product_cross_sellingUpdateWithoutProductInput } from "../inputs/Product_cross_sellingUpdateWithoutProductInput";
import { Product_cross_sellingWhereUniqueInput } from "../inputs/Product_cross_sellingWhereUniqueInput";

@TypeGraphQL.InputType("Product_cross_sellingUpsertWithWhereUniqueWithoutProductInput", {})
export class Product_cross_sellingUpsertWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_cross_sellingWhereUniqueInput, {
    nullable: false
  })
  where!: Product_cross_sellingWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_cross_sellingUpdateWithoutProductInput, {
    nullable: false
  })
  update!: Product_cross_sellingUpdateWithoutProductInput;

  @TypeGraphQL.Field(_type => Product_cross_sellingCreateWithoutProductInput, {
    nullable: false
  })
  create!: Product_cross_sellingCreateWithoutProductInput;
}
