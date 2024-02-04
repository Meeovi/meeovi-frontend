import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_sectionCreateInput } from "../../../inputs/Cms_sectionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCms_sectionArgs {
  @TypeGraphQL.Field(_type => Cms_sectionCreateInput, {
    nullable: false
  })
  data!: Cms_sectionCreateInput;
}
