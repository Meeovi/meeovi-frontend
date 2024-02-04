import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_state_translationCreateManyCountry_stateInputEnvelope } from "../inputs/Country_state_translationCreateManyCountry_stateInputEnvelope";
import { Country_state_translationCreateOrConnectWithoutCountry_stateInput } from "../inputs/Country_state_translationCreateOrConnectWithoutCountry_stateInput";
import { Country_state_translationCreateWithoutCountry_stateInput } from "../inputs/Country_state_translationCreateWithoutCountry_stateInput";
import { Country_state_translationWhereUniqueInput } from "../inputs/Country_state_translationWhereUniqueInput";

@TypeGraphQL.InputType("Country_state_translationCreateNestedManyWithoutCountry_stateInput", {})
export class Country_state_translationCreateNestedManyWithoutCountry_stateInput {
  @TypeGraphQL.Field(_type => [Country_state_translationCreateWithoutCountry_stateInput], {
    nullable: true
  })
  create?: Country_state_translationCreateWithoutCountry_stateInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_state_translationCreateOrConnectWithoutCountry_stateInput], {
    nullable: true
  })
  connectOrCreate?: Country_state_translationCreateOrConnectWithoutCountry_stateInput[] | undefined;

  @TypeGraphQL.Field(_type => Country_state_translationCreateManyCountry_stateInputEnvelope, {
    nullable: true
  })
  createMany?: Country_state_translationCreateManyCountry_stateInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Country_state_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Country_state_translationWhereUniqueInput[] | undefined;
}
