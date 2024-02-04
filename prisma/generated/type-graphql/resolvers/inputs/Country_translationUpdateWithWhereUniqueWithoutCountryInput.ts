import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_translationUpdateWithoutCountryInput } from "../inputs/Country_translationUpdateWithoutCountryInput";
import { Country_translationWhereUniqueInput } from "../inputs/Country_translationWhereUniqueInput";

@TypeGraphQL.InputType("Country_translationUpdateWithWhereUniqueWithoutCountryInput", {})
export class Country_translationUpdateWithWhereUniqueWithoutCountryInput {
  @TypeGraphQL.Field(_type => Country_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Country_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Country_translationUpdateWithoutCountryInput, {
    nullable: false
  })
  data!: Country_translationUpdateWithoutCountryInput;
}
