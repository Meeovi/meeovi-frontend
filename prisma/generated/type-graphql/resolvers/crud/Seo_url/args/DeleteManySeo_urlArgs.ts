import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Seo_urlWhereInput } from "../../../inputs/Seo_urlWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySeo_urlArgs {
  @TypeGraphQL.Field(_type => Seo_urlWhereInput, {
    nullable: true
  })
  where?: Seo_urlWhereInput | undefined;
}
