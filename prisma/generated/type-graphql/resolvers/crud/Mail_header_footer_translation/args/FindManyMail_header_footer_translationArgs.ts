import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_header_footer_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Mail_header_footer_translationOrderByWithRelationAndSearchRelevanceInput";
import { Mail_header_footer_translationWhereInput } from "../../../inputs/Mail_header_footer_translationWhereInput";
import { Mail_header_footer_translationWhereUniqueInput } from "../../../inputs/Mail_header_footer_translationWhereUniqueInput";
import { Mail_header_footer_translationScalarFieldEnum } from "../../../../enums/Mail_header_footer_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyMail_header_footer_translationArgs {
  @TypeGraphQL.Field(_type => Mail_header_footer_translationWhereInput, {
    nullable: true
  })
  where?: Mail_header_footer_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Mail_header_footer_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Mail_header_footer_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Mail_header_footer_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Mail_header_footer_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Mail_header_footer_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"mail_header_footer_id" | "language_id" | "name" | "description" | "header_html" | "header_plain" | "footer_html" | "footer_plain" | "created_at" | "updated_at"> | undefined;
}
