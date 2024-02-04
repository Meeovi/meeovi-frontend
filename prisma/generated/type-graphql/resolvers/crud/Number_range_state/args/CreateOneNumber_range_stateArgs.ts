import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_range_stateCreateInput } from "../../../inputs/Number_range_stateCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneNumber_range_stateArgs {
  @TypeGraphQL.Field(_type => Number_range_stateCreateInput, {
    nullable: false
  })
  data!: Number_range_stateCreateInput;
}
