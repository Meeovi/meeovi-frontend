import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Currency_country_roundingScalarWhereInput } from "../inputs/Currency_country_roundingScalarWhereInput";
import { Currency_country_roundingUpdateManyMutationInput } from "../inputs/Currency_country_roundingUpdateManyMutationInput";

@TypeGraphQL.InputType("Currency_country_roundingUpdateManyWithWhereWithoutCurrencyInput", {})
export class Currency_country_roundingUpdateManyWithWhereWithoutCurrencyInput {
  @TypeGraphQL.Field(_type => Currency_country_roundingScalarWhereInput, {
    nullable: false
  })
  where!: Currency_country_roundingScalarWhereInput;

  @TypeGraphQL.Field(_type => Currency_country_roundingUpdateManyMutationInput, {
    nullable: false
  })
  data!: Currency_country_roundingUpdateManyMutationInput;
}
