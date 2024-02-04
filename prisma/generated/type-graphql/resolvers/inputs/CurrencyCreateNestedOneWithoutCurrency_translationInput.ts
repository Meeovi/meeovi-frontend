import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyCreateOrConnectWithoutCurrency_translationInput } from "../inputs/CurrencyCreateOrConnectWithoutCurrency_translationInput";
import { CurrencyCreateWithoutCurrency_translationInput } from "../inputs/CurrencyCreateWithoutCurrency_translationInput";
import { CurrencyWhereUniqueInput } from "../inputs/CurrencyWhereUniqueInput";

@TypeGraphQL.InputType("CurrencyCreateNestedOneWithoutCurrency_translationInput", {})
export class CurrencyCreateNestedOneWithoutCurrency_translationInput {
  @TypeGraphQL.Field(_type => CurrencyCreateWithoutCurrency_translationInput, {
    nullable: true
  })
  create?: CurrencyCreateWithoutCurrency_translationInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyCreateOrConnectWithoutCurrency_translationInput, {
    nullable: true
  })
  connectOrCreate?: CurrencyCreateOrConnectWithoutCurrency_translationInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyWhereUniqueInput, {
    nullable: true
  })
  connect?: CurrencyWhereUniqueInput | undefined;
}
