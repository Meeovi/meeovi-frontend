import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Category_translationCreateInput } from "../../../inputs/Category_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCategory_translationArgs {
  @TypeGraphQL.Field(_type => Category_translationCreateInput, {
    nullable: false
  })
  data!: Category_translationCreateInput;
}
