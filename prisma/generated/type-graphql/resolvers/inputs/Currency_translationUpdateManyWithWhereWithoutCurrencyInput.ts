import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Currency_translationScalarWhereInput } from "../inputs/Currency_translationScalarWhereInput";
import { Currency_translationUpdateManyMutationInput } from "../inputs/Currency_translationUpdateManyMutationInput";

@TypeGraphQL.InputType("Currency_translationUpdateManyWithWhereWithoutCurrencyInput", {})
export class Currency_translationUpdateManyWithWhereWithoutCurrencyInput {
  @TypeGraphQL.Field(_type => Currency_translationScalarWhereInput, {
    nullable: false
  })
  where!: Currency_translationScalarWhereInput;

  @TypeGraphQL.Field(_type => Currency_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Currency_translationUpdateManyMutationInput;
}
