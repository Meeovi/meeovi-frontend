import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_header_footer_translationOrderByWithAggregationInput } from "../../../inputs/Mail_header_footer_translationOrderByWithAggregationInput";
import { Mail_header_footer_translationScalarWhereWithAggregatesInput } from "../../../inputs/Mail_header_footer_translationScalarWhereWithAggregatesInput";
import { Mail_header_footer_translationWhereInput } from "../../../inputs/Mail_header_footer_translationWhereInput";
import { Mail_header_footer_translationScalarFieldEnum } from "../../../../enums/Mail_header_footer_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMail_header_footer_translationArgs {
  @TypeGraphQL.Field(_type => Mail_header_footer_translationWhereInput, {
    nullable: true
  })
  where?: Mail_header_footer_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Mail_header_footer_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Mail_header_footer_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_header_footer_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"mail_header_footer_id" | "language_id" | "name" | "description" | "header_html" | "header_plain" | "footer_html" | "footer_plain" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Mail_header_footer_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Mail_header_footer_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
