import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_header_footer_translationCreateManyInput } from "../../../inputs/Mail_header_footer_translationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMail_header_footer_translationArgs {
  @TypeGraphQL.Field(_type => [Mail_header_footer_translationCreateManyInput], {
    nullable: false
  })
  data!: Mail_header_footer_translationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
