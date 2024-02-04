import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_template_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Mail_template_translationOrderByWithRelationAndSearchRelevanceInput";
import { Mail_template_translationWhereInput } from "../../../inputs/Mail_template_translationWhereInput";
import { Mail_template_translationWhereUniqueInput } from "../../../inputs/Mail_template_translationWhereUniqueInput";
import { Mail_template_translationScalarFieldEnum } from "../../../../enums/Mail_template_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyMail_template_translationArgs {
  @TypeGraphQL.Field(_type => Mail_template_translationWhereInput, {
    nullable: true
  })
  where?: Mail_template_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Mail_template_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Mail_template_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Mail_template_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"mail_template_id" | "language_id" | "sender_name" | "subject" | "description" | "content_html" | "content_plain" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
