import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_range_stateWhereUniqueInput } from "../../../inputs/Number_range_stateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueNumber_range_stateOrThrowArgs {
  @TypeGraphQL.Field(_type => Number_range_stateWhereUniqueInput, {
    nullable: false
  })
  where!: Number_range_stateWhereUniqueInput;
}
