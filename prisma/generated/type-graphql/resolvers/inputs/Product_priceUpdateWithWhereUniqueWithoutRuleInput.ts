import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_priceUpdateWithoutRuleInput } from "../inputs/Product_priceUpdateWithoutRuleInput";
import { Product_priceWhereUniqueInput } from "../inputs/Product_priceWhereUniqueInput";

@TypeGraphQL.InputType("Product_priceUpdateWithWhereUniqueWithoutRuleInput", {})
export class Product_priceUpdateWithWhereUniqueWithoutRuleInput {
  @TypeGraphQL.Field(_type => Product_priceWhereUniqueInput, {
    nullable: false
  })
  where!: Product_priceWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_priceUpdateWithoutRuleInput, {
    nullable: false
  })
  data!: Product_priceUpdateWithoutRuleInput;
}
