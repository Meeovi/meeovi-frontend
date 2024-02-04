import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Country_stateUpdateManyMutationInput } from "../../../inputs/Country_stateUpdateManyMutationInput";
import { Country_stateWhereInput } from "../../../inputs/Country_stateWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCountry_stateArgs {
  @TypeGraphQL.Field(_type => Country_stateUpdateManyMutationInput, {
    nullable: false
  })
  data!: Country_stateUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Country_stateWhereInput, {
    nullable: true
  })
  where?: Country_stateWhereInput | undefined;
}
