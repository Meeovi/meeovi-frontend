import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Category_tagWhereUniqueInput } from "../../../inputs/Category_tagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCategory_tagArgs {
  @TypeGraphQL.Field(_type => Category_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Category_tagWhereUniqueInput;
}
