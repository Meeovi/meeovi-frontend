import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_template_mediaUpdateManyMutationInput } from "../../../inputs/Mail_template_mediaUpdateManyMutationInput";
import { Mail_template_mediaWhereInput } from "../../../inputs/Mail_template_mediaWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMail_template_mediaArgs {
  @TypeGraphQL.Field(_type => Mail_template_mediaUpdateManyMutationInput, {
    nullable: false
  })
  data!: Mail_template_mediaUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Mail_template_mediaWhereInput, {
    nullable: true
  })
  where?: Mail_template_mediaWhereInput | undefined;
}
