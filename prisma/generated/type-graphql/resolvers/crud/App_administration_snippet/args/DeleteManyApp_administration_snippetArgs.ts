import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_administration_snippetWhereInput } from "../../../inputs/App_administration_snippetWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyApp_administration_snippetArgs {
  @TypeGraphQL.Field(_type => App_administration_snippetWhereInput, {
    nullable: true
  })
  where?: App_administration_snippetWhereInput | undefined;
}
