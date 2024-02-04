import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_translationCreateWithoutLanguageInput } from "../inputs/Country_translationCreateWithoutLanguageInput";
import { Country_translationWhereUniqueInput } from "../inputs/Country_translationWhereUniqueInput";

@TypeGraphQL.InputType("Country_translationCreateOrConnectWithoutLanguageInput", {})
export class Country_translationCreateOrConnectWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Country_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Country_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Country_translationCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: Country_translationCreateWithoutLanguageInput;
}
