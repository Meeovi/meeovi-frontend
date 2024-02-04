import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_range_type_translationCreateInput } from "../../../inputs/Number_range_type_translationCreateInput";
import { Number_range_type_translationUpdateInput } from "../../../inputs/Number_range_type_translationUpdateInput";
import { Number_range_type_translationWhereUniqueInput } from "../../../inputs/Number_range_type_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneNumber_range_type_translationArgs {
  @TypeGraphQL.Field(_type => Number_range_type_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Number_range_type_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Number_range_type_translationCreateInput, {
    nullable: false
  })
  create!: Number_range_type_translationCreateInput;

  @TypeGraphQL.Field(_type => Number_range_type_translationUpdateInput, {
    nullable: false
  })
  update!: Number_range_type_translationUpdateInput;
}
