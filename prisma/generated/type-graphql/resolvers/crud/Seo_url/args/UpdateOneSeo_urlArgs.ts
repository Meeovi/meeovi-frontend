import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Seo_urlUpdateInput } from "../../../inputs/Seo_urlUpdateInput";
import { Seo_urlWhereUniqueInput } from "../../../inputs/Seo_urlWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSeo_urlArgs {
  @TypeGraphQL.Field(_type => Seo_urlUpdateInput, {
    nullable: false
  })
  data!: Seo_urlUpdateInput;

  @TypeGraphQL.Field(_type => Seo_urlWhereUniqueInput, {
    nullable: false
  })
  where!: Seo_urlWhereUniqueInput;
}
