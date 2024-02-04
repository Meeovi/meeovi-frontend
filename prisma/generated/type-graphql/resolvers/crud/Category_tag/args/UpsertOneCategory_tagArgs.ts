import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Category_tagCreateInput } from "../../../inputs/Category_tagCreateInput";
import { Category_tagUpdateInput } from "../../../inputs/Category_tagUpdateInput";
import { Category_tagWhereUniqueInput } from "../../../inputs/Category_tagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCategory_tagArgs {
  @TypeGraphQL.Field(_type => Category_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Category_tagWhereUniqueInput;

  @TypeGraphQL.Field(_type => Category_tagCreateInput, {
    nullable: false
  })
  create!: Category_tagCreateInput;

  @TypeGraphQL.Field(_type => Category_tagUpdateInput, {
    nullable: false
  })
  update!: Category_tagUpdateInput;
}
