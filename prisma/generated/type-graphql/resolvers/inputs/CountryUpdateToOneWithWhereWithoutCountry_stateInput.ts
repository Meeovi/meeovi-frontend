import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryUpdateWithoutCountry_stateInput } from "../inputs/CountryUpdateWithoutCountry_stateInput";
import { CountryWhereInput } from "../inputs/CountryWhereInput";

@TypeGraphQL.InputType("CountryUpdateToOneWithWhereWithoutCountry_stateInput", {})
export class CountryUpdateToOneWithWhereWithoutCountry_stateInput {
  @TypeGraphQL.Field(_type => CountryWhereInput, {
    nullable: true
  })
  where?: CountryWhereInput | undefined;

  @TypeGraphQL.Field(_type => CountryUpdateWithoutCountry_stateInput, {
    nullable: false
  })
  data!: CountryUpdateWithoutCountry_stateInput;
}
