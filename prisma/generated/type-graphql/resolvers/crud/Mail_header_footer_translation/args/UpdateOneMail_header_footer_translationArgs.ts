import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_header_footer_translationUpdateInput } from "../../../inputs/Mail_header_footer_translationUpdateInput";
import { Mail_header_footer_translationWhereUniqueInput } from "../../../inputs/Mail_header_footer_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMail_header_footer_translationArgs {
  @TypeGraphQL.Field(_type => Mail_header_footer_translationUpdateInput, {
    nullable: false
  })
  data!: Mail_header_footer_translationUpdateInput;

  @TypeGraphQL.Field(_type => Mail_header_footer_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Mail_header_footer_translationWhereUniqueInput;
}
