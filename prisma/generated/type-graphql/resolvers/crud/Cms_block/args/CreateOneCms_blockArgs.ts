import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_blockCreateInput } from "../../../inputs/Cms_blockCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCms_blockArgs {
  @TypeGraphQL.Field(_type => Cms_blockCreateInput, {
    nullable: false
  })
  data!: Cms_blockCreateInput;
}
