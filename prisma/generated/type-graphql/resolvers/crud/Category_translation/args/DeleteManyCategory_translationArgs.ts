import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Category_translationWhereInput } from "../../../inputs/Category_translationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCategory_translationArgs {
  @TypeGraphQL.Field(_type => Category_translationWhereInput, {
    nullable: true
  })
  where?: Category_translationWhereInput | undefined;
}
