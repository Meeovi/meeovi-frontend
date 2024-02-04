import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Property_group_translationCreateInput } from "../../../inputs/Property_group_translationCreateInput";
import { Property_group_translationUpdateInput } from "../../../inputs/Property_group_translationUpdateInput";
import { Property_group_translationWhereUniqueInput } from "../../../inputs/Property_group_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProperty_group_translationArgs {
  @TypeGraphQL.Field(_type => Property_group_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Property_group_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Property_group_translationCreateInput, {
    nullable: false
  })
  create!: Property_group_translationCreateInput;

  @TypeGraphQL.Field(_type => Property_group_translationUpdateInput, {
    nullable: false
  })
  update!: Property_group_translationUpdateInput;
}
