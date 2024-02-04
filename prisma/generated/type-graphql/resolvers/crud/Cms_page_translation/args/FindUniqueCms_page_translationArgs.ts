import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_page_translationWhereUniqueInput } from "../../../inputs/Cms_page_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCms_page_translationArgs {
  @TypeGraphQL.Field(_type => Cms_page_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_page_translationWhereUniqueInput;
}
