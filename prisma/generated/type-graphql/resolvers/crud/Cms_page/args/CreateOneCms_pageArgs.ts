import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_pageCreateInput } from "../../../inputs/Cms_pageCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCms_pageArgs {
  @TypeGraphQL.Field(_type => Cms_pageCreateInput, {
    nullable: false
  })
  data!: Cms_pageCreateInput;
}
