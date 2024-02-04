import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cms_sectionCreateManyInput } from "../../../inputs/Cms_sectionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCms_sectionArgs {
  @TypeGraphQL.Field(_type => [Cms_sectionCreateManyInput], {
    nullable: false
  })
  data!: Cms_sectionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
