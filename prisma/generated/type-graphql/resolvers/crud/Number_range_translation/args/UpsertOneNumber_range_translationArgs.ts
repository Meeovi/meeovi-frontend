import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_range_translationCreateInput } from "../../../inputs/Number_range_translationCreateInput";
import { Number_range_translationUpdateInput } from "../../../inputs/Number_range_translationUpdateInput";
import { Number_range_translationWhereUniqueInput } from "../../../inputs/Number_range_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneNumber_range_translationArgs {
  @TypeGraphQL.Field(_type => Number_range_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Number_range_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Number_range_translationCreateInput, {
    nullable: false
  })
  create!: Number_range_translationCreateInput;

  @TypeGraphQL.Field(_type => Number_range_translationUpdateInput, {
    nullable: false
  })
  update!: Number_range_translationUpdateInput;
}
