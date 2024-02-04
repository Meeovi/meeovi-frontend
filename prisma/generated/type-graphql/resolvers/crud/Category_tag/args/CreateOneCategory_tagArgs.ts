import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Category_tagCreateInput } from "../../../inputs/Category_tagCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCategory_tagArgs {
  @TypeGraphQL.Field(_type => Category_tagCreateInput, {
    nullable: false
  })
  data!: Category_tagCreateInput;
}
