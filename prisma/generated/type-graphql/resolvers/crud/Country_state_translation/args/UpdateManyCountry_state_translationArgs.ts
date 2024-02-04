import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Country_state_translationUpdateManyMutationInput } from "../../../inputs/Country_state_translationUpdateManyMutationInput";
import { Country_state_translationWhereInput } from "../../../inputs/Country_state_translationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCountry_state_translationArgs {
  @TypeGraphQL.Field(_type => Country_state_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Country_state_translationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Country_state_translationWhereInput, {
    nullable: true
  })
  where?: Country_state_translationWhereInput | undefined;
}
