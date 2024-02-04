import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Document_base_configCreateInput } from "../../../inputs/Document_base_configCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneDocument_base_configArgs {
  @TypeGraphQL.Field(_type => Document_base_configCreateInput, {
    nullable: false
  })
  data!: Document_base_configCreateInput;
}
