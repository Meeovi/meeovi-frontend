import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Category_tagUpdateInput } from "../../../inputs/Category_tagUpdateInput";
import { Category_tagWhereUniqueInput } from "../../../inputs/Category_tagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCategory_tagArgs {
  @TypeGraphQL.Field(_type => Category_tagUpdateInput, {
    nullable: false
  })
  data!: Category_tagUpdateInput;

  @TypeGraphQL.Field(_type => Category_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Category_tagWhereUniqueInput;
}
