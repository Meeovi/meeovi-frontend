import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyCreateWithoutPromotion_discount_pricesInput } from "../inputs/CurrencyCreateWithoutPromotion_discount_pricesInput";
import { CurrencyWhereUniqueInput } from "../inputs/CurrencyWhereUniqueInput";

@TypeGraphQL.InputType("CurrencyCreateOrConnectWithoutPromotion_discount_pricesInput", {})
export class CurrencyCreateOrConnectWithoutPromotion_discount_pricesInput {
  @TypeGraphQL.Field(_type => CurrencyWhereUniqueInput, {
    nullable: false
  })
  where!: CurrencyWhereUniqueInput;

  @TypeGraphQL.Field(_type => CurrencyCreateWithoutPromotion_discount_pricesInput, {
    nullable: false
  })
  create!: CurrencyCreateWithoutPromotion_discount_pricesInput;
}
