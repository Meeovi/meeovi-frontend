import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_template_mediaCreateManyInput } from "../../../inputs/Mail_template_mediaCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMail_template_mediaArgs {
  @TypeGraphQL.Field(_type => [Mail_template_mediaCreateManyInput], {
    nullable: false
  })
  data!: Mail_template_mediaCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
