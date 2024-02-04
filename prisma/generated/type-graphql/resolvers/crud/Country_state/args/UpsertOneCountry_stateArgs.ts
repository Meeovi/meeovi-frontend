import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Country_stateCreateInput } from "../../../inputs/Country_stateCreateInput";
import { Country_stateUpdateInput } from "../../../inputs/Country_stateUpdateInput";
import { Country_stateWhereUniqueInput } from "../../../inputs/Country_stateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCountry_stateArgs {
  @TypeGraphQL.Field(_type => Country_stateWhereUniqueInput, {
    nullable: false
  })
  where!: Country_stateWhereUniqueInput;

  @TypeGraphQL.Field(_type => Country_stateCreateInput, {
    nullable: false
  })
  create!: Country_stateCreateInput;

  @TypeGraphQL.Field(_type => Country_stateUpdateInput, {
    nullable: false
  })
  update!: Country_stateUpdateInput;
}
