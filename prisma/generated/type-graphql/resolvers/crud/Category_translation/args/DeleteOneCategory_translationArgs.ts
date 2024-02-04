import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Category_translationWhereUniqueInput } from "../../../inputs/Category_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneCategory_translationArgs {
  @TypeGraphQL.Field(_type => Category_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Category_translationWhereUniqueInput;
}
