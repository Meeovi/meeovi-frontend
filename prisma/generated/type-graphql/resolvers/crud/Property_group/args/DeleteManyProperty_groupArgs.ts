import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Property_groupWhereInput } from "../../../inputs/Property_groupWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProperty_groupArgs {
  @TypeGraphQL.Field(_type => Property_groupWhereInput, {
    nullable: true
  })
  where?: Property_groupWhereInput | undefined;
}
