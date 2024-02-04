import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Seo_url_templateWhereInput } from "../../../inputs/Seo_url_templateWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySeo_url_templateArgs {
  @TypeGraphQL.Field(_type => Seo_url_templateWhereInput, {
    nullable: true
  })
  where?: Seo_url_templateWhereInput | undefined;
}
