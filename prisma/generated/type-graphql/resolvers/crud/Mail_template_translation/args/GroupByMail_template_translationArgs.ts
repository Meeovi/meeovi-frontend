import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_template_translationOrderByWithAggregationInput } from "../../../inputs/Mail_template_translationOrderByWithAggregationInput";
import { Mail_template_translationScalarWhereWithAggregatesInput } from "../../../inputs/Mail_template_translationScalarWhereWithAggregatesInput";
import { Mail_template_translationWhereInput } from "../../../inputs/Mail_template_translationWhereInput";
import { Mail_template_translationScalarFieldEnum } from "../../../../enums/Mail_template_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMail_template_translationArgs {
  @TypeGraphQL.Field(_type => Mail_template_translationWhereInput, {
    nullable: true
  })
  where?: Mail_template_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Mail_template_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"mail_template_id" | "language_id" | "sender_name" | "subject" | "description" | "content_html" | "content_plain" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Mail_template_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Mail_template_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
