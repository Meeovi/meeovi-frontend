import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_rangeWhereInput } from "../../../inputs/Number_rangeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyNumber_rangeArgs {
  @TypeGraphQL.Field(_type => Number_rangeWhereInput, {
    nullable: true
  })
  where?: Number_rangeWhereInput | undefined;
}
