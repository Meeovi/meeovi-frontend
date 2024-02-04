import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_blockCreateManyInput } from "../../../inputs/Cms_blockCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCms_blockArgs {
  @TypeGraphQL.Field(_type => [Cms_blockCreateManyInput], {
    nullable: false
  })
  data!: Cms_blockCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
