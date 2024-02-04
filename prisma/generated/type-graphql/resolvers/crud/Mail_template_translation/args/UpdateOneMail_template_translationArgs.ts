import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_template_translationUpdateInput } from "../../../inputs/Mail_template_translationUpdateInput";
import { Mail_template_translationWhereUniqueInput } from "../../../inputs/Mail_template_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMail_template_translationArgs {
  @TypeGraphQL.Field(_type => Mail_template_translationUpdateInput, {
    nullable: false
  })
  data!: Mail_template_translationUpdateInput;

  @TypeGraphQL.Field(_type => Mail_template_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Mail_template_translationWhereUniqueInput;
}
