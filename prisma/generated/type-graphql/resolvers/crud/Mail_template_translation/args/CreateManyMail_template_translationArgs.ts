import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_template_translationCreateManyInput } from "../../../inputs/Mail_template_translationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMail_template_translationArgs {
  @TypeGraphQL.Field(_type => [Mail_template_translationCreateManyInput], {
    nullable: false
  })
  data!: Mail_template_translationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
