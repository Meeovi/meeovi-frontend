import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_state_translationCreateWithoutLanguageInput } from "../inputs/Country_state_translationCreateWithoutLanguageInput";
import { Country_state_translationWhereUniqueInput } from "../inputs/Country_state_translationWhereUniqueInput";

@TypeGraphQL.InputType("Country_state_translationCreateOrConnectWithoutLanguageInput", {})
export class Country_state_translationCreateOrConnectWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Country_state_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Country_state_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Country_state_translationCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: Country_state_translationCreateWithoutLanguageInput;
}
