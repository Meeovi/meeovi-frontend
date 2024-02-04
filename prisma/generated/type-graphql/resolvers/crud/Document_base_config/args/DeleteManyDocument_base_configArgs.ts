import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Document_base_configWhereInput } from "../../../inputs/Document_base_configWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyDocument_base_configArgs {
  @TypeGraphQL.Field(_type => Document_base_configWhereInput, {
    nullable: true
  })
  where?: Document_base_configWhereInput | undefined;
}
