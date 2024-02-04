import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_template_type_translationOrderByWithAggregationInput } from "../../../inputs/Mail_template_type_translationOrderByWithAggregationInput";
import { Mail_template_type_translationScalarWhereWithAggregatesInput } from "../../../inputs/Mail_template_type_translationScalarWhereWithAggregatesInput";
import { Mail_template_type_translationWhereInput } from "../../../inputs/Mail_template_type_translationWhereInput";
import { Mail_template_type_translationScalarFieldEnum } from "../../../../enums/Mail_template_type_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMail_template_type_translationArgs {
  @TypeGraphQL.Field(_type => Mail_template_type_translationWhereInput, {
    nullable: true
  })
  where?: Mail_template_type_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_type_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Mail_template_type_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_type_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"mail_template_type_id" | "language_id" | "name" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Mail_template_type_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Mail_template_type_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
