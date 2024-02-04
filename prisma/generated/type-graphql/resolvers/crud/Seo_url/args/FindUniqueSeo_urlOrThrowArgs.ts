import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Seo_urlWhereUniqueInput } from "../../../inputs/Seo_urlWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSeo_urlOrThrowArgs {
  @TypeGraphQL.Field(_type => Seo_urlWhereUniqueInput, {
    nullable: false
  })
  where!: Seo_urlWhereUniqueInput;
}
