import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Document_base_configWhereUniqueInput } from "../../../inputs/Document_base_configWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueDocument_base_configArgs {
  @TypeGraphQL.Field(_type => Document_base_configWhereUniqueInput, {
    nullable: false
  })
  where!: Document_base_configWhereUniqueInput;
}
