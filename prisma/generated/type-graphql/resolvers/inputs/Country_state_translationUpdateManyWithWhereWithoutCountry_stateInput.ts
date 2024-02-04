import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_state_translationScalarWhereInput } from "../inputs/Country_state_translationScalarWhereInput";
import { Country_state_translationUpdateManyMutationInput } from "../inputs/Country_state_translationUpdateManyMutationInput";

@TypeGraphQL.InputType("Country_state_translationUpdateManyWithWhereWithoutCountry_stateInput", {})
export class Country_state_translationUpdateManyWithWhereWithoutCountry_stateInput {
  @TypeGraphQL.Field(_type => Country_state_translationScalarWhereInput, {
    nullable: false
  })
  where!: Country_state_translationScalarWhereInput;

  @TypeGraphQL.Field(_type => Country_state_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Country_state_translationUpdateManyMutationInput;
}
