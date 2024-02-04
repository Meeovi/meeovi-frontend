import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_priceCreateWithoutProductInput } from "../inputs/Product_priceCreateWithoutProductInput";
import { Product_priceWhereUniqueInput } from "../inputs/Product_priceWhereUniqueInput";

@TypeGraphQL.InputType("Product_priceCreateOrConnectWithoutProductInput", {})
export class Product_priceCreateOrConnectWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_priceWhereUniqueInput, {
    nullable: false
  })
  where!: Product_priceWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_priceCreateWithoutProductInput, {
    nullable: false
  })
  create!: Product_priceCreateWithoutProductInput;
}
