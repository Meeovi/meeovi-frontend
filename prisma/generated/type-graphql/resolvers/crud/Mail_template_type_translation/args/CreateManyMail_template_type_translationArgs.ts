import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_template_type_translationCreateManyInput } from "../../../inputs/Mail_template_type_translationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMail_template_type_translationArgs {
  @TypeGraphQL.Field(_type => [Mail_template_type_translationCreateManyInput], {
    nullable: false
  })
  data!: Mail_template_type_translationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
