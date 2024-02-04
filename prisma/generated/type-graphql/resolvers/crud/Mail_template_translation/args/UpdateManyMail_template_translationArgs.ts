import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_template_translationUpdateManyMutationInput } from "../../../inputs/Mail_template_translationUpdateManyMutationInput";
import { Mail_template_translationWhereInput } from "../../../inputs/Mail_template_translationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMail_template_translationArgs {
  @TypeGraphQL.Field(_type => Mail_template_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Mail_template_translationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Mail_template_translationWhereInput, {
    nullable: true
  })
  where?: Mail_template_translationWhereInput | undefined;
}
