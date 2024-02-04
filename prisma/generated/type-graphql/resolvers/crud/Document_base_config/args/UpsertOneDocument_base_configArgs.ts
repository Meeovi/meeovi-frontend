import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Document_base_configCreateInput } from "../../../inputs/Document_base_configCreateInput";
import { Document_base_configUpdateInput } from "../../../inputs/Document_base_configUpdateInput";
import { Document_base_configWhereUniqueInput } from "../../../inputs/Document_base_configWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneDocument_base_configArgs {
  @TypeGraphQL.Field(_type => Document_base_configWhereUniqueInput, {
    nullable: false
  })
  where!: Document_base_configWhereUniqueInput;

  @TypeGraphQL.Field(_type => Document_base_configCreateInput, {
    nullable: false
  })
  create!: Document_base_configCreateInput;

  @TypeGraphQL.Field(_type => Document_base_configUpdateInput, {
    nullable: false
  })
  update!: Document_base_configUpdateInput;
}
