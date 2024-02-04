import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryUpdateWithoutCountry_translationInput } from "../inputs/CountryUpdateWithoutCountry_translationInput";
import { CountryWhereInput } from "../inputs/CountryWhereInput";

@TypeGraphQL.InputType("CountryUpdateToOneWithWhereWithoutCountry_translationInput", {})
export class CountryUpdateToOneWithWhereWithoutCountry_translationInput {
  @TypeGraphQL.Field(_type => CountryWhereInput, {
    nullable: true
  })
  where?: CountryWhereInput | undefined;

  @TypeGraphQL.Field(_type => CountryUpdateWithoutCountry_translationInput, {
    nullable: false
  })
  data!: CountryUpdateWithoutCountry_translationInput;
}
