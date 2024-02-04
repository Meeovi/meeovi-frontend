import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_header_footer_translationUpdateManyMutationInput } from "../../../inputs/Mail_header_footer_translationUpdateManyMutationInput";
import { Mail_header_footer_translationWhereInput } from "../../../inputs/Mail_header_footer_translationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMail_header_footer_translationArgs {
  @TypeGraphQL.Field(_type => Mail_header_footer_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Mail_header_footer_translationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Mail_header_footer_translationWhereInput, {
    nullable: true
  })
  where?: Mail_header_footer_translationWhereInput | undefined;
}
