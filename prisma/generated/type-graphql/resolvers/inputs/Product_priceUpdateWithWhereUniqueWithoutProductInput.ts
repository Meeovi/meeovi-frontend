import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_priceUpdateWithoutProductInput } from "../inputs/Product_priceUpdateWithoutProductInput";
import { Product_priceWhereUniqueInput } from "../inputs/Product_priceWhereUniqueInput";

@TypeGraphQL.InputType("Product_priceUpdateWithWhereUniqueWithoutProductInput", {})
export class Product_priceUpdateWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_priceWhereUniqueInput, {
    nullable: false
  })
  where!: Product_priceWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_priceUpdateWithoutProductInput, {
    nullable: false
  })
  data!: Product_priceUpdateWithoutProductInput;
}
