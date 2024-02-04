import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_translationCreateWithoutCountryInput } from "../inputs/Country_translationCreateWithoutCountryInput";
import { Country_translationUpdateWithoutCountryInput } from "../inputs/Country_translationUpdateWithoutCountryInput";
import { Country_translationWhereUniqueInput } from "../inputs/Country_translationWhereUniqueInput";

@TypeGraphQL.InputType("Country_translationUpsertWithWhereUniqueWithoutCountryInput", {})
export class Country_translationUpsertWithWhereUniqueWithoutCountryInput {
  @TypeGraphQL.Field(_type => Country_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Country_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Country_translationUpdateWithoutCountryInput, {
    nullable: false
  })
  update!: Country_translationUpdateWithoutCountryInput;

  @TypeGraphQL.Field(_type => Country_translationCreateWithoutCountryInput, {
    nullable: false
  })
  create!: Country_translationCreateWithoutCountryInput;
}
