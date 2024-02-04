import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateOrConnectWithoutCountry_stateInput } from "../inputs/CountryCreateOrConnectWithoutCountry_stateInput";
import { CountryCreateWithoutCountry_stateInput } from "../inputs/CountryCreateWithoutCountry_stateInput";
import { CountryWhereUniqueInput } from "../inputs/CountryWhereUniqueInput";

@TypeGraphQL.InputType("CountryCreateNestedOneWithoutCountry_stateInput", {})
export class CountryCreateNestedOneWithoutCountry_stateInput {
  @TypeGraphQL.Field(_type => CountryCreateWithoutCountry_stateInput, {
    nullable: true
  })
  create?: CountryCreateWithoutCountry_stateInput | undefined;

  @TypeGraphQL.Field(_type => CountryCreateOrConnectWithoutCountry_stateInput, {
    nullable: true
  })
  connectOrCreate?: CountryCreateOrConnectWithoutCountry_stateInput | undefined;

  @TypeGraphQL.Field(_type => CountryWhereUniqueInput, {
    nullable: true
  })
  connect?: CountryWhereUniqueInput | undefined;
}
