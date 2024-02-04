import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_range_stateWhereInput } from "../../../inputs/Number_range_stateWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyNumber_range_stateArgs {
  @TypeGraphQL.Field(_type => Number_range_stateWhereInput, {
    nullable: true
  })
  where?: Number_range_stateWhereInput | undefined;
}
