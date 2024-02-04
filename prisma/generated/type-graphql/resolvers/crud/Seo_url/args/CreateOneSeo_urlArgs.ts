import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Seo_urlCreateInput } from "../../../inputs/Seo_urlCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSeo_urlArgs {
  @TypeGraphQL.Field(_type => Seo_urlCreateInput, {
    nullable: false
  })
  data!: Seo_urlCreateInput;
}
