import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Property_group_translationWhereInput } from "../../../inputs/Property_group_translationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProperty_group_translationArgs {
  @TypeGraphQL.Field(_type => Property_group_translationWhereInput, {
    nullable: true
  })
  where?: Property_group_translationWhereInput | undefined;
}
