import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateWithoutCountry_translationInput } from "../inputs/CountryCreateWithoutCountry_translationInput";
import { CountryUpdateWithoutCountry_translationInput } from "../inputs/CountryUpdateWithoutCountry_translationInput";
import { CountryWhereInput } from "../inputs/CountryWhereInput";

@TypeGraphQL.InputType("CountryUpsertWithoutCountry_translationInput", {})
export class CountryUpsertWithoutCountry_translationInput {
  @TypeGraphQL.Field(_type => CountryUpdateWithoutCountry_translationInput, {
    nullable: false
  })
  update!: CountryUpdateWithoutCountry_translationInput;

  @TypeGraphQL.Field(_type => CountryCreateWithoutCountry_translationInput, {
    nullable: false
  })
  create!: CountryCreateWithoutCountry_translationInput;

  @TypeGraphQL.Field(_type => CountryWhereInput, {
    nullable: true
  })
  where?: CountryWhereInput | undefined;
}
