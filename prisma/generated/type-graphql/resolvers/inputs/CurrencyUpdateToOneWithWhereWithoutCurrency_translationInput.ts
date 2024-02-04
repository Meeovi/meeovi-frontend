import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyUpdateWithoutCurrency_translationInput } from "../inputs/CurrencyUpdateWithoutCurrency_translationInput";
import { CurrencyWhereInput } from "../inputs/CurrencyWhereInput";

@TypeGraphQL.InputType("CurrencyUpdateToOneWithWhereWithoutCurrency_translationInput", {})
export class CurrencyUpdateToOneWithWhereWithoutCurrency_translationInput {
  @TypeGraphQL.Field(_type => CurrencyWhereInput, {
    nullable: true
  })
  where?: CurrencyWhereInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyUpdateWithoutCurrency_translationInput, {
    nullable: false
  })
  data!: CurrencyUpdateWithoutCurrency_translationInput;
}
