import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_stateCreateOrConnectWithoutCountry_state_translationInput } from "../inputs/Country_stateCreateOrConnectWithoutCountry_state_translationInput";
import { Country_stateCreateWithoutCountry_state_translationInput } from "../inputs/Country_stateCreateWithoutCountry_state_translationInput";
import { Country_stateUpdateToOneWithWhereWithoutCountry_state_translationInput } from "../inputs/Country_stateUpdateToOneWithWhereWithoutCountry_state_translationInput";
import { Country_stateUpsertWithoutCountry_state_translationInput } from "../inputs/Country_stateUpsertWithoutCountry_state_translationInput";
import { Country_stateWhereUniqueInput } from "../inputs/Country_stateWhereUniqueInput";

@TypeGraphQL.InputType("Country_stateUpdateOneRequiredWithoutCountry_state_translationNestedInput", {})
export class Country_stateUpdateOneRequiredWithoutCountry_state_translationNestedInput {
  @TypeGraphQL.Field(_type => Country_stateCreateWithoutCountry_state_translationInput, {
    nullable: true
  })
  create?: Country_stateCreateWithoutCountry_state_translationInput | undefined;

  @TypeGraphQL.Field(_type => Country_stateCreateOrConnectWithoutCountry_state_translationInput, {
    nullable: true
  })
  connectOrCreate?: Country_stateCreateOrConnectWithoutCountry_state_translationInput | undefined;

  @TypeGraphQL.Field(_type => Country_stateUpsertWithoutCountry_state_translationInput, {
    nullable: true
  })
  upsert?: Country_stateUpsertWithoutCountry_state_translationInput | undefined;

  @TypeGraphQL.Field(_type => Country_stateWhereUniqueInput, {
    nullable: true
  })
  connect?: Country_stateWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Country_stateUpdateToOneWithWhereWithoutCountry_state_translationInput, {
    nullable: true
  })
  update?: Country_stateUpdateToOneWithWhereWithoutCountry_state_translationInput | undefined;
}
