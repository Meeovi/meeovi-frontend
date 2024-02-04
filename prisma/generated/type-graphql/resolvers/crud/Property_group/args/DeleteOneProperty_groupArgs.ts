import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Property_groupWhereUniqueInput } from "../../../inputs/Property_groupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneProperty_groupArgs {
  @TypeGraphQL.Field(_type => Property_groupWhereUniqueInput, {
    nullable: false
  })
  where!: Property_groupWhereUniqueInput;
}
