import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Seo_urlCreateManyInput } from "../../../inputs/Seo_urlCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySeo_urlArgs {
  @TypeGraphQL.Field(_type => [Seo_urlCreateManyInput], {
    nullable: false
  })
  data!: Seo_urlCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
