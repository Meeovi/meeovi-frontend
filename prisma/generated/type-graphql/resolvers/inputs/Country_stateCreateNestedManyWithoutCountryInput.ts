import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_stateCreateManyCountryInputEnvelope } from "../inputs/Country_stateCreateManyCountryInputEnvelope";
import { Country_stateCreateOrConnectWithoutCountryInput } from "../inputs/Country_stateCreateOrConnectWithoutCountryInput";
import { Country_stateCreateWithoutCountryInput } from "../inputs/Country_stateCreateWithoutCountryInput";
import { Country_stateWhereUniqueInput } from "../inputs/Country_stateWhereUniqueInput";

@TypeGraphQL.InputType("Country_stateCreateNestedManyWithoutCountryInput", {})
export class Country_stateCreateNestedManyWithoutCountryInput {
  @TypeGraphQL.Field(_type => [Country_stateCreateWithoutCountryInput], {
    nullable: true
  })
  create?: Country_stateCreateWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_stateCreateOrConnectWithoutCountryInput], {
    nullable: true
  })
  connectOrCreate?: Country_stateCreateOrConnectWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => Country_stateCreateManyCountryInputEnvelope, {
    nullable: true
  })
  createMany?: Country_stateCreateManyCountryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Country_stateWhereUniqueInput], {
    nullable: true
  })
  connect?: Country_stateWhereUniqueInput[] | undefined;
}
