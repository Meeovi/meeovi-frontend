import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Currency_country_roundingCreateManyCurrencyInputEnvelope } from "../inputs/Currency_country_roundingCreateManyCurrencyInputEnvelope";
import { Currency_country_roundingCreateOrConnectWithoutCurrencyInput } from "../inputs/Currency_country_roundingCreateOrConnectWithoutCurrencyInput";
import { Currency_country_roundingCreateWithoutCurrencyInput } from "../inputs/Currency_country_roundingCreateWithoutCurrencyInput";
import { Currency_country_roundingWhereUniqueInput } from "../inputs/Currency_country_roundingWhereUniqueInput";

@TypeGraphQL.InputType("Currency_country_roundingCreateNestedManyWithoutCurrencyInput", {})
export class Currency_country_roundingCreateNestedManyWithoutCurrencyInput {
  @TypeGraphQL.Field(_type => [Currency_country_roundingCreateWithoutCurrencyInput], {
    nullable: true
  })
  create?: Currency_country_roundingCreateWithoutCurrencyInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_country_roundingCreateOrConnectWithoutCurrencyInput], {
    nullable: true
  })
  connectOrCreate?: Currency_country_roundingCreateOrConnectWithoutCurrencyInput[] | undefined;

  @TypeGraphQL.Field(_type => Currency_country_roundingCreateManyCurrencyInputEnvelope, {
    nullable: true
  })
  createMany?: Currency_country_roundingCreateManyCurrencyInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Currency_country_roundingWhereUniqueInput], {
    nullable: true
  })
  connect?: Currency_country_roundingWhereUniqueInput[] | undefined;
}
