import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateWithoutCountry_stateInput } from "../inputs/CountryCreateWithoutCountry_stateInput";
import { CountryUpdateWithoutCountry_stateInput } from "../inputs/CountryUpdateWithoutCountry_stateInput";
import { CountryWhereInput } from "../inputs/CountryWhereInput";

@TypeGraphQL.InputType("CountryUpsertWithoutCountry_stateInput", {})
export class CountryUpsertWithoutCountry_stateInput {
  @TypeGraphQL.Field(_type => CountryUpdateWithoutCountry_stateInput, {
    nullable: false
  })
  update!: CountryUpdateWithoutCountry_stateInput;

  @TypeGraphQL.Field(_type => CountryCreateWithoutCountry_stateInput, {
    nullable: false
  })
  create!: CountryCreateWithoutCountry_stateInput;

  @TypeGraphQL.Field(_type => CountryWhereInput, {
    nullable: true
  })
  where?: CountryWhereInput | undefined;
}
