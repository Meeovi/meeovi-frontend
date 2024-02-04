import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Category_tagWhereInput } from "../../../inputs/Category_tagWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCategory_tagArgs {
  @TypeGraphQL.Field(_type => Category_tagWhereInput, {
    nullable: true
  })
  where?: Category_tagWhereInput | undefined;
}
