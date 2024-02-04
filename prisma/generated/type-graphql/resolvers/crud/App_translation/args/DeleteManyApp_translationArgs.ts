import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_translationWhereInput } from "../../../inputs/App_translationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyApp_translationArgs {
  @TypeGraphQL.Field(_type => App_translationWhereInput, {
    nullable: true
  })
  where?: App_translationWhereInput | undefined;
}
