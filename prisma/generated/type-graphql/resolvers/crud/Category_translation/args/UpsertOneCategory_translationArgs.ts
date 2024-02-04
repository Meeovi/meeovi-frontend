import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Category_translationCreateInput } from "../../../inputs/Category_translationCreateInput";
import { Category_translationUpdateInput } from "../../../inputs/Category_translationUpdateInput";
import { Category_translationWhereUniqueInput } from "../../../inputs/Category_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCategory_translationArgs {
  @TypeGraphQL.Field(_type => Category_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Category_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Category_translationCreateInput, {
    nullable: false
  })
  create!: Category_translationCreateInput;

  @TypeGraphQL.Field(_type => Category_translationUpdateInput, {
    nullable: false
  })
  update!: Category_translationUpdateInput;
}
