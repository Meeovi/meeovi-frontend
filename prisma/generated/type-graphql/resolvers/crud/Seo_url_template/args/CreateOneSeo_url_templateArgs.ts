import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Seo_url_templateCreateInput } from "../../../inputs/Seo_url_templateCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSeo_url_templateArgs {
  @TypeGraphQL.Field(_type => Seo_url_templateCreateInput, {
    nullable: false
  })
  data!: Seo_url_templateCreateInput;
}
