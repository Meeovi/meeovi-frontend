import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyCreateOrConnectWithoutCurrency_country_roundingInput } from "../inputs/CurrencyCreateOrConnectWithoutCurrency_country_roundingInput";
import { CurrencyCreateWithoutCurrency_country_roundingInput } from "../inputs/CurrencyCreateWithoutCurrency_country_roundingInput";
import { CurrencyWhereUniqueInput } from "../inputs/CurrencyWhereUniqueInput";

@TypeGraphQL.InputType("CurrencyCreateNestedOneWithoutCurrency_country_roundingInput", {})
export class CurrencyCreateNestedOneWithoutCurrency_country_roundingInput {
  @TypeGraphQL.Field(_type => CurrencyCreateWithoutCurrency_country_roundingInput, {
    nullable: true
  })
  create?: CurrencyCreateWithoutCurrency_country_roundingInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyCreateOrConnectWithoutCurrency_country_roundingInput, {
    nullable: true
  })
  connectOrCreate?: CurrencyCreateOrConnectWithoutCurrency_country_roundingInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyWhereUniqueInput, {
    nullable: true
  })
  connect?: CurrencyWhereUniqueInput | undefined;
}
