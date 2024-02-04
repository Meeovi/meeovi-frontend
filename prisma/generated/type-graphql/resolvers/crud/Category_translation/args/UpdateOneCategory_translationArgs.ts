import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Category_translationUpdateInput } from "../../../inputs/Category_translationUpdateInput";
import { Category_translationWhereUniqueInput } from "../../../inputs/Category_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCategory_translationArgs {
  @TypeGraphQL.Field(_type => Category_translationUpdateInput, {
    nullable: false
  })
  data!: Category_translationUpdateInput;

  @TypeGraphQL.Field(_type => Category_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Category_translationWhereUniqueInput;
}
