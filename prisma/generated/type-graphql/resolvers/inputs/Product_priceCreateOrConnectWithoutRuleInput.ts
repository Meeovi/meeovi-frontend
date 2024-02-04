import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_priceCreateWithoutRuleInput } from "../inputs/Product_priceCreateWithoutRuleInput";
import { Product_priceWhereUniqueInput } from "../inputs/Product_priceWhereUniqueInput";

@TypeGraphQL.InputType("Product_priceCreateOrConnectWithoutRuleInput", {})
export class Product_priceCreateOrConnectWithoutRuleInput {
  @TypeGraphQL.Field(_type => Product_priceWhereUniqueInput, {
    nullable: false
  })
  where!: Product_priceWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_priceCreateWithoutRuleInput, {
    nullable: false
  })
  create!: Product_priceCreateWithoutRuleInput;
}
