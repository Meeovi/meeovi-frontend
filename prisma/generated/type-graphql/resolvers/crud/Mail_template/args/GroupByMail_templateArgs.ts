import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_templateOrderByWithAggregationInput } from "../../../inputs/Mail_templateOrderByWithAggregationInput";
import { Mail_templateScalarWhereWithAggregatesInput } from "../../../inputs/Mail_templateScalarWhereWithAggregatesInput";
import { Mail_templateWhereInput } from "../../../inputs/Mail_templateWhereInput";
import { Mail_templateScalarFieldEnum } from "../../../../enums/Mail_templateScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMail_templateArgs {
  @TypeGraphQL.Field(_type => Mail_templateWhereInput, {
    nullable: true
  })
  where?: Mail_templateWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Mail_templateOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Mail_templateOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_templateScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "mail_template_type_id" | "system_default" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Mail_templateScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Mail_templateScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
