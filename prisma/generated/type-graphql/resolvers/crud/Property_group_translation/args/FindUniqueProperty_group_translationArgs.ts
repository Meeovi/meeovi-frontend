import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Property_group_translationWhereUniqueInput } from "../../../inputs/Property_group_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueProperty_group_translationArgs {
  @TypeGraphQL.Field(_type => Property_group_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Property_group_translationWhereUniqueInput;
}
