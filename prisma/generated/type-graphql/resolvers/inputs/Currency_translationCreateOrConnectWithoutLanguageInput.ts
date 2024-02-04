import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Currency_translationCreateWithoutLanguageInput } from "../inputs/Currency_translationCreateWithoutLanguageInput";
import { Currency_translationWhereUniqueInput } from "../inputs/Currency_translationWhereUniqueInput";

@TypeGraphQL.InputType("Currency_translationCreateOrConnectWithoutLanguageInput", {})
export class Currency_translationCreateOrConnectWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Currency_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Currency_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Currency_translationCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: Currency_translationCreateWithoutLanguageInput;
}
