import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Country_stateCreateInput } from "../../../inputs/Country_stateCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCountry_stateArgs {
  @TypeGraphQL.Field(_type => Country_stateCreateInput, {
    nullable: false
  })
  data!: Country_stateCreateInput;
}
