import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateOrConnectWithoutCountry_translationInput } from "../inputs/CountryCreateOrConnectWithoutCountry_translationInput";
import { CountryCreateWithoutCountry_translationInput } from "../inputs/CountryCreateWithoutCountry_translationInput";
import { CountryWhereUniqueInput } from "../inputs/CountryWhereUniqueInput";

@TypeGraphQL.InputType("CountryCreateNestedOneWithoutCountry_translationInput", {})
export class CountryCreateNestedOneWithoutCountry_translationInput {
  @TypeGraphQL.Field(_type => CountryCreateWithoutCountry_translationInput, {
    nullable: true
  })
  create?: CountryCreateWithoutCountry_translationInput | undefined;

  @TypeGraphQL.Field(_type => CountryCreateOrConnectWithoutCountry_translationInput, {
    nullable: true
  })
  connectOrCreate?: CountryCreateOrConnectWithoutCountry_translationInput | undefined;

  @TypeGraphQL.Field(_type => CountryWhereUniqueInput, {
    nullable: true
  })
  connect?: CountryWhereUniqueInput | undefined;
}
