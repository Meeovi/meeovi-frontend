import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyCreateWithoutCurrency_translationInput } from "../inputs/CurrencyCreateWithoutCurrency_translationInput";
import { CurrencyWhereUniqueInput } from "../inputs/CurrencyWhereUniqueInput";

@TypeGraphQL.InputType("CurrencyCreateOrConnectWithoutCurrency_translationInput", {})
export class CurrencyCreateOrConnectWithoutCurrency_translationInput {
  @TypeGraphQL.Field(_type => CurrencyWhereUniqueInput, {
    nullable: false
  })
  where!: CurrencyWhereUniqueInput;

  @TypeGraphQL.Field(_type => CurrencyCreateWithoutCurrency_translationInput, {
    nullable: false
  })
  create!: CurrencyCreateWithoutCurrency_translationInput;
}
