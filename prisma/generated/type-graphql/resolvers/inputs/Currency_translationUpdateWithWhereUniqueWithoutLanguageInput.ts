import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Currency_translationUpdateWithoutLanguageInput } from "../inputs/Currency_translationUpdateWithoutLanguageInput";
import { Currency_translationWhereUniqueInput } from "../inputs/Currency_translationWhereUniqueInput";

@TypeGraphQL.InputType("Currency_translationUpdateWithWhereUniqueWithoutLanguageInput", {})
export class Currency_translationUpdateWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Currency_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Currency_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Currency_translationUpdateWithoutLanguageInput, {
    nullable: false
  })
  data!: Currency_translationUpdateWithoutLanguageInput;
}
