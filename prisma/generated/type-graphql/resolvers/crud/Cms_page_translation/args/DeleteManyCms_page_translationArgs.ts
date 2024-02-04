import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_page_translationWhereInput } from "../../../inputs/Cms_page_translationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCms_page_translationArgs {
  @TypeGraphQL.Field(_type => Cms_page_translationWhereInput, {
    nullable: true
  })
  where?: Cms_page_translationWhereInput | undefined;
}
