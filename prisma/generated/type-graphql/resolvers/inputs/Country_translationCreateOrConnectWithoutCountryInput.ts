import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_translationCreateWithoutCountryInput } from "../inputs/Country_translationCreateWithoutCountryInput";
import { Country_translationWhereUniqueInput } from "../inputs/Country_translationWhereUniqueInput";

@TypeGraphQL.InputType("Country_translationCreateOrConnectWithoutCountryInput", {})
export class Country_translationCreateOrConnectWithoutCountryInput {
  @TypeGraphQL.Field(_type => Country_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Country_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Country_translationCreateWithoutCountryInput, {
    nullable: false
  })
  create!: Country_translationCreateWithoutCountryInput;
}
