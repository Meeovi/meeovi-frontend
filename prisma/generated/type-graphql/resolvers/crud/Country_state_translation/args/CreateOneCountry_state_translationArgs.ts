import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Country_state_translationCreateInput } from "../../../inputs/Country_state_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCountry_state_translationArgs {
  @TypeGraphQL.Field(_type => Country_state_translationCreateInput, {
    nullable: false
  })
  data!: Country_state_translationCreateInput;
}
