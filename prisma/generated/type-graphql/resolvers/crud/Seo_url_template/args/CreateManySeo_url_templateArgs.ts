import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Seo_url_templateCreateManyInput } from "../../../inputs/Seo_url_templateCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySeo_url_templateArgs {
  @TypeGraphQL.Field(_type => [Seo_url_templateCreateManyInput], {
    nullable: false
  })
  data!: Seo_url_templateCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
