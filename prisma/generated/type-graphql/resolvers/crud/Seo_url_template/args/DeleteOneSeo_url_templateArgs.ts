import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Seo_url_templateWhereUniqueInput } from "../../../inputs/Seo_url_templateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneSeo_url_templateArgs {
  @TypeGraphQL.Field(_type => Seo_url_templateWhereUniqueInput, {
    nullable: false
  })
  where!: Seo_url_templateWhereUniqueInput;
}
